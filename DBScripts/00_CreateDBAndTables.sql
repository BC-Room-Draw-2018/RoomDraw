CREATE DATABASE IF NOT EXISTS RoomDrawTesting;

USE RoomDrawTesting;

CREATE TABLE IF NOT EXISTS Students(

	student_id INT NOT NULL,
	first_name VARCHAR(64) NOT NULL,
	last_name VARCHAR(64) NOT NULL,
	random_number INT NOT NULL,
	grade_level INT NOT NULL,
	sex ENUM('M', 'F') NOT NULL,
	group_id INT NOT NULL,
	roommate_id INT,
	room VARCHAR(4),
	dorm_id INT,
	floor INT,

	PRIMARY KEY(student_id)
);

CREATE TABLE IF NOT EXISTS Users(
	student_id INT NOT NULL,
	email VARCHAR(256) NOT NULL,
	password VARCHAR(80) NOT NULL,
	salt VARCHAR(64) NULL, /*Guid used to salt passwords*/

	PRIMARY KEY(student_id)
);	

CREATE TABLE IF NOT EXISTS StudentGroups(
	group_id INT NOT NULL,
	random_number INT NOT NULL,
	grade_level INT NOT NULL,
	sex ENUM('M', 'F') NOT NULL,

	PRIMARY KEY(group_id)
);

CREATE TABLE IF NOT EXISTS GroupInvites(
	student_id INT NOT NULL,
	group_id INT NOT NULL,

	PRIMARY KEY (student_id, group_id)
);

CREATE TABLE IF NOT EXISTS Dorms(
	dorm_id INT NOT NULL,
	dorm_code VARCHAR(4) NOT NULL,
	dorm_name VARCHAR(64) NOT NULL,
	sex ENUM('M', 'F') NOT NULL,
	photo BLOB,
	floors INT,

	PRIMARY KEY(dorm_id)
);

CREATE TABLE IF NOT EXISTS Rooms(
	room_number VARCHAR(8) NOT NULL,
	dorm_id INT NOT NULL,
	capacity INT NOT NULL,
	available_spots INT NOT NULL,
	description VARCHAR(200),
	floor INT NOT NULL,

	PRIMARY KEY(room_number, dorm_id)
);

CREATE TABLE IF NOT EXISTS GroupWishlists(
	group_id INT NOT NULL,
	current_rank INT NOT NULL,
	dorm_id INT NOT NULL,
	room_id VARCHAR(8) NOT NULL,
	floor INT,

	PRIMARY KEY(group_id, current_rank)
);

CREATE TABLE IF NOT EXISTS StudentWishlists(
	student_id INT NOT NULL,
	current_rank INT NOT NULL,
	dorm_id INT NOT NULL,
	room_id VARCHAR(8) NOT NULL,
	floor INT,

	PRIMARY KEY(student_id, current_rank)
);
