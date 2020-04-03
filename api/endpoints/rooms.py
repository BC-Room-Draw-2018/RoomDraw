#!/usr/bin/python

import falcon
from private import *
import models

from utils import *

class Room(object):
	def on_get(self, request, response):
		room_number = INT(request.params.get("room_number"))
		spots_left =  INT(request.params.get("spots_left"))
		floor =       INT(request.params.get("floor"))
		dorm_id =     INT(request.params.get("dorm_id"))

		if (room_number == -1 and spots_left == -1):
			with sql() as session:
				rooms = session.query(models.Room).filter_by(dorm_id=dorm_id, floor=floor).all()
				response.media = []
				
				for room in rooms:
					response.media.append(room.dict())

		else:
			with sql() as session:
				response.media = session.query(models.Room).filter_by(dorm_id=dorm_id, room_number=room_number, available_spots=spots_left, floor=floor).first().dict()