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
		room = request.params.get("room_id")
		floor = INT(request.params.get("floor"), nullable=True)

		with sql(commit=True) as session:
			student = get_student_by_id(self.student_id, session)
			gid = student.group_id

			model = models.GroupWishlist
			wishlist = session.query(model).filter(model.rank >= rank).filter_by(group_id=gid).order_by(model.rank).all()
			# manually commit.  We have to do this to avoid duplicate primary keys
			for item in wishlist[::-1]:
				item.rank += 1
				session.commit()

			item = models.GroupWishlist(group_id=gid, rank=rank, dorm_id=dorm_id, room_id=room, floor=floor)
			session.add(item)
