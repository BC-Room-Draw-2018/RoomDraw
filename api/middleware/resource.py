import session

class ResourceMiddleware(object):
	def process_resource(self, request, response, resource, params):
		sess = session.get_session(request)
		if sess:
			resource.session = sess
			resource.student_id = sess.student_id
