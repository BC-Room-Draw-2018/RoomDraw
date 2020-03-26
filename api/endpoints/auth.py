import falcon

import session

class Login(object):
	def on_post(self, request, response):
		pass

class Logout(object):
	def on_post(self, request, response):
		session.destroy_session(self.session_token)
