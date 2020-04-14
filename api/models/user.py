from sqlalchemy import Column, Integer, String, Enum
from models.base import Model, OrmModel

class User(Model, OrmModel):
	__tablename__ = 'Users'

	student_id = Column(Integer, primary_key=True)
	email = Column(String(256))
	password = Column(String(50))
	salt = Column(String(64))
