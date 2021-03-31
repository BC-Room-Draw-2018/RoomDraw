USE RoomDrawTesting

REPLACE INTO Dorms(dorm_id,   dorm_code,   dorm_name,   sex,   photo,   floors) VALUES
(0,    'LEM',   'Lemke Hall',          'M',   NULL,   4),  
(1,    'NEW',   'Newman Hall',         'M',   NULL,   5),  
(2,    'JOE',   'St. Joseph Hall',     'M',   NULL,   3),  
(3,    'STM',   'St. Michael Hall',    'M',   NULL,   4),  
(4,    'WOL',   'Wolf Hall',           'M',   NULL,   3),  
(5,    'KRE',   'Kremmeter Hall',      'F',   NULL,   3),  
(6,    'LIZ',   'Elizabeth Hall',      'F',   NULL,   5),  
(7,    'LEG',   'Legacy Hall',         'F',   NULL,   1),  
(8,    'MCD',   'McDonald Hall',       'F',   NULL,   3),  
(9,    'GUA',   'Guadalupe Hall',      'F',   NULL,   3),  
(10,   'CRA',   'Cray Seaberg Hall',   'F',   NULL,   1),  
(11,   'HRT',   'Hartman Row House',   'M',   NULL,   1),  
(12,   'SCH',   'Schirmer Row House',  'F',   NULL,   1),  
(13,   'OFM',   'Off Campus Houses',   'M',   NULL,   1),  
(14,   'OFF',   'Off Campus Houses',   'F',   NULL,   1);

