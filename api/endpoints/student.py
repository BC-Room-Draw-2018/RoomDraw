#!/usr/bin/python

import falcon
from utils import *
from private.sql import *
import models

class Student(object):
	def search(self, search_string):
		search_string = str(search_string)
		with sql() as session:
			model = models.Student
			student = get_student_by_id(self.student_id, session)
			ret = session.query(model).filter_by(sex=student.sex).filter \
				(model.first_name.concat(" ").concat(model.last_name).contains(search_string, autoescape=True))
			return ret.limit(10)

	# without an id, return info on current student
	def on_get(self, request, response):
		response.media = []

		search_string = str(request.params.get("search"))
		if search_string and len(search_string) < 2:
			return

		students = self.search(search_string)
		if students:
			for student in students:
				response.media.append(student.dict())

class MyInfo(object):
	def on_get(self, request, response):
		student = get_student_by_id(self.student_id)
		response.media = student.dict(exclude=["student_id"])
