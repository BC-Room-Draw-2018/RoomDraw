#!/usr/bin/python

import sqlalchemy
import sqlalchemy.orm
import config
from contextlib import contextmanager

_engine = None

def get_dialect():
	return config.sql_dialect
def get_driver():
	return config.sql_driver
def get_host():
	return config.sql_host
def get_port():
	return config.sql_port
def get_user():
	return config.sql_user
def get_password():
	return config.sql_password
def get_db():
	return config.sql_db

def sqlalchemy_init(pool_size=5, max_overflow=10, timeout=10):
	global _engine
	url = sqlalchemy.engine.url.URL(get_driver(), get_user(),
			get_password(), get_host(), get_port(), get_db())
	_engine = sqlalchemy.create_engine(url, pool_size=pool_size, max_overflow=max_overflow, pool_timeout=timeout)

@contextmanager
def sql(session=None, commit=False):
	global _engine
	close = False
	try:
		if session is None:
			Session = sqlalchemy.orm.sessionmaker(bind=_engine)
			session = Session()
			close = True
		yield session
	finally:
		if close:
			if commit:
				session.commit()
			session.close()
