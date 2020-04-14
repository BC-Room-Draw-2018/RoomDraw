#!/usr/bin/python

from private import *
import models

from utils import *

class StudentWishlist(object):
	def on_get(self, request, response):
		with sql() as session:
			wishlist = session.query(models.StudentWishlist).filter_by(student_id=self.student_id).all()

			response.media = []
			for item in wishlist:
				response.media.append(item.dict(exclude='student_id'))

	def on_delete(self, request, response):
		rank = INT(request.params.get("rank"))

		with sql(commit=True) as session:
			session.query(models.StudentWishlist).filter_by(rank=rank, student_id=self.student_id).delete()
			wishlist = session.query(models.StudentWishlist).filter(models.StudentWishlist.rank > rank).filter_by(student_id=self.student_id).all()

			for option in wishlist:
				option.rank -= 1

	def on_put(self, request, response):
		rank = INT(request.params.get("rank"))
		dorm_id = INT(request.params.get("dorm_id"))
		room_id = INT(request.params.get("room_id"), nullable=True)
		floor = INT(request.params.get("floor"), nullable=True)

		with sql(commit=True) as session:
			model = models.StudentWishlist
			wishlist = session.query(model).filter(model.rank >= rank).filter_by(student_id=self.student_id).order_by(model.rank).all()
			# manually commit.  We have to do this to avoid duplicate primary keys
			for item in wishlist[::-1]:
				item.rank += 1
				session.commit()

			item = models.StudentWishlist(student_id=self.student_id, rank=rank, dorm_id=dorm_id, room_id=room_id, floor=floor)
			session.add(item)
