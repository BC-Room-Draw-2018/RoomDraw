import { Room } from '../Room';
import { RoomService } from '../room.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-housing',
	templateUrl: './housing.component.html',
	styleUrls: ['./housing.component.scss']
})
export class HousingComponent implements OnInit {
	rooms: Room[] = []
	counter = 0

	halls = [
		{id: 0, name: "Lemke Hall", floors: 4, code: "LEM", floorRooms: [["49", "50", "51", "52"], ["53", "55", "56", "61", "62", "63", "64"], ["57", "58", "59", "60", "65", "66", "67"], ["69", "70", "71", "72"]]},
		{id: 1, name: "Newman Hall", floors: 5, code: "NEW", floorRooms: [["001", "002", "003", "004"], ["101", "102", "103", "104", "105", "106", "107", "108", "109"], ["202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212", "213", "214", "215", "216", "217", "218", "219", "220"], ["302", "303", "304", "305", "306", "307", "308", "309", "310", "311", "312", "313", "314", "315", "316", "317", "318", "319", "320"], ["402", "403", "404", "405", "406", "407", "408", "409", "411", "412", "413", "414", "415", "416", "417", "418", "419", "420"]]},
		{id: 2, name: "St. Joseph Hall", floors: 3, code: "JOE", floorRooms: [["101", "102", "103", "104", "105", "107", "108", "109", "111"], ["201", "202", "203", "204", "205", "206", "207", "208", "209", "211"], ["301", "302", "303", "304", "305", "306", "307", "308", "309", "310", "311", "312"]]},
		{id: 3, name: "St. Michael Hall", floors: 4, code: "STM", floorRooms: [["001", "003", "004", "005", "006", "007", "008", "009", "010", "011"], ["101", "103", "104", "105", "106", "107", "108", "109", "110", "111", "113", "115", "117", "119"], ["201", "203", "204", "205", "206", "207", "208", "209", "210", "211", "213", "214", "215", "216", "217", "218", "219", "220", "221", "222", "223", "225", "227", "229"], ["301", "303", "304", "305", "306", "307", "308", "309", "310", "311", "313", "314", "315", "316", "317", "318", "319", "320", "321", "322", "323", "325", "327", "329"]]},
		{id: 4, name: "Wolf Hall", floors: 3, code: "WOLF", floorRooms: [["29", "30", "39", "40"], ["32", "33", "34", "41", "42", "43"], ["35", "36", "37", "38", "45", "46", "47", "48"]]},
		{id: 5, name: "Kremmeter Hall", floors: 3, code: "KRE", floorRooms: [["1", "2", "3", "4", "13", "14", "15", "16"], ["5", "6", "7", "8", "17", "18", "19", "20"], ["9", "10", "11", "12", "21", "22", "23", "24"]]},
		{id: 6, name: "Elizabeth Hall", floors: 5, code: "LIZ", floorRooms: [["001", "003"], ["101", "102", "103", "104", "105", "106", "107", "108", "109", "111", "112"], ["201", "202", "203", "204", "205", "206", "207", "208", "209", "211", "212"], ["301", "302", "303", "304", "305", "306", "307", "309", "310", "311", "312"], ["401", "402", "403", "404", "405", "406", "407", "408", "409", "410"]]},
		{id: 7, name: "Legacy Hall", floors: 1, code: "LEG", floorRooms: [["25", "26", "27", "28"]]},
		{id: 8, name: "McDonald Hall", floors: 3, code: "MCD", floorRooms: [["A-1", "A-2", "A-3", "A-4", "B-1", "B-2", "B-3", "B-4", "C-1", "C-2", "C-3", "D-1", "D-2", "D-3", "D-4", "E-1", "E-2", "E-3", "E-4", "F-1", "F-2", "F-3", "F-4"], ["G-1", "G-2", "G-3", "G-4", "H-1", "H-2", "H-3", "H-4", "I-1", "I-2", "I-3", "I-4", "J-1", "J-2", "J-3", "J-4", "K-1", "K-2", "K-3", "L-1", "L-2", "L-3", "L-4", "M-1", "M-2", "M-3"], ["N-1", "N-2", "N-3", "N-4", "O-1", "O-2", "O-3", "Q-4", "P-1", "P-2", "P-3", "Q-1", "Q-2", "Q-3", "Q-4", "R-1", "R-2", "R-3", "R-4", "S-1", "S-2", "S-3", "T-1", "T-2", "T-3"]]},
		{id: 9, name: "Guadalupe Hall", floors: 3, code: "GUAD", floorRooms: [["202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212", "213", "214", "215", "216", "217", "219", "221", "223", "225"], ["302", "303", "304", "305", "306", "307", "308", "309", "310", "311", "312", "313", "314", "315", "316", "317", "319", "321", "323", "325"], ["401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "411"]]},
		{id: 10, name: "Cray Seaberg Hall", floors: 1, code: "CRAY", floorRooms: [["302", "303", "304", "305", "306", "307", "308", "309", "310", "311", "312", "316", "317", "318", "319", "320", "321"]]}
	];

	/* Keep track of properties of the floor the user is currently using */
	current_id = null;
	current_floors = null;
	current_code = null;
	floor_viewing = null; /* What floor is the user looking at? */


	/* floorPlan is the image location and number_floors is a blank array to loop the appropriate amount
	of times with in the html to display the number of tabs for each floor in the dorm */
	floor_plan = null;
	number_floors = null;

	// array_of_rooms = []
	
	constructor(
		private roomService: RoomService,
	) { }

	ngOnInit() {
		this.loadDorm(0);
		this.rooms = new Array<Room>();
		this.getRoomInfo();
	}

	getRoomInfo() {
		this.rooms = []
		this.counter = 0
		this.roomService.getAllRooms(this.current_id, this.floor_viewing)
			.subscribe(rooms => this.rooms[this.counter++] = rooms);
		console.log("rooms = " + this.rooms)
	}

	loadDorm(id) {
		this.current_id = id;
		this.current_code = this.halls[id].code;
		this.current_floors = this.halls[id].floors;
		this.floor_viewing = 1;

		/* Array that has length = floors and has each individual floor as its members
		i.e. [1, 2, 3, 4] */
		this.number_floors = Array(this.current_floors);
		for(var _i = 0; _i < this.number_floors.length; _i++) {
			this.number_floors[_i] = _i + 1;
		}

		// this.array_of_rooms = []
		// this.array_of_rooms = this.halls[this.current_id].floorRooms[0]
		this.displayFloor(this.current_code);
	}

	displayFloor(code: string) {
		this.getRoomInfo()
		this.floor_plan = `/assets/floorPlans/${code}-${this.floor_viewing}.png`;
	}

	loadPlan(new_number) {
		this.floor_viewing = new_number;
		// this.setRoomArray()
		this.displayFloor(this.current_code)
	}

	// setRoomArray() {
	// 	this.array_of_rooms = []
	// 	this.array_of_rooms = this.halls[this.current_id].floorRooms[this.floor_viewing - 1]
	// }

}
