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
		{id: 0, name: "Lemke Hall", floors: 4, code: "LEM"},
		{id: 1, name: "Newman Hall", floors: 5, code: "NEW"},
		{id: 2, name: "St. Joseph Hall", floors: 3, code: "JOE"},
		{id: 3, name: "St. Michael Hall", floors: 4, code: "STM"},
		{id: 4, name: "Wolf Hall", floors: 3, code: "WOL"},
		{id: 5, name: "Kremmeter Hall", floors: 3, code: "KRE"},
		{id: 6, name: "Elizabeth Hall", floors: 5, code: "LIZ"},
		{id: 7, name: "Legacy Hall", floors: 1, code: "LEG"},
		{id: 8, name: "McDonald Hall", floors: 3, code: "MCD"},
		{id: 9, name: "Guadalupe Hall", floors: 3, code: "GUA"},
		{id: 10, name: "Cray Seaberg Hall", floors: 1, code: "CRA"},
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
