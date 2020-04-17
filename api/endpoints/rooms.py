#!/usr/bin/python

import falcon
from private import *
import models

from utils import *
from endpoints.groups import get_group_members

def claim_room(room, group_members):
	"""
	Accepts an orm room and a list of orm members.
	Returns 0 if room was added successfully
	Returns 1 if room is taken
	Returns 2 if group is too large
	Returns 3 if group is too small
	"""
	min_fill = 0.75
	size = len(group_members)
	if room.available_spots == 0: return 1
	if size > room.available_spots: return 2
	if room.available_spots == room.capacity and size < min_fill * room.capacity:
		return 3

	for student in group_members:
		student.dorm_id = room.dorm_id
		student.room = room.room_number
	room.available_spots -= size
	return 0

class Room(object):
	def on_get(self, request, response):
		room_number = INT(request.params.get("room_number"), nullable=True)
		spots_left  = INT(request.params.get("spots_left"), nullable=True)
		floor       = INT(request.params.get("floor"))
		dorm_id     = INT(request.params.get("dorm_id"))

		with sql() as session:
			rooms = session.query(models.Room).filter_by(dorm_id=dorm_id, floor=floor)

			if room_number is not None:
				rooms = rooms.filter_by(room_number=room_number)
				if spots_left is not None:
					rooms = rooms.filter_by(available_spots=spots_left)
				return rooms.first().dict()

			response.media = []

			for room in rooms.all():
				response.media.append(room.dict())


	# claim a room
	def on_post(self, request, response):
		room_number = INT(request.params.get("room_number"))
		dorm_id     = INT(request.params.get("dorm_id"))

		with sql(commit=True) as session:
			student = get_student_by_id(self.student_id, session)
			if student.student_id != student.group_id:
				raise falcon.HTTPForbidden(description="Only the group leader may claim a room")

			room = session.query(models.Room).filter_by(dorm_id=dorm_id, room_number=room_number).first()
			group = get_group_members(self.student_id, session)

			error = claim_room(room, group)
			message = {"success": False}
			if error == 1:
				message["error"] = "Room is full"
			elif error == 2:
				message["error"] = "Group size is too large for this room"
			elif error == 3:
				message["error"] = "Group size is too small for this room"
			else:
				message["success"] = True
			response.media = message
			session.commit()
