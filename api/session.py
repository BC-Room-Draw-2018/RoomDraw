#!/usr/bin/python

from utils import *
import datetime
import uuid

def _create_token():
	return uuid.uuid4().hex

class Session(object):
	def __init__(self, student_id, token=None):
		self.student_id = student_id
		self.token = _create_token() if token is None else token
		self.timeout = datetime.timedelta(minutes=10)
		self.reset_timer()

	def reset_timer(self):
		self.expiration = datetime.datetime.now() + self.timeout

	def is_valid(self):
		ret = datetime.datetime.now() < self.expiration
		if ret:
			self.reset_timer()
		return ret

_sessions = {}

# if token is not None, use that for testing purposes
def create_session(student_id, token=None):
	"""
	Create a student and put it into the sessions dictionary
	Returns the session token
	"""
	_sessions[token] = Session(student_id, token)

def get_session(request):
	try:
		return _sessions[request.headers.get("SESSION-ID")]
	except KeyError:
		return None

def destroy_session(session):
	if session and session.token in _sessions:
		del _sessions[session.token]
