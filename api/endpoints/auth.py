import bcrypt
import json
import falcon
import models
from private.sql import *
from config import EMAIL_DOMAIN

import session

def _validate_user(username):
	if username is None:
		return False
	return True

def _validate_password(password):
	if password is None:
		return False
	return True

def _check_password(row, password):
	return bcrypt.checkpw(password.encode('utf-8'), row.password.encode('utf-8'))

class Login(object):
	def on_post(self, request, response):
		try:
			params = json.loads(request.stream.read())
		except json.JSONDecodeError:
			raise falcon.HTTPBadRequest()

		username = params.get("username")
		password = params.get("password")

		if not _validate_user(username):
			raise falcon.HTTPBadRequest(description="Invalid username")

		if not _validate_password(password):
			raise falcon.HTTPBadRequest(description="Invalid password")

		with sql() as db_session:
			user = db_session.query(models.User).filter((models.User.email==username) |
					(models.User.email=="%s@%s" % (username, EMAIL_DOMAIN))).first()
			if user is None:
				response.status = falcon.HTTP_NO_CONTENT
				return
			if _check_password(user, password):
				sess = session.create_session(user.student_id)
				response.media = {"token": sess.token, "success": 1}
			else:
				response.media = {"token": "", "success": 0}

class Logout(object):
	def on_post(self, request, response):
		session.destroy_session(self.session)
		response.status = falcon.HTTP_NO_CONTENT
