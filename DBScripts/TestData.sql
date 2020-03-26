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
(3,  "TUR",  "St. Michael Hall",    'M',  NULL),
(4,  "NEW",  "Wolf Hall",           'M',  NULL),
(5,  "KRE",  "Kremmeter Hall",      'F',  NULL),
(6,  "LIZ",  "Elizabeth Hall",      'F',  NULL),
(7,  "LEG",  "Legacy Hall",         'F',  NULL),
(8,  "MCD",  "McDonald Hall",       'F',  NULL),
(9,  "GUAD", "Guadalupe Hall",      'F',  NULL),
(10, "CRAY", "Cray Seaberg Hall"    'F',  NULL);

REPLACE INTO Rooms (room_number, dorm_id, capacity, available_spots, description, floor) VALUES
("49", 0, 4, 4, "4-Bedroom Apartment", 1), 
("50", 0, 4, 4, "4-Bedroom Apartment", 1), 
("51", 0, 4, 4, "2-Bedroom Apartment", 1),
("52", 0, 4, 4, "2-Bedroom Apartment", 1),
("53", 0, 4, 4, "4-Bedroom Apartment", 2),
("55", 0, 4, 4, "2-Bedroom Apartment", 2),
("56", 0, 4, 4, "2-Bedroom Apartment", 2),
("61", 0, 4, 4, "2-Bedroom Apartment", 2),
("62", 0, 4, 4, "2-Bedroom Apartment", 2),
("63", 0, 4, 4, "4-Bedroom Apartment", 2),
("64", 0, 4, 4, "4-Bedroom Apartment", 2),
("57", 0, 4, 4, "4-Bedroom Apartment", 3),
("58", 0, 4, 4, "4-Bedroom Apartment", 3),
("59", 0, 4, 4, "2-Bedroom Apartment", 3),
("60", 0, 4, 4, "2-Bedroom Apartment", 3),
("65", 0, 4, 4, "2-Bedroom Apartment", 3),
("66", 0, 4, 4, "2-Bedroom Apartment", 3),
("67", 0, 4, 4, "2-Bedroom Apartment", 3),
("69", 0, 4, 4, "2-Bedroom Apartment", 4),
("70", 0, 4, 4, "2-Bedroom Apartment", 4),
("71", 0, 4, 4, "4-Bedroom Apartment", 4),
("72", 0, 4, 4, "4-Bedroom Apartment", 4),
-- {id: 1, name: "Newman Hall", floors: 5, code: "NEW", floorRooms: [["001", "002", "003", "004"], ["101", "102", "103", "104", "105", "106", "107", "108", "109"], ["202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212", "213", "214", "215", "216", "217", "218", "219", "220"], ["302", "303", "304", "305", "306", "307", "308", "309", "310", "311", "312", "313", "314", "315", "316", "317", "318", "319", "320"], ["402", "403", "404", "405", "406", "407", "408", "409", "411", "412", "413", "414", "415", "416", "417", "418", "419", "420"]]},
-- {id: 2, name: "St. Joseph Hall", floors: 3, code: "JOE", floorRooms: [["101", "102", "103", "104", "105", "107", "108", "109", "111"], ["201", "202", "203", "204", "205", "206", "207", "208", "209", "211"], ["301", "302", "303", "304", "305", "306", "307", "308", "309", "310", "311", "312"]]},
("001", 3, 2, 2, "Four-man suite", 1),
("003", 3, 2, 2, "Four-man suite", 1),
("004", 3, 2, 2, "Four-man suite", 1),
("005", 3, 2, 2, "Four-man suite", 1),
("006", 3, 2, 2, "Four-man suite", 1),
("007", 3, 2, 2, "Four-man suite", 1),
("008", 3, 2, 2, "Four-man suite", 1),
("009", 3, 2, 2, "Four-man suite", 1),
("010", 3, 2, 2, "Four-man suite", 1),
("011", 3, 2, 2, "Four-man suite", 1),
("101", 3, 2, 2, "Four-man suite", 2),
("103", 3, 2, 2, "Four-man suite", 2),
("104", 3, 2, 2, "Four-man suite", 2),
("105", 3, 2, 2, "Four-man suite", 2),
("106", 3, 2, 2, "Four-man suite", 2),
("107", 3, 2, 2, "Four-man suite", 2),
("108", 3, 2, 2, "Four-man suite", 2),
("109", 3, 2, 2, "Four-man suite", 2),
("110", 3, 2, 2, "Four-man suite", 2),
("111", 3, 2, 2, "Four-man suite", 2),
("113", 3, 2, 2, "Four-man suite", 2),
("115", 3, 2, 2, "Four-man suite", 2),
("117", 3, 2, 2, "Four-man suite", 2),
("119", 3, 2, 2, "Four-man suite", 2),
("201", 3, 2, 2, "Four-man suite", 3),
("203", 3, 2, 2, "Four-man suite", 3),
("204", 3, 2, 2, "Four-man suite", 3),
("205", 3, 2, 2, "Four-man suite", 3),
("206", 3, 2, 2, "Four-man suite", 3),
("207", 3, 2, 2, "Four-man suite", 3),
("208", 3, 2, 2, "Four-man suite", 3),
("209", 3, 2, 2, "Four-man suite", 3),
("210", 3, 2, 2, "Four-man suite", 3),
("211", 3, 2, 2, "Four-man suite", 3),
("213", 3, 2, 2, "Two-man room", 3),
("214", 3, 2, 2, "Four-man suite", 3),
("215", 3, 2, 2, "Four-man suite", 3),
("216", 3, 2, 2, "Four-man suite", 3),
("217", 3, 2, 2, "Four-man suite", 3),
("218", 3, 2, 2, "Four-man suite", 3),
("219", 3, 2, 2, "Four-man suite", 3),
("220", 3, 2, 2, "Four-man suite", 3),
("221", 3, 2, 2, "Four-man suite", 3),
("222", 3, 2, 2, "Two-man room", 3),
("223", 3, 2, 2, "Four-man suite", 3),
("225", 3, 2, 2, "Four-man suite", 3),
("227", 3, 2, 2, "Four-man suite", 3),
("229", 3, 2, 2, "Four-man suite", 3),
("301", 3, 2, 2, "Four-man suite", 4),
("303", 3, 2, 2, "Four-man suite", 4),
("304", 3, 2, 2, "Four-man suite", 4),
("305", 3, 2, 2, "Four-man suite", 4),
("306", 3, 2, 2, "Four-man suite", 4),
("307", 3, 2, 2, "Four-man suite", 4),
("308", 3, 2, 2, "Four-man suite", 4),
("309", 3, 2, 2, "Four-man suite", 4),
("310", 3, 2, 2, "Four-man suite", 4),
("311", 3, 2, 2, "Four-man suite", 4),
("313", 3, 2, 2, "Two-man room", 4),
("314", 3, 2, 2, "Four-man suite", 4),
("315", 3, 2, 2, "Four-man suite", 4),
("316", 3, 2, 2, "Four-man suite", 4),
("317", 3, 2, 2, "Four-man suite", 4),
("318", 3, 2, 2, "Four-man suite", 4),
("319", 3, 2, 2, "Four-man suite", 4),
("320", 3, 2, 2, "Four-man suite", 4),
("321", 3, 2, 2, "Four-man suite", 4),
("322", 3, 2, 2, "Two-man room", 4),
("323", 3, 2, 2, "Four-man suite", 4),
("325", 3, 2, 2, "Four-man suite", 4),
("327", 3, 2, 2, "Four-man suite", 4),
("329", 3, 2, 2, "Four-man suite", 4);
-- {id: 4, name: "Wolf Hall", floors: 3, code: "WOLF", floorRooms: [["29", "30", "39", "40"], ["32", "33", "34", "41", "42", "43"], ["35", "36", "37", "38", "45", "46", "47", "48"]]},
-- {id: 5, name: "Kremmeter Hall", floors: 3, code: "KRE", floorRooms: [["1", "2", "3", "4", "13", "14", "15", "16"], ["5", "6", "7", "8", "17", "18", "19", "20"], ["9", "10", "11", "12", "21", "22", "23", "24"]]},
-- {id: 6, name: "Elizabeth Hall", floors: 5, code: "LIZ", floorRooms: [["001", "003"], ["101", "102", "103", "104", "105", "106", "107", "108", "109", "111", "112"], ["201", "202", "203", "204", "205", "206", "207", "208", "209", "211", "212"], ["301", "302", "303", "304", "305", "306", "307", "309", "310", "311", "312"], ["401", "402", "403", "404", "405", "406", "407", "408", "409", "410"]]},
-- {id: 7, name: "Legacy Hall", floors: 1, code: "LEG", floorRooms: [["25", "26", "27", "28"]]},
-- {id: 8, name: "McDonald Hall", floors: 3, code: "MCD", floorRooms: [["A-1", "A-2", "A-3", "A-4", "B-1", "B-2", "B-3", "B-4", "C-1", "C-2", "C-3", "D-1", "D-2", "D-3", "D-4", "E-1", "E-2", "E-3", "E-4", "F-1", "F-2", "F-3", "F-4"], ["G-1", "G-2", "G-3", "G-4", "H-1", "H-2", "H-3", "H-4", "I-1", "I-2", "I-3", "I-4", "J-1", "J-2", "J-3", "J-4", "K-1", "K-2", "K-3", "L-1", "L-2", "L-3", "L-4", "M-1", "M-2", "M-3"], ["N-1", "N-2", "N-3", "N-4", "O-1", "O-2", "O-3", "Q-4", "P-1", "P-2", "P-3", "Q-1", "Q-2", "Q-3", "Q-4", "R-1", "R-2", "R-3", "R-4", "S-1", "S-2", "S-3", "T-1", "T-2", "T-3"]]},
-- {id: 9, name: "Guadalupe Hall", floors: 3, code: "GUAD", floorRooms: [["202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212", "213", "214", "215", "216", "217", "219", "221", "223", "225"], ["302", "303", "304", "305", "306", "307", "308", "309", "310", "311", "312", "313", "314", "315", "316", "317", "319", "321", "323", "325"], ["401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "411"]]},
-- {id: 10, name: "Cray Seaberg Hall", floors: 1, code: "CRAY", floorRooms: [["302", "303", "304", "305", "306", "307", "308", "309", "310", "311", "312", "316", "317", "318", "319", "320", "321"]]}