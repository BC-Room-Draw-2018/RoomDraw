#!/usr/bin/python

import falcon
from private import *
import models
import session

from utils import *

class Dorm(object):
	# Get information on dorms
	def on_get(self, request, response):
		dorm_id = INT(request.params.get("dorm"), nullable=True)

		with sql() as session:
			student = get_student_by_id(self.student_id, session)
			results = session.query(models.Dorm).filter_by(sex=student.sex)

			if dorm_id is not None:
				if dorm_id == 1111:
					#get all dorms
					dorms = session.query(models.Dorm).filter_by(sex=student.sex).all()
					response.media = []
					for dorm in dorms:
						response.media.append(dorm.dict())
				else :
					response.media = results.filter_by(dorm_id=dorm_id).first().dict()			
			else:
				response.media = []
				for dorm in results:
					response.media.append(dorm.dict())
