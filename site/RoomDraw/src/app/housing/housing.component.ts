import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-housing',
	templateUrl: './housing.component.html',
	styleUrls: ['./housing.component.scss']
})
export class HousingComponent implements OnInit {

	halls = [
		{id: 0, name: "Lemke Hall", floors: 4, code: "LEM", floor1rooms: ["49", "50", "51", "52"], floor2rooms: ["53", "55", "56", "61", "62", "63", "64"], floor3rooms: ["57", "58", "59", "60", "65", "66", "67"], floor4rooms: ["69", "70", "71", "72"]},
		{id: 1, name: "Newman Hall", floors: 5, code: "NEW", floor1rooms: ["001", "002", "003", "004"], floor2rooms: ["101", "102", "103", "104", "105", "106", "107", "108", "109"], floor3rooms: ["202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212", "213", "214", "215", "216", "217", "218", "219", "220"], floor4rooms: ["302", "303", "304", "305", "306", "307", "308", "309", "310", "311", "312", "313", "314", "315", "316", "317", "318", "319", "320"], floor5rooms: ["402", "403", "404", "405", "406", "407", "408", "409", "411", "412", "413", "414", "415", "416", "417", "418", "419", "420"]},
		{id: 2, name: "St. Joseph Hall", floors: 3, code: "JOE", floor1rooms: ["101", "102", "103", "104", "105", "107", "108", "109", "111"], floor2rooms: ["201", "202", "203", "204", "205", "206", "207", "208", "209", "211"], floor3rooms: ["301", "302", "303", "304", "305", "306", "307", "308", "309", "310", "311", "312"]},
		{id: 3, name: "St. Michael Hall", floors: 4, code: "STM", floor1rooms: ["001", "003", "004", "005", "006", "007", "008", "009", "010", "011"], floor2rooms: ["101", "103", "104", "105", "106", "107", "108", "109", "110", "111", "113", "115", "117", "119"], floor3rooms: ["201", "203", "204", "205", "206", "207", "208", "209", "210", "211", "213", "214", "215", "216", "217", "218", "219", "220", "221", "222", "223", "225", "227", "229"], floor4rooms: ["301", "303", "304", "305", "306", "307", "308", "309", "310", "311", "313", "314", "315", "316", "317", "318", "319", "320", "321", "322", "323", "325", "327", "329"]},
		{id: 4, name: "Wolf Hall", floors: 3, code: "WOLF", floor1rooms: ["29", "30", "39", "40"], floor2rooms: ["32", "33", "34", "41", "42", "43"], floor3rooms: ["35", "36", "37", "38", "45", "46", "47", "48"]},
		{id: 5, name: "Kremmeter Hall", floors: 3, code: "KRE", floor1rooms: ["1", "2", "3", "4", "13", "14", "15", "16"], floor2rooms: ["5", "6", "7", "8", "17", "18", "19", "20"], floor3rooms: ["9", "10", "11", "12", "21", "22", "23", "24"]},
		{id: 6, name: "Elizabeth Hall", floors: 5, code: "LIZ", floor1rooms: ["001", "003"], floor2rooms: ["101", "102", "103", "104", "105", "106", "107", "108", "109", "111", "112"], floor3rooms: ["201", "202", "203", "204", "205", "206", "207", "208", "209", "211", "212"], floor4rooms: ["301", "302", "303", "304", "305", "306", "307", "309", "310", "311", "312"], floor5rooms: ["401", "402", "403", "404", "405", "406", "407", "408", "409", "410"]},
		{id: 7, name: "Legacy Hall", floors: 1, code: "LEG", floor1rooms: ["25", "26", "27", "28"]},
		{id: 8, name: "McDonald Hall", floors: 3, code: "MCD", floor1rooms: ["A-1", "A-2", "A-3", "A-4", "B-1", "B-2", "B-3", "B-4", "C-1", "C-2", "C-3", "D-1", "D-2", "D-3", "D-4", "E-1", "E-2", "E-3", "E-4", "F-1", "F-2", "F-3", "F-4"], floor2rooms: ["G-1", "G-2", "G-3", "G-4", "H-1", "H-2", "H-3", "H-4", "I-1", "I-2", "I-3", "I-4", "J-1", "J-2", "J-3", "J-4", "K-1", "K-2", "K-3", "L-1", "L-2", "L-3", "L-4", "M-1", "M-2", "M-3"], floor3rooms: ["N-1", "N-2", "N-3", "N-4", "O-1", "O-2", "O-3", "Q-4", "P-1", "P-2", "P-3", "Q-1", "Q-2", "Q-3", "Q-4", "R-1", "R-2", "R-3", "R-4", "S-1", "S-2", "S-3", "T-1", "T-2", "T-3"]},
		{id: 9, name: "Guadalupe Hall", floors: 3, code: "GUAD", floor1rooms: ["202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212", "213", "214", "215", "216", "217", "219", "221", "223", "225"], floor2rooms: ["302", "303", "304", "305", "306", "307", "308", "309", "310", "311", "312", "313", "314", "315", "316", "317", "319", "321", "323", "325"], floor3rooms: ["401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "411"]},
		{id: 10, name: "Cray Seaberg Hall", floors: 1, code: "CRAY", floor1rooms: ["302", "303", "304", "305", "306", "307", "308", "309", "310", "311", "312", "316", "317", "318", "319", "320", "321"]}
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
	
	constructor() {

	}

	ngOnInit() {
		this.loadDorm(0);
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

		this.displayFloor(this.current_id, this.floor_viewing, this.current_code);
	}

	displayFloor(id: number, floors: number, code: string) {
		this.floor_plan = `/assets/floorPlans/${code}-${this.floor_viewing}.png`;
	}

	loadPlan(new_number) {
		this.floor_viewing = new_number;
		this.displayFloor(this.current_id, new_number, this.current_code)
	}

}
