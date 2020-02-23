import falcon
from private import *
import models

from utils import *

class GroupWishlist(object):
	def on_get(self, request, response):
		with sql() as session:
			student = get_student_by_id(self.student_id, session)
			group_id = student.group_id

			wishlist = session.query(models.GroupWishlist).filter_by(group_id=group_id).all()

			response.media = []
			for item in wishlist:
				response.media.append(item.dict(exclude='group_id'))

	def on_delete(self, request, response):
		rank = INT(request.params.get("rank"))

		with sql(commit=True) as session:
			student = get_student_by_id(self.student_id, session)
			group_id = student.group_id

			session.query(models.GroupWishlist).filter_by(rank=rank, group_id=group_id).delete()
			wishlist = session.query(models.GroupWishlist).filter(models.GroupWishlist.rank > rank).filter_by(group_id=group_id).all()

			for option in wishlist:
				option.rank -= 1
	
	def on_put(self, request, response):
		rank = INT(request.params.get("rank"))
		dorm_id = INT(request.params.get("dorm_id"))
		room_id = INT(request.params.get("room_id"), nullable=True)
		floor = INT(request.params.get("floor"), nullable=True)

		with sql(commit=True) as session:
			student = get_student_by_id(self.student_id, session)

			group_id = student.group_id
			wishlist = session.query(models.GroupWishlist).filter_by(group_id=group_id).all()

			for value in wishlist:
				if value.rank >= rank:
					value.rank += 1

			item = models.GroupWishlist(group_id=group_id, rank=rank, dorm_id=dorm_id, room_id=room_id, floor=floor)
			session.add(item)
