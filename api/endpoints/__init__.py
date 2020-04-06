from endpoints.dorms import Dorm
from endpoints.groups import Group, GroupMembers, GroupInvite
from endpoints.group_wishlist import GroupWishlist
from endpoints.rooms import Room
from endpoints.student import Student, MyInfo
from endpoints.student_wishlist import StudentWishlist

from endpoints.auth import Login, Logout


__all__ = [
	# RoomDraw
	"Dorm",
	"Group",
	"GroupMembers",
	"GroupInvite",
	"GroupWishlist",
	"Room",
	"Student",
	"MyInfo",
	"StudentWishlist",

	# Authentication
	"Login",
	"Logout"
]
