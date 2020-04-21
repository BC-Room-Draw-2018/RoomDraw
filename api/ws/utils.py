# list of privileged ip's
_privileged = []

def is_privileged(websocket):
	global _privileged
	IPs = websocket.request_headers.get_all("X-Forwarded-For")
	return len(IPs) == 0 or (len(IPs) == 1 and IPs[0] in _privileged)
