#!/usr/bin/python

import falcon
from private import *
import models

from utils import *

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
