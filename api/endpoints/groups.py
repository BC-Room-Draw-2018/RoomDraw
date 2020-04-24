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
		if len(members) == 0:
			return
		group = session.query(models.Group).filter_by(group_id=group_id).first()
		# update the group table
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

				members = list(filter(lambda stud : stud.student_id != old_group, members))

				leader = min(members, key=lambda x : x.random_number)
				old_group = leader.student_id
				for m in members:
					m.group_id = old_group

			reinit_group(old_group, session)
			reinit_group(student.group_id, session)

def get_rank(student_id):
	model = models.Group
	with sql() as session:
		gid = get_student_by_id(student_id, session).group_id
		random_number = session.query(model).filter_by(group_id=gid).first().random_number
		return session.query(model.random_number).distinct().filter(model.random_number < random_number).count()

class GroupRank(object):
	def on_get(self, request, response):
		response.media = get_rank(self.student_id)

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
				leader = get_group_leader(inv.group_id)
				if leader is None: continue
				leader_name = leader.first_name + " " + leader.last_name
				invite = {
					'group_id':inv.group_id,
					'leader':leader_name
				}
				response.media.append(invite)

	# Invite a student
	def on_post(self, request, response):
		params = json.loads(request.stream.read())
		random_number = INT(params.get("random_number"))

		with sql(commit=True) as session:
			stud = get_student_by_id(self.student_id, session)
			gid = stud.group_id
			group_size = len(get_group_members(gid, session))

			if group_size > 8:
				response.media = error("Your group is too large")
				return

			recepient = session.query(models.Student).filter_by(random_number=random_number).filter_by(sex=stud.sex).first()
			if recepient is None:
				response.media = error("Student not found")
				return

			invitation = session.query(models.Invitation).filter_by(student_id=recepient.student_id, group_id=gid).first()
			if invitation is not None: return
			invitation = models.Invitation(student_id=recepient.student_id, group_id=gid)
			session.add(invitation)
		response.media = {"success": True}

	# Accept an invite
	def on_put(self, request, response):
		params = json.loads(request.stream.read())
		gid = INT(params.get("group_id"))

		with sql(commit=True) as session:
			student = get_student_by_id(self.student_id, session)
			old_gid = student.group_id
			student.group_id = gid
			reinit_group(old_gid, session)
			reinit_group(gid, session)

			session.query(models.Invitation).filter_by(student_id=self.student_id).delete()

	# Decline an invite
	def on_delete(self, request, response):
		gid = INT(request.params.get("group_id"))

		with sql(commit=True) as session:
			session.query(models.Invitation).filter_by(student_id=self.student_id, group_id=gid).delete()

def get_group_leader(group_id, session=None):
	with sql(session) as session:
		members = get_group_members(group_id, session)
		if len(members) == 0:
			return None
		leader = min(members, key=lambda x : x.random_number)
		return leader

class GroupLeader(object):
	def on_get(self, request, response):
		# default response
		response.media = None
		with sql() as session:
			stud = get_student_by_id(self.student_id, session)
			leader = get_group_leader(stud.group_id, session)
			if leader is not None:
				response.media = leader.dict(exclude=["student_id"])
