#!/usr/bin/python

from falcon import HTTPUnauthorized
from session import *

def authenticated(session):
	return session.is_valid() if session is not None else False

class AuthenticationMiddleware(object):
	def process_request(self, request, response):
		if request.method == 'OPTIONS':
			return
		if request.path == '/login':
			return

		session = get_session(request)
		if not authenticated(session):
			destroy_session(session)
			raise HTTPUnauthorized(title="Not authenticated", challenges=["Bearer"])
