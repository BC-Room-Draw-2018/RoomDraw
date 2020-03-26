import session

class ResourceMiddleware(object):
	def process_resource(self, request, response, resource, params):
		s = session.get_session(request)
		resource.session_token = s.token
		resource.student_id = s.student_id
