USE RoomDrawTesting

REPLACE INTO Students (student_id, first_name, last_name, random_number, grade_level, sex, group_id, roommate_id) VALUES
(0,  "alex",     "maese",    928,    3,  'M',  0,  NULL),
(1,  "denton",   "luns",     94819,  3,  'M',  1,  NULL),
(2,  "eli",      "pruneda",  1,      3,  'M',  2,  NULL),
(3,  "michael",  "grimmig",  491,    3,  'M',  3,  NULL);

REPLACE INTO Groups (group_id, random_number, grade_level, sex) VALUES
(0,  928,    3,  'M'),
(1,  94819,  3,  'M'),
(2,  1,      3,  'M'),
(3,  491,    3,  'M');

REPLACE INTO Dorms (dorm_id, dorm_code, dorm_name, sex, photo) VALUES
(0,  "LEM",  "Lemke Hall",          'M',  NULL),
(1,  "NEW",  "Newman Hall",         'M',  NULL),
(2,  "JOE",  "St. Joseph Hall",     'M',  NULL),
(3,  "STM",  "St. Michael Hall",    'M',  NULL),
(4,  "WOL",  "Wolf Hall",           'M',  NULL),
(5,  "KRE",  "Kremmeter Hall",      'F',  NULL),
(6,  "LIZ",  "Elizabeth Hall",      'F',  NULL),
(7,  "LEG",  "Legacy Hall",         'F',  NULL),
(8,  "MCD",  "McDonald Hall",       'F',  NULL),
(9,  "GUA", "Guadalupe Hall",       'F',  NULL),
(10, "CRA", "Cray Seaberg Hall"     'F',  NULL);

