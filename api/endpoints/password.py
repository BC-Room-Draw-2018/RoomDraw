import falcon
from utils import *
from private.sql import *
import models
import bcrypt
import json

from endpoints.auth import _check_password

def hash_password(password):
	return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

def ensure_password_strength(password):
	"""Returns message about password strength"""
	if len(password) < 10:
		return "Password too short"
	return None

class Password(object):
	def on_post(self, request, response):
		current_password = new_password = None
		try:
			params = json.loads(request.stream.read())
			current_password = params["password"]
			new_password = params["new_password"]
		except (KeyError, json.JSONDecodeError):
			raise falcon.HTTPBadRequest()

		response.media = {}
		with sql(commit=True) as session:
			model = models.User
			user = session.query(model).filter_by(student_id=self.student_id).first()
			if _check_password(user, current_password):
				message = ensure_password_strength(new_password)
				if message:
					response.media = {"success": False, "error": message}
					return

				user.password = hash_password(new_password)
				response.media["success"] = True
			else:
				response.media["success"] = False

