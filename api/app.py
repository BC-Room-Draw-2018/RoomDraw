#!/usr/bin/python

import falcon
from falcon_cors import CORS
import endpoints
import session
from private.sql import sqlalchemy_init
from middleware.authentication import *
from middleware.resource import *
from middleware.exception_handlers import *

class API(object):
	def __init__(self):
		# TODO fix this
		self.allowed_origins = ["*"]
		self._setup_middleware()
		# self._setup_errors()
		self._setup_endpoints()
		self._setup_sqlalchemy()

	def _setup_middleware(self):
		self.cors_middleware = CORS(allow_all_origins=True, allow_all_headers=True, allow_all_methods=True)
		self.authentication_middleware = AuthenticationMiddleware()
		self.resource_middleware = ResourceMiddleware()

		self.api = falcon.API(middleware=[self.cors_middleware.middleware, self.authentication_middleware, self.resource_middleware])

	def _setup_errors(self):
		self.api.add_error_handler(Exception, InternalServerError)

	def _setup_endpoints(self):
		self.api.add_route("/group", endpoints.Group())
		self.api.add_route("/group/rank", endpoints.GroupRank())
		self.api.add_route("/group/members", endpoints.GroupMembers())
		self.api.add_route("/group/invite", endpoints.GroupInvite())
		self.api.add_route("/group/invite/pending", endpoints.GroupPendingInvite())
		self.api.add_route("/group/leader", endpoints.GroupLeader())
		self.api.add_route("/group_wishlist", endpoints.GroupWishlist())
		self.api.add_route("/wishlist", endpoints.StudentWishlist())
		self.api.add_route("/student", endpoints.Student())
		self.api.add_route("/myinfo", endpoints.MyInfo())
		self.api.add_route("/dorms", endpoints.Dorm())
		self.api.add_route("/rooms", endpoints.Room())
		self.api.add_route("/change-password", endpoints.Password())
		self.api.add_route("/login", endpoints.Login())
		self.api.add_route("/logout", endpoints.Logout())

	def _setup_sqlalchemy(self):
		sqlalchemy_init()

api = API()
application = api.api

session.create_session(2009578, "alex")
session.create_session(1, "denton")
session.create_session(2000000, "eli")
session.create_session(3, "michael")

def serve(host='localhost', port=8000):
	import waitress
	waitress.serve(api.api, host=host, port=port, ipv6=False)

if __name__ == '__main__':
	serve()