REPLACE INTO Rooms (room_number, dorm_id, capacity, available_spots, description, floor) VALUES
("49", 0, 4, 4, "4-bedroom apartment", 1), 
("50", 0, 4, 4, "4-bedroom apartment", 1), 
("51", 0, 4, 4, "2-bedroom apartment", 1),
("52", 0, 4, 4, "2-bedroom apartment", 1),
("53", 0, 4, 4, "4-bedroom apartment", 2),
("55", 0, 4, 4, "2-bedroom apartment", 2),
("56", 0, 4, 4, "2-bedroom apartment", 2),
("61", 0, 4, 4, "2-bedroom apartment", 2),
("62", 0, 4, 4, "2-bedroom apartment", 2),
("63", 0, 4, 4, "4-bedroom apartment", 2),
("64", 0, 4, 4, "4-bedroom apartment", 2),
("57", 0, 4, 4, "4-bedroom apartment", 3),
("58", 0, 4, 4, "4-bedroom apartment", 3),
("59", 0, 4, 4, "2-bedroom apartment", 3),
("60", 0, 4, 4, "2-bedroom apartment", 3),
("65", 0, 4, 4, "2-bedroom apartment", 3),
("66", 0, 4, 4, "2-bedroom apartment", 3),
("67", 0, 4, 4, "2-bedroom apartment", 3),
("69", 0, 4, 4, "2-bedroom apartment", 4),
("70", 0, 4, 4, "2-bedroom apartment", 4),
("71", 0, 4, 4, "4-bedroom apartment", 4),
("72", 0, 4, 4, "4-bedroom apartment", 4),
("001", 1, 2, 2, "4-person suite", 1),
("002", 1, 2, 2, "4-person suite", 1),
("003", 1, 2, 2, "4-person suite", 1),
("004", 1, 2, 2, "4-person suite", 1),
("101", 1, 2, 2, "4-person suite", 2),
("102", 1, 2, 2, "4-person suite", 2),
("103", 1, 2, 2, "4-person suite", 2),
("104", 1, 2, 2, "4-person suite", 2),
("105", 1, 2, 2, "4-person suite", 2),
("106", 1, 2, 2, "4-person suite", 2),
("107", 1, 2, 2, "4-person suite", 2),
("108", 1, 2, 2, "4-person suite", 2),
("109", 1, 2, 2, "4-person suite (w/RA)", 2),
("202", 1, 2, 2, "4-person suite (w/RA)", 3),
("203", 1, 2, 2, "4-person suite", 3),
("204", 1, 2, 2, "4-person suite", 3),
("205", 1, 2, 2, "4-person suite", 3),
("206", 1, 2, 2, "4-person suite", 3),
("207", 1, 2, 2, "4-person suite", 3),
("208", 1, 2, 2, "4-person suite", 3),
("209", 1, 2, 2, "4-person suite", 3),
("210", 1, 2, 2, "4-person suite", 3),
("211", 1, 2, 2, "4-person suite", 3),
("212", 1, 2, 2, "4-person suite", 3),
("213", 1, 2, 2, "4-person suite", 3),
("214", 1, 2, 2, "4-person suite", 3),
("215", 1, 2, 2, "4-person suite", 3),
("216", 1, 2, 2, "4-person suite", 3),
("217", 1, 2, 2, "4-person suite", 3),
("218", 1, 2, 2, "4-person suite", 3),
("219", 1, 2, 2, "4-person suite", 3),
("220", 1, 2, 2, "4-person suite", 3),
("302", 1, 2, 2, "4-person suite (w/RA)", 4),
("303", 1, 2, 2, "4-person suite", 4),
("304", 1, 2, 2, "4-person suite", 4),
("305", 1, 2, 2, "4-person suite", 4),
("306", 1, 2, 2, "4-person suite", 4),
("307", 1, 2, 2, "4-person suite", 4),
("308", 1, 2, 2, "4-person suite", 4),
("309", 1, 2, 2, "4-person suite", 4),
("310", 1, 2, 2, "4-person suite", 4),
("311", 1, 2, 2, "4-person suite", 4),
("312", 1, 2, 2, "4-person suite", 4),
("313", 1, 2, 2, "4-person suite", 4),
("314", 1, 2, 2, "4-person suite", 4),
("315", 1, 2, 2, "4-person suite", 4),
("316", 1, 2, 2, "4-person suite", 4),
("317", 1, 2, 2, "4-person suite", 4),
("318", 1, 2, 2, "4-person suite", 4),
("319", 1, 2, 2, "4-person suite", 4),
("320", 1, 2, 2, "4-person suite", 4),
("402", 1, 2, 2, "4-person suite (w/RA)", 5),
("403", 1, 2, 2, "4-person suite", 5),
("404", 1, 2, 2, "4-person suite", 5),
("405", 1, 2, 2, "4-person suite", 5),
("406", 1, 2, 2, "4-person suite", 5),
("407", 1, 2, 2, "4-person suite", 5),
("408", 1, 2, 2, "4-person suite", 5),
("409", 1, 2, 2, "4-person suite (w/RA)", 5),
("411", 1, 2, 2, "4-person suite", 5),
("412", 1, 2, 2, "4-person suite", 5),
("413", 1, 2, 2, "4-person suite", 5),
("414", 1, 2, 2, "4-person suite", 5),
("415", 1, 2, 2, "4-person suite", 5),
("416", 1, 2, 2, "4-person suite", 5),
("417", 1, 2, 2, "4-person suite", 5),
("418", 1, 2, 2, "4-person suite", 5),
("419", 1, 2, 2, "4-person suite", 5),
("420", 1, 2, 2, "4-person suite", 5),
("101", 2, 1, 1, "1-person room", 1),
("102", 2, 1, 1, "1-person room", 1),
("103", 2, 1, 1, "1-person room", 1),
("104", 2, 6, 6, "6-person suite", 1),
("105", 2, 1, 1, "1-person room", 1),
("107", 2, 1, 1, "1-person room", 1),
("108", 2, 6, 6, "6-person suite", 1),
("109", 2, 1, 1, "1-person room", 1),
("111", 2, 1, 1, "1-person room", 1),
("201", 2, 1, 1, "1-person room", 2),
("202", 2, 1, 1, "1-person room", 2),
("203", 2, 1, 1, "1-person room", 2),
("204", 2, 1, 1, "1-person room", 2),
("205", 2, 1, 1, "1-person room", 2),
("206", 2, 1, 1, "1-person room", 2),
("207", 2, 1, 1, "1-person room", 2),
("208", 2, 1, 1, "1-person room", 2),
("209", 2, 1, 1, "1-person room", 2),
("211", 2, 1, 1, "1-person room", 2),
("301", 2, 1, 1, "1-person room", 2),
("302", 2, 1, 1, "1-person room", 2),
("303", 2, 1, 1, "1-person room", 2),
("304", 2, 1, 1, "1-person room", 2),
("305", 2, 1, 1, "1-person room", 2),
("306", 2, 1, 1, "1-person room", 2),
("307", 2, 1, 1, "1-person room", 2),
("308", 2, 1, 1, "1-person room", 2),
("309", 2, 1, 1, "1-person room", 2),
("310", 2, 1, 1, "1-person room", 2),
("311", 2, 1, 1, "1-person room", 2),
("312", 2, 1, 1, "1-person room", 2),
("001", 3, 2, 2, "4-person suite", 1),
("003", 3, 2, 2, "4-person suite", 1),
("004", 3, 2, 2, "4-person suite", 1),
("005", 3, 2, 2, "4-person suite", 1),
("006", 3, 2, 2, "4-person suite", 1),
("007", 3, 2, 2, "4-person suite", 1),
("008", 3, 2, 2, "4-person suite", 1),
("009", 3, 2, 2, "4-person suite", 1),
("010", 3, 2, 2, "4-person suite", 1),
("011", 3, 2, 2, "4-person suite", 1),
("101", 3, 2, 2, "4-person suite", 2),
("103", 3, 2, 2, "4-person suite", 2),
("104", 3, 2, 2, "4-person suite", 2),
("105", 3, 2, 2, "4-person suite", 2),
("106", 3, 2, 2, "4-person suite", 2),
("107", 3, 2, 2, "4-person suite", 2),
("108", 3, 2, 2, "4-person suite", 2),
("109", 3, 2, 2, "4-person suite", 2),
("110", 3, 2, 2, "4-person suite", 2),
("111", 3, 2, 2, "4-person suite", 2),
("113", 3, 2, 2, "4-person suite", 2),
("115", 3, 2, 2, "4-person suite", 2),
("117", 3, 2, 2, "4-person suite", 2),
("119", 3, 2, 2, "4-person suite", 2),
("201", 3, 2, 2, "4-person suite", 3),
("203", 3, 2, 2, "4-person suite", 3),
("204", 3, 2, 2, "4-person suite", 3),
("205", 3, 2, 2, "4-person suite", 3),
("206", 3, 2, 2, "4-person suite", 3),
("207", 3, 2, 2, "4-person suite", 3),
("208", 3, 2, 2, "4-person suite", 3),
("209", 3, 2, 2, "4-person suite", 3),
("210", 3, 2, 2, "4-person suite", 3),
("211", 3, 2, 2, "4-person suite", 3),
("213", 3, 2, 2, "2-person room", 3),
("214", 3, 2, 2, "4-person suite", 3),
("215", 3, 2, 2, "4-person suite", 3),
("216", 3, 2, 2, "4-person suite", 3),
("217", 3, 2, 2, "4-person suite", 3),
("218", 3, 2, 2, "4-person suite", 3),
("219", 3, 2, 2, "4-person suite", 3),
("220", 3, 2, 2, "4-person suite", 3),
("221", 3, 2, 2, "4-person suite", 3),
("222", 3, 2, 2, "2-person room", 3),
("223", 3, 2, 2, "4-person suite", 3),
("225", 3, 2, 2, "4-person suite", 3),
("227", 3, 2, 2, "4-person suite", 3),
("229", 3, 2, 2, "4-person suite", 3),
("301", 3, 2, 2, "4-person suite", 4),
("303", 3, 2, 2, "4-person suite", 4),
("304", 3, 2, 2, "4-person suite", 4),
("305", 3, 2, 2, "4-person suite", 4),
("306", 3, 2, 2, "4-person suite", 4),
("307", 3, 2, 2, "4-person suite", 4),
("308", 3, 2, 2, "4-person suite", 4),
("309", 3, 2, 2, "4-person suite", 4),
("310", 3, 2, 2, "4-person suite", 4),
("311", 3, 2, 2, "4-person suite", 4),
("313", 3, 2, 2, "2-person room", 4),
("314", 3, 2, 2, "4-person suite", 4),
("315", 3, 2, 2, "4-person suite", 4),
("316", 3, 2, 2, "4-person suite", 4),
("317", 3, 2, 2, "4-person suite", 4),
("318", 3, 2, 2, "4-person suite", 4),
("319", 3, 2, 2, "4-person suite", 4),
("320", 3, 2, 2, "4-person suite", 4),
("321", 3, 2, 2, "4-person suite", 4),
("322", 3, 2, 2, "2-person room", 4),
("323", 3, 2, 2, "4-person suite", 4),
("325", 3, 2, 2, "4-person suite", 4),
("327", 3, 2, 2, "4-person suite", 4),
("329", 3, 2, 2, "4-person suite", 4),
("29", 4, 4, 4, "4-bedroom apartment", 1),
("30", 4, 4, 4, "2-bedroom apartment", 1),
("39", 4, 4, 4, "2-bedroom apartment", 1),
("40", 4, 4, 4, "4-bedroom apartment", 1),
("32", 4, 4, 4, "4-bedroom apartment", 2),
("33", 4, 4, 4, "2-bedroom apartment", 2),
("34", 4, 4, 4, "2-bedroom apartment", 2),
("41", 4, 4, 4, "2-bedroom apartment", 2),
("42", 4, 4, 4, "2-bedroom apartment", 2),
("43", 4, 4, 4, "4-bedroom apartment", 2),
("35", 4, 4, 4, "4-bedroom apartment", 3),
("36", 4, 4, 4, "4-bedroom apartment", 3),
("37", 4, 4, 4, "2-bedroom apartment", 3),
("38", 4, 4, 4, "2-bedroom apartment", 3),
("45", 4, 4, 4, "2-bedroom apartment", 3),
("46", 4, 4, 4, "2-bedroom apartment", 3),
("47", 4, 4, 4, "4-bedroom apartment", 3),
("48", 4, 4, 4, "4-bedroom apartment", 3),
("1", 5, 4, 4, "4-bedroom apartment", 1),
("2", 5, 4, 4, "4-bedroom apartment", 1),
("3", 5, 4, 4, "2-bedroom apartment", 1),
("4", 5, 4, 4, "2-bedroom apartment", 1),
("13", 5, 4, 4, "2-bedroom apartment", 1),
("14", 5, 4, 4, "2-bedroom apartment", 1),
("15", 5, 4, 4, "2-bedroom apartment", 1),
("16", 5, 4, 4, "2-bedroom apartment", 1),
("5", 5, 4, 4, "4-bedroom apartment", 2),
("6", 5, 4, 4, "4-bedroom apartment", 2),
("7", 5, 4, 4, "2-bedroom apartment", 2),
("8", 5, 4, 4, "2-bedroom apartment", 2),
("17", 5, 4, 4, "2-bedroom apartment", 2),
("18", 5, 4, 4, "2-bedroom apartment", 2),
("19", 5, 4, 4, "2-bedroom apartment", 2),
("20", 5, 4, 4, "2-bedroom apartment", 2),
("9", 5, 4, 4, "4-bedroom apartment", 3),
("10", 5, 4, 4, "4-bedroom apartment", 3),
("11", 5, 4, 4, "2-bedroom apartment", 3),
("12", 5, 4, 4, "2-bedroom apartment", 3),
("21", 5, 4, 4, "2-bedroom apartment", 3),
("22", 5, 4, 4, "2-bedroom apartment", 3),
("23", 5, 4, 4, "2-bedroom apartment", 3),
("24", 5, 4, 4, "2-bedroom apartment", 3),
("001", 6, 4, 4, "2-person suite", 1),
("003", 6, 4, 4, "2-bedroom suite", 1),
("101", 6, 2, 2, "2-person suite", 2),
("102", 6, 2, 2, "2-person suite", 2),
("103", 6, 4, 4, "4-person suite", 2),
("104", 6, 4, 4, "4-person suite", 2),
("105", 6, 4, 4, "4-person suite", 2),
("106", 6, 2, 2, "2-person suite", 2),
("107", 6, 4, 4, "4-person suite", 2),
("108", 6, 2, 2, "2-person suite", 2),
("109", 6, 4, 4, "4-person suite", 2),
("111", 6, 4, 4, "4-person suite", 2),
("112", 6, 2, 2, "2-person suite", 2),
("201", 6, 4, 4, "4-person suite", 3),
("202", 6, 2, 2, "2-person suite", 3),
("203", 6, 4, 4, "4-person suite", 3),
("204", 6, 4, 4, "4-person suite", 3),
("205", 6, 4, 4, "4-person suite", 3),
("206", 6, 4, 4, "4-person suite", 3),
("207", 6, 4, 4, "4-person suite", 3),
("208", 6, 4, 4, "4-person suite", 3),
("209", 6, 4, 4, "4-person suite", 3),
("211", 6, 4, 4, "4-person suite", 3),
("212", 6, 3, 3, "3-person suite", 3),
("301", 6, 2, 2, "2-person suite", 4),
("302", 6, 2, 2, "2-person suite", 4),
("303", 6, 4, 4, "4-person suite", 4),
("304", 6, 2, 2, "2-person suite", 4),
("305", 6, 4, 4, "4-person suite", 4),
("306", 6, 4, 4, "4-person suite", 4),
("307", 6, 4, 4, "4-person suite", 4),
("309", 6, 4, 4, "4-person suite", 4),
("310", 6, 4, 4, "4-person suite", 4),
("311", 6, 4, 4, "4-person suite", 4),
("312", 6, 2, 2, "2-person suite", 4),
("401", 6, 4, 4, "4-person suite", 5),
("402", 6, 6, 6, "6-person suite", 5),
("403", 6, 3, 3, "3-person suite", 5),
("404", 6, 4, 4, "4-person suite", 5),
("405", 6, 2, 2, "2-person suite", 5),
("406", 6, 2, 2, "2-person suite", 5),
("407", 6, 6, 6, "6-person suite", 5),
("410", 6, 2, 2, "2-person suite", 5),
("25", 7, 4, 4, "2-bedroom apartment", 1),
("26", 7, 4, 4, "2-bedroom apartment", 1),
("27", 7, 4, 4, "4-bedroom apartment", 1),
("28", 7, 4, 4, "4-bedroom apartment", 1),
("A-1", 8, 2, 2, "8-person suite", 1),
("A-2", 8, 2, 2, "8-person suite", 1),
("A-3", 8, 2, 2, "8-person suite", 1),
("A-4", 8, 2, 2, "8-person suite", 1),
("B-1", 8, 2, 2, "8-person suite", 1),
("B-2", 8, 2, 2, "8-person suite", 1),
("B-3", 8, 2, 2, "8-person suite", 1),
("B-4", 8, 2, 2, "8-person suite", 1),
("C-1", 8, 2, 2, "8-person suite", 1),
("C-2", 8, 2, 2, "8-person suite", 1),
("C-3", 8, 2, 2, "8-person suite", 1),
("D-1", 8, 2, 2, "8-person suite", 1),
("D-2", 8, 2, 2, "8-person suite", 1),
("D-3", 8, 2, 2, "8-person suite", 1),
("D-4", 8, 2, 2, "8-person suite", 1),
("E-1", 8, 2, 2, "8-person suite", 1),
("E-2", 8, 2, 2, "8-person suite", 1),
("E-3", 8, 2, 2, "8-person suite", 1),
("E-4", 8, 2, 2, "8-person suite", 1),
("F-1", 8, 2, 2, "8-person suite", 1),
("F-2", 8, 2, 2, "8-person suite", 1),
("F-3", 8, 2, 2, "8-person suite", 1),
("F-4", 8, 2, 2, "8-person suite", 1),
("G-1", 8, 2, 2, "8-person suite", 2),
("G-2", 8, 2, 2, "8-person suite", 2),
("G-3", 8, 2, 2, "8-person suite", 2),
("G-4", 8, 2, 2, "8-person suite", 2),
("H-1", 8, 2, 2, "8-person suite", 2),
("H-2", 8, 2, 2, "8-person suite", 2),
("H-3", 8, 2, 2, "8-person suite", 2),
("H-4", 8, 2, 2, "8-person suite", 2),
("I-1", 8, 2, 2, "8-person suite", 2),
("I-2", 8, 2, 2, "8-person suite", 2),
("I-3", 8, 2, 2, "8-person suite", 2),
("I-4", 8, 2, 2, "8-person suite", 2),
("J-1", 8, 2, 2, "8-person suite", 2),
("J-2", 8, 2, 2, "8-person suite", 2),
("J-3", 8, 2, 2, "8-person suite", 2),
("J-4", 8, 2, 2, "8-person suite", 2),
("K-1", 8, 2, 2, "8-person suite", 2),
("K-2", 8, 2, 2, "8-person suite", 2),
("K-3", 8, 2, 2, "8-person suite", 2),
("L-1", 8, 2, 2, "8-person suite", 2),
("L-2", 8, 2, 2, "8-person suite", 2),
("L-3", 8, 2, 2, "8-person suite", 2),
("L-4", 8, 2, 2, "8-person suite", 2),
("M-1", 8, 2, 2, "8-person suite", 2),
("M-2", 8, 2, 2, "8-person suite", 2),
("M-3", 8, 2, 2, "8-person suite", 2),
("N-1", 8, 2, 2, "8-person suite", 3),
("N-2", 8, 2, 2, "8-person suite", 3),
("N-3", 8, 2, 2, "8-person suite", 3),
("N-4", 8, 2, 2, "8-person suite", 3),
("O-1", 8, 2, 2, "8-person suite", 3),
("O-2", 8, 2, 2, "8-person suite", 3),
("O-3", 8, 2, 2, "8-person suite", 3),
("Q-4", 8, 2, 2, "8-person suite", 3),
("P-1", 8, 2, 2, "8-person suite", 3),
("P-2", 8, 2, 2, "8-person suite", 3),
("P-3", 8, 2, 2, "8-person suite", 3),
("Q-1", 8, 2, 2, "8-person suite", 3),
("Q-2", 8, 2, 2, "8-person suite", 3),
("Q-3", 8, 2, 2, "8-person suite", 3),
("Q-4", 8, 2, 2, "8-person suite", 3),
("R-1", 8, 2, 2, "8-person suite", 3),
("R-2", 8, 2, 2, "8-person suite", 3),
("R-3", 8, 2, 2, "8-person suite", 3),
("R-4", 8, 2, 2, "8-person suite", 3),
("S-1", 8, 2, 2, "8-person suite", 3),
("S-2", 8, 2, 2, "8-person suite", 3),
("S-3", 8, 2, 2, "8-person suite", 3),
("T-1", 8, 2, 2, "8-person suite", 3),
("T-2", 8, 2, 2, "8-person suite", 3),
("T-3", 8, 2, 2, "8-person suite", 3),
("202", 9, 2, 2, "4-person suite", 1),
("203", 9, 2, 2, "4-person suite", 1),
("204", 9, 2, 2, "4-person suite", 1),
("205", 9, 2, 2, "4-person suite", 1),
("206", 9, 2, 2, "4-person suite", 1),
("207", 9, 2, 2, "4-person suite", 1),
("208", 9, 2, 2, "4-person suite", 1),
("209", 9, 2, 2, "4-person suite", 1),
("210", 9, 2, 2, "4-person suite", 1),
("211", 9, 2, 2, "4-person suite", 1),
("212", 9, 2, 2, "4-person suite", 1),
("213", 9, 2, 2, "4-person suite", 1),
("214", 9, 2, 2, "4-person suite", 1),
("215", 9, 2, 2, "4-person suite", 1),
("216", 9, 2, 2, "4-person suite", 1),
("217", 9, 2, 2, "4-person suite", 1),
("219", 9, 2, 2, "4-person suite", 1),
("221", 9, 2, 2, "4-person suite", 1),
("223", 9, 2, 2, "4-person suite", 1),
("225", 9, 2, 2, "4-person suite", 1),
("302", 9, 2, 2, "4-person suite", 2),
("303", 9, 2, 2, "4-person suite", 2),
("304", 9, 2, 2, "4-person suite", 2),
("305", 9, 2, 2, "4-person suite", 2),
("306", 9, 2, 2, "4-person suite", 2),
("307", 9, 2, 2, "4-person suite", 2),
("308", 9, 2, 2, "4-person suite", 2),
("309", 9, 2, 2, "4-person suite", 2),
("310", 9, 2, 2, "4-person suite", 2),
("311", 9, 2, 2, "4-person suite", 2),
("312", 9, 2, 2, "4-person suite", 2),
("313", 9, 2, 2, "4-person suite", 2),
("314", 9, 2, 2, "4-person suite", 2),
("315", 9, 2, 2, "4-person suite", 2),
("316", 9, 2, 2, "4-person suite", 2),
("317", 9, 2, 2, "4-person suite", 2),
("319", 9, 2, 2, "4-person suite", 2),
("321", 9, 2, 2, "4-person suite", 2),
("323", 9, 2, 2, "4-person suite", 2),
("325", 9, 2, 2, "4-person suite", 2),
("401", 9, 2, 2, "4-person suite", 3),
("402", 9, 2, 2, "4-person suite", 3),
("403", 9, 2, 2, "4-person suite", 3),
("404", 9, 2, 2, "4-person suite", 3),
("405", 9, 6, 6, "3-bedroom apartment", 3),
("406", 9, 6, 6, "6-bedroom apartment", 3),
("407", 9, 6, 6, "6-bedroom apartment", 3),
("408", 9, 2, 2, "4-person suite", 3),
("409", 9, 2, 2, "4-person suite", 3),
("410", 9, 2, 2, "4-person suite", 3),
("411", 9, 2, 2, "4-person suite", 3),
("302", 10, 2, 2, "2-person suite", 1),
("303", 10, 2, 2, "2-person suite", 1),
("304", 10, 2, 2, "2-person suite", 1),
("305", 10, 2, 2, "2-person room", 1),
("306", 10, 2, 2, "2-person room", 1),
("307", 10, 2, 2, "2-person room", 1),
("308", 10, 2, 2, "2-person room", 1),
("309", 10, 2, 2, "2-person room", 1),
("310", 10, 2, 2, "2-person room", 1),
("311", 10, 2, 2, "2-person suite", 1),
("312", 10, 2, 2, "2-person suite", 1),
("316", 10, 2, 2, "2-person room", 1),
("317", 10, 2, 2, "2-person room", 1),
("318", 10, 2, 2, "2-person room", 1),
("319", 10, 2, 2, "2-person room", 1),
("320", 10, 2, 2, "2-person room", 1),
("321", 10, 2, 2, "2-person suite", 1);