REPLACE INTO Rooms(room_number,   dorm_id,   capacity,   available_spots,   description,   floor) VALUES
('50', 0, 4, 4, '4-bedroom apartment', 1), 
('51', 0, 4, 4, '2-bedroom apartment', 1), 
('52', 0, 4, 4, '2-bedroom apartment', 1),
('53', 0, 4, 4, '4-bedroom apartment', 1),
('54', 0, 4, 4, '4-bedroom apartment', 2), 
('55', 0, 4, 4, '2-bedroom apartment', 2), 
('56', 0, 4, 4, '2-bedroom apartment', 2), 
('57', 0, 4, 4, '4-bedroom apartment', 3), 
('58', 0, 4, 4, '4-bedroom apartment', 3), 
('59', 0, 4, 4, '2-bedroom apartment', 3), 
('60', 0, 4, 4, '2-bedroom apartment', 3), 
('61', 0, 4, 4, '2-bedroom apartment', 2), 
('62', 0, 4, 4, '2-bedroom apartment', 2), 
('63', 0, 4, 4, '4-bedroom apartment', 2),  
('65', 0, 4, 4, '2-bedroom apartment', 3), 
('66', 0, 4, 4, '2-bedroom apartment', 3), 
('67', 0, 4, 4, '4-bedroom apartment', 3),
('68', 0, 4, 4, '4-bedroom apartment', 2),
('69', 0, 4, 4, '2-bedroom apartment', 4), 
('70', 0, 4, 4, '2-bedroom apartment', 4), 
('71', 0, 4, 4, '4-bedroom apartment', 4), 
('72', 0, 4, 4, '4-bedroom apartment', 4), 
('001', 1, 2, 2, '2-person room', 1), 
('004', 1, 2, 2, '2-person room', 1), 
('101', 1, 2, 2, '2-person suite', 2),
('102', 1, 1, 1, '1-person room', 2),  
('103/104', 1, 4, 4, '4-person suite', 2), 
('105/106', 1, 4, 4, '4-person suite', 2), 
('107/108', 1, 4, 4, '4-person suite', 2), 
('109/110', 1, 2, 2, '3-person suite (w/RA)', 2), 
('203/204', 1, 4, 4, '4-person suite', 3), 
('205/206', 1, 4, 4, '4-person suite', 3), 
('207/208', 1, 4, 4, '4-person suite', 3), 
('209/210', 1, 4, 4, '4-person suite', 3), 
('211/212', 1, 4, 4, '4-person suite', 3), 
('213/214', 1, 4, 4, '4-person suite', 3), 
('215/216', 1, 4, 4, '4-person suite', 3), 
('217/218', 1, 4, 4, '4-person suite', 3), 
('219/220', 1, 4, 4, '4-person suite', 3), 
('303/304', 1, 4, 4, '4-person suite', 4), 
('305/306', 1, 4, 4, '4-person suite', 4), 
('307/308', 1, 4, 4, '4-person suite', 4), 
('309/310', 1, 4, 4, '4-person suite', 4), 
('311/312', 1, 4, 4, '4-person suite', 4), 
('313/314', 1, 4, 4, '4-person suite', 4), 
('315/316', 1, 4, 4, '4-person suite', 4), 
('317/318', 1, 4, 4, '4-person suite', 4), 
('319/320', 1, 4, 4, '4-person suite', 4), 
('403/404', 1, 4, 4, '4-person suite', 5), 
('405/406', 1, 4, 4, '4-person suite', 5), 
('407/408', 1, 4, 4, '4-person suite', 5), 
('411/412', 1, 4, 4, '4-person suite', 5), 
('413/414', 1, 4, 4, '4-person suite', 5), 
('415/416', 1, 4, 4, '4-person suite', 5), 
('417/418', 1, 4, 4, '4-person suite', 5), 
('419/420', 1, 4, 4, '4-person suite', 5), 
('101', 2, 1, 1, '1-person room', 1), 
('102', 2, 1, 1, '1-person room', 1), 
('103', 2, 1, 1, '1-person room', 1), 
('104', 2, 6, 6, '6-person suite', 1), 
('105', 2, 1, 1, '1-person room', 1), 
('107', 2, 1, 1, '1-person room', 1), 
('108', 2, 6, 6, '6-person suite', 1), 
('109', 2, 1, 1, '1-person room', 1), 
('111', 2, 1, 1, '1-person room', 1), 
('201', 2, 1, 1, '1-person room', 2), 
('202', 2, 1, 1, '1-person room', 2), 
('203', 2, 1, 1, '1-person room', 2), 
('204', 2, 1, 1, '1-person room', 2), 
('205', 2, 1, 1, '1-person room', 2), 
('206', 2, 1, 1, '1-person room', 2), 
('207', 2, 1, 1, '1-person room', 2), 
('208', 2, 1, 1, '1-person room', 2), 
('209', 2, 1, 1, '1-person room', 2), 
('211', 2, 2, 2, '2-person suite', 2), 
('301', 2, 1, 1, '1-person room', 3), 
('302', 2, 1, 1, '1-person room', 3), 
('303', 2, 1, 1, '1-person room', 3), 
('304', 2, 1, 1, '1-person room', 3), 
('305', 2, 1, 1, '1-person room', 3), 
('306', 2, 1, 1, '1-person room', 3), 
('307', 2, 1, 1, '1-person room', 3), 
('308', 2, 1, 1, '1-person room', 3), 
('309', 2, 1, 1, '1-person room', 3), 
('310', 2, 1, 1, '1-person room', 3), 
('312', 2, 1, 1, '1-person room', 2), 
('001/003', 3, 4, 4, '4-person suite', 1), 
('004/006', 3, 4, 4, '4-person suite', 1), 
('005/007', 3, 4, 4, '4-person suite', 1), 
('008/010', 3, 4, 4, '4-person suite', 1), 
('009/011', 3, 4, 4, '4-person suite', 1), 
('101/103', 3, 4, 4, '4-person suite', 2), 
('104/106', 3, 4, 4, '4-person suite', 2), 
('105/107', 3, 4, 4, '4-person suite', 2), 
('108/110', 3, 4, 4, '4-person suite', 2), 
('109/111', 3, 4, 4, '4-person suite', 2), 
('113/115', 3, 4, 4, '4-person suite', 2), 
('117/119', 3, 4, 4, '4-person suite', 2), 
('201/203', 3, 4, 4, '4-person suite', 3), 
('204/206', 3, 4, 4, '4-person suite', 3), 
('205/207', 3, 4, 4, '4-person suite', 3), 
('208/210', 3, 4, 4, '4-person suite', 3), 
('209/211', 3, 4, 4, '4-person suite', 3),
('213', 3, 1, 1, '1-person room w/bathroom', 3),
('214/216', 3, 4, 4, '4-person suite', 3), 
('215/217', 3, 4, 4, '4-person suite', 3), 
('218/220', 3, 4, 4, '4-person suite', 3), 
('219/221', 3, 4, 4, '4-person suite', 3), 
('222', 3, 2, 2, '2-person room', 3), 
('223/225', 3, 4, 4, '4-person suite', 3), 
('227/229', 3, 4, 4, '4-person suite', 3), 
('301/303', 3, 4, 4, '4-person suite', 4), 
('304/306', 3, 4, 4, '4-person suite', 4), 
('305/307', 3, 4, 4, '4-person suite', 4), 
('308/310', 3, 4, 4, '4-person suite', 4), 
('309/311', 3, 4, 4, '4-person suite', 4),
('313', 3, 1, 1, '1-person room w/bathroom', 4),
('314/316', 3, 4, 4, '4-person suite', 4), 
('315/317', 3, 4, 4, '4-person suite', 4), 
('318/320', 3, 4, 4, '4-person suite', 4), 
('319/321', 3, 4, 4, '4-person suite', 4), 
('322', 3, 2, 2, '2-person room', 4), 
('323/325', 3, 4, 4, '4-person suite', 4), 
('327/329', 3, 4, 4, '4-person suite', 4), 
('29', 4, 4, 4, '4-bedroom apartment', 1), 
('30', 4, 4, 4, '2-bedroom apartment', 1), 
('33', 4, 4, 4, '2-bedroom apartment', 2), 
('34', 4, 4, 4, '2-bedroom apartment', 2), 
('35', 4, 4, 4, '4-bedroom apartment', 3), 
('36', 4, 4, 4, '4-bedroom apartment', 3), 
('37', 4, 4, 4, '2-bedroom apartment', 3), 
('38', 4, 4, 4, '2-bedroom apartment', 3), 
('39', 4, 4, 4, '2-bedroom apartment', 1), 
('40', 4, 4, 4, '4-bedroom apartment', 1), 
('41', 4, 4, 4, '2-bedroom apartment', 2), 
('42', 4, 4, 4, '2-bedroom apartment', 2), 
('43', 4, 4, 4, '4-bedroom apartment', 2), 
('45', 4, 4, 4, '2-bedroom apartment', 3), 
('46', 4, 4, 4, '2-bedroom apartment', 3), 
('47', 4, 4, 4, '4-bedroom apartment', 3), 
('48', 4, 4, 4, '4-bedroom apartment', 3), 
('1', 5, 4, 4, '4-bedroom apartment', 1), 
('10', 5, 4, 4, '4-bedroom apartment', 3), 
('11', 5, 4, 4, '2-bedroom apartment', 3), 
('12', 5, 4, 4, '2-bedroom apartment', 3), 
('13', 5, 4, 4, '2-bedroom apartment', 1), 
('14', 5, 4, 4, '2-bedroom apartment', 1), 
('15', 5, 4, 4, '2-bedroom apartment', 1), 
('16', 5, 4, 4, '2-bedroom apartment', 1), 
('17', 5, 4, 4, '2-bedroom apartment', 2), 
('18', 5, 4, 4, '2-bedroom apartment', 2), 
('19', 5, 4, 4, '2-bedroom apartment', 2), 
('2', 5, 4, 4, '4-bedroom apartment', 1), 
('21', 5, 4, 4, '2-bedroom apartment', 3), 
('22', 5, 4, 4, '2-bedroom apartment', 3), 
('23', 5, 4, 4, '2-bedroom apartment', 3), 
('24', 5, 4, 4, '2-bedroom apartment', 3), 
('3', 5, 4, 4, '2-bedroom apartment', 1), 
('4', 5, 4, 4, '2-bedroom apartment', 1), 
('6', 5, 4, 4, '4-bedroom apartment', 2), 
('7', 5, 4, 4, '2-bedroom apartment', 2), 
('8', 5, 4, 4, '2-bedroom apartment', 2), 
('9', 5, 4, 4, '4-bedroom apartment', 3), 
('001', 6, 3, 3, '3-person apartment, no lounge', 1), 
('003', 6, 4, 4, '4-person apartment, small, no lounge, has stove', 1), 
('101', 6, 2, 2, '2-person suite, large, w/lounge', 2), 
('103', 6, 4, 4, '4-person apartment, small, no lounge', 2), 
('104', 6, 4, 4, '4-person apartment, large, no lounge', 2), 
('105', 6, 4, 4, '4-person apartment, small, no lounge', 2), 
('106', 6, 2, 2, '2-person suite, small, w/lounge', 2), 
('107', 6, 4, 4, '4-person apartment, large, no lounge', 2), 
('108', 6, 2, 2, '2-person suite, small, w/lounge', 2), 
('109', 6, 4, 4, '4-person apartment, large, no lounge', 2), 
('111', 6, 4, 4, '4-person suite,  w/large lounge', 2), 
('112', 6, 2, 2, '2-person suite, small, w/lounge', 2), 
('201', 6, 2, 2, '2-person suite, large, w/lounge', 3), 
('202', 6, 2, 2, '2-person apartment, no lounge', 3), 
('203', 6, 4, 4, '4-person apartment, small, no lounge', 3), 
('205', 6, 4, 4, '4-person apartment, small, no lounge', 3), 
('206', 6, 4, 4, '4-person suite, w/large lounge', 3), 
('207', 6, 4, 4, '4-person suite, w/large lounge', 3), 
('208', 6, 4, 4, '4-person suite, small, no lounge', 3), 
('209', 6, 4, 4, '4-person suite, w/large lounge', 3), 
('211', 6, 4, 4, '4-person suite, w/large lounge', 3), 
('212', 6, 3, 3, '3-person apartment, no lounge', 3), 
('301', 6, 2, 2, '2-person suite, large, w/lounge and stove', 4), 
('302', 6, 2, 2, '2-person apartment, no lounge', 4), 
('303', 6, 4, 4, '4-person apartment, small, no lounge', 4), 
('304', 6, 2, 2, '2-person suite, large, w/lounge', 4), 
('305', 6, 4, 4, '4-person apartment, small, no lounge', 4), 
('306', 6, 4, 4, '4-person suite, w/large lounge', 4), 
('307', 6, 4, 4, '4-person suite, w/large lounge', 4), 
('309', 6, 4, 4, '4-person suite, w/large lounge', 4), 
('310', 6, 4, 4, '4-person apartment, small, no lounge', 4), 
('311', 6, 4, 4, '4-person suite, w/large lounge', 4), 
('312', 6, 2, 2, '2-person suite, small, w/lounge', 4), 
('401', 6, 2, 2, '2-person apartment, no lounge', 5), 
('402', 6, 6, 6, '6-person loft, 3 bed, 3 bath, lounge, full kitchen', 5),
('403', 6, 3, 3, '3-person apartment, no lounge', 5), 
('404', 6, 4, 4, '4-person suite, w/large lounge', 5), 
('405', 6, 2, 2, '2-person suite, small, w/lounge', 5), 
('406', 6, 2, 2, '2-person apartment, no lounge', 5),
('408', 6, 2, 2, '2-person suite, large, w/lounge', 5),
('410', 6, 2, 2, '2-person apartment, no lounge', 5),
('26', 7, 4, 4, '2-bedroom apartment', 1), 
('27', 7, 4, 4, '4-bedroom apartment', 1),
('28', 7, 4, 4, '4-bedroom apartment', 1), 
('Suite A', 8, 8, 8, '8-person suite', 1), 
('Suite B', 8, 8, 8, '8-person suite', 1), 
('Suite D', 8, 8, 8, '8-person suite', 1), 
('Suite E', 8, 8, 8, '8-person suite', 1), 
('Suite G', 8, 8, 8, '8-person suite', 2), 
('Suite H', 8, 8, 8, '8-person suite', 2), 
('Suite I', 8, 8, 8, '8-person suite', 2), 
('Suite J', 8, 8, 8, '8-person suite', 2), 
('Suite L', 8, 8, 8, '8-person suite', 2), 
('Suite M', 8, 8, 8, '8-person suite', 2), 
('Suite N', 8, 8, 8, '8-person suite', 3), 
('Suite O', 8, 8, 8, '8-person suite', 3), 
('Suite Q', 8, 8, 2, '8-person suite', 3), 
('Suite R', 8, 8, 8, '8-person suite', 3), 
('Suite T', 8, 8, 8, '8-person suite', 3), 
('203/205', 9, 4, 4, '4-person suite', 1),
('204', 9, 2, 2, '3-person suite (w/RA)', 1),
('206/208', 9, 4, 4, '4-person suite', 1), 
('207/209', 9, 4, 4, '4-person suite', 1), 
('210/212', 9, 4, 4, '4-person suite', 1), 
('211/213', 9, 4, 4, '4-person suite', 1), 
('214/216', 9, 4, 4, '4-person suite', 1), 
('215', 9, 2, 2, '3-person suite (w/RA)', 1), 
('219/221', 9, 4, 4, '4-person suite', 1), 
('223/225', 9, 4, 4, '4-person suite', 1), 
('304', 9, 2, 2, '2-person suite (w/RA)', 2), 
('303/305', 9, 4, 4, '4-person suite', 2), 
('306/308', 9, 4, 4, '4-person suite', 2), 
('307/309', 9, 4, 4, '4-person suite', 2), 
('310/312', 9, 4, 4, '4-person suite', 2), 
('311/313', 9, 4, 4, '4-person suite', 2), 
('314/316', 9, 4, 4, '4-person suite', 2),
('315', 9, 2, 2, '2-person suite (w/RA)', 2),
('319/321', 9, 4, 4, '4-person suite', 2), 
('323/325', 9, 4, 4, '4-person suite', 2), 
('401/403', 9, 4, 4, '4-person suite', 3), 
('402/404', 9, 4, 4, '4-person suite', 3), 
('405', 9, 6, 6, '3 bedroom, 6-person suite, w/stove and fridge', 3), 
('406', 9, 6, 6, '3 bedroom, 6-person suite, w/stove and fridge', 3), 
('407', 9, 6, 6, '3 bedroom, 6-person suite, w/stove and fridge', 3), 
('408', 9, 2, 2, '2-person suite (w/RA)', 3), 
('409/411', 9, 4, 4, '4-person suite', 3), 
('302/303', 10, 2, 2, '4-person suite, w/bathroom', 1), 
('304', 10, 2, 2, '2-person room, w/bathroom', 1), 
('305', 10, 2, 2, '2-person room', 1), 
('306', 10, 2, 2, '2-person room', 1), 
('307', 10, 2, 2, '2-person room', 1), 
('308', 10, 2, 2, '2-person room', 1), 
('309', 10, 2, 2, '2-person room', 1), 
('310', 10, 2, 2, '2-person room', 1), 
('311', 10, 2, 2, '2-person suite, w/bathroom', 1), 
('312', 10, 2, 2, '2-person suite, w/bathroom', 1), 
('314/315', 10, 4, 4, '4-person suite, w/bathroom', 1), 
('316', 10, 2, 2, '2-person room', 1), 
('317', 10, 2, 2, '2-person room', 1), 
('318', 10, 2, 2, '2-person room', 1), 
('319', 10, 2, 2, '2-person room', 1), 
('320', 10, 2, 2, '2-person room', 1), 
('321', 10, 2, 2, '2-person suite, w/bathroom', 1),
('1105A', 11, 5, 5, '4 or 5-person house', 1), 
('1105B', 11, 5, 5, '4 or 5-person house', 1), 
('1105C', 11, 5, 5, '4 or 5-person house', 1), 
('1101A', 12, 5, 5, '4 or 5-person house', 1), 
('1101B', 12, 5, 5, '4 or 5-person house', 1), 
('1', 13, 5, 4, '4-person house', 1), 
('10', 13, 5, 4, '4-person house', 1), 
('11', 13, 5, 4, '4-person house', 1), 
('12', 13, 5, 4, '4-person house', 1), 
('13', 13, 5, 4, '4-person house', 1), 
('14', 13, 5, 4, '4-person house', 1), 
('15', 13, 5, 4, '4-person house', 1), 
('16', 13, 5, 4, '4-person house', 1), 
('17', 13, 5, 4, '4-person house', 1), 
('18', 13, 5, 4, '4-person house', 1), 
('19', 13, 5, 4, '4-person house', 1), 
('2', 13, 5, 4, '4-person house', 1), 
('20', 13, 5, 4, '4-person house', 1), 
('3', 13, 5, 4, '4-person house', 1), 
('4', 13, 5, 4, '4-person house', 1), 
('5', 13, 5, 4, '4-person house', 1), 
('6', 13, 5, 4, '4-person house', 1), 
('7', 13, 5, 4, '4-person house', 1), 
('8', 13, 5, 4, '4-person house', 1), 
('9', 13, 5, 4, '4-person house', 1), 
('1', 14, 5, 4, '4-person house', 1), 
('10', 14, 5, 4, '4-person house', 1), 
('11', 14, 5, 4, '4-person house', 1), 
('12', 14, 5, 4, '4-person house', 1), 
('13', 14, 5, 4, '4-person house', 1), 
('14', 14, 5, 4, '4-person house', 1), 
('15', 14, 5, 4, '4-person house', 1), 
('16', 14, 5, 4, '4-person house', 1), 
('2', 14, 5, 4, '4-person house', 1), 
('3', 14, 5, 4, '4-person house', 1), 
('4', 14, 5, 4, '4-person house', 1), 
('5', 14, 5, 4, '4-person house', 1), 
('6', 14, 5, 4, '4-person house', 1), 
('7', 14, 5, 4, '4-person house', 1), 
('8', 14, 5, 4, '4-person house', 1), 
('9', 14, 5, 4, '4-person house', 1);
