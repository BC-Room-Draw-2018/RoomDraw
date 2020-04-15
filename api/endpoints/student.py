#!/usr/bin/python

import falcon
from utils import *
from private import *
import models

class Student(object):
	# without an id, return info on current student
	def on_get(self, request, response):
		ID = INT(request.params.get("id"), nullable=True)
		last_name = request.params.get("last_name")
		if ID is None:
			if last_name is None:
				ID = self.student_id

		student = get_student_by_id(ID)
		response.media = student.dict(exclude=["student_id"])

class MyInfo(object):
	def on_get(self, request, response):
		raise falcon.HTTPFound("/student")
