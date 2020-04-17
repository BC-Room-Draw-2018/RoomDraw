#!/usr/bin/python

import falcon
import json
from private import *
import models
import session

from utils import *

def reinit_group(group_id, session=None):
	"""Reinitialize the group data based on the "highest-weighted" student"""
	with sql(session, commit=True) as session:
		members = get_group_members(group_id, session)
		group = session.query(models.Group).filter_by(group_id=group_id).first()
		# update the group
		group.random_number = min(members, key=lambda student : student.random_number).random_number
		group.grade_level = max(members, key=lambda student : student.grade_level).grade_level

def get_group_members(group_id, session=None):
	with sql(session) as session:
		return session.query(models.Student).filter_by(group_id=group_id).all()

class Group(object):
	def on_get(self, request, response):
		with sql() as session:
			stud = get_student_by_id(self.student_id, session)
			gid = stud.group_id
			group = session.query(models.Group).filter_by(group_id=gid).first()
			response.media = group.dict() if group else "{}"
	
	# Leave the group
	def on_delete(self, request, response):
		with sql(commit=True) as session:
			student = get_student_by_id(self.student_id, session)
			old_group = student.group_id

			if student.student_id != old_group:
				student.group_id = self.student_id
			else:
				members = get_group_members(old_group, session)
				# if not in a group
				if len(members) == 1:
					return
				leader = min(members, key=lambda x : x.random_number)
				old_group = leader.student_id
				for m in members:
					m.group_id = old_group

			reinit_group(old_group, session)
			reinit_group(student.group_id, session)

class GroupMembers(object):
	def on_get(self, request, response):
		with sql() as session:
			stud = get_student_by_id(self.student_id, session)
			gid = stud.group_id

			members = get_group_members(gid)

			response.media = []
			for person in members:
				response.media.append(person.dict(exclude="student_id"))

class GroupInvite(object):
	def on_get(self, request, response):
		with sql() as session:
			invitations = session.query(models.Invitation).filter_by(student_id=self.student_id).all()
			response.media = []
			for inv in invitations:
				response.media.append(inv.dict(exclude='student_id'))

	# Invite a student
	def on_post(self, request, response):
		params = json.loads(request.stream.read())
		recepient = INT(params.get("random_number"))

		with sql(commit=True) as session:
			student_of_random_number = session.query(models.Student).filter_by(random_number=recepient).first()
			student_id = student_of_random_number.student_id
			stud = get_student_by_id(student_id, session)

			gid = stud.group_id

			invitation = session.query(models.Invitation).filter_by(student_id=student_id, group_id=gid).first()
			if invitation is not None:
				return
			invitation = models.Invitation(student_id=student_id, group_id=gid)
			session.add(invitation)

	# Accept an invite
	def on_put(self, request, response):
		params = json.loads(request.stream.read())
		gid = INT(params.get("group_id"))

		with sql(commit=True) as session:
			student = get_student_by_id(self.student_id, session)
			student.group_id = gid
			reinit_group(gid, session)

			session.query(models.Invitation).filter_by(student_id=self.student_id).delete()

	# Decline an invite
	def on_delete(self, request, response):
		gid = INT(request.params.get("group_id"))

		with sql(commit=True) as session:
			session.query(models.Invitation).filter_by(student_id=self.student_id, group_id=gid).delete()
