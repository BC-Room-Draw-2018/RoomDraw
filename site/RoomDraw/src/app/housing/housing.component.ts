import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-housing',
	templateUrl: './housing.component.html',
	styleUrls: ['./housing.component.css']
})
export class HousingComponent implements OnInit {

	halls = [
		{id: 0, name: "Lemke Hall", floors: 4, code: "LEM"},
		{id: 1, name: "Newman Hall", floors: 4, code: "NEW"},
		{id: 2, name: "St. Joseph Hall", floors: 3, code: "STJ"},
		{id: 3, name: "St. Michael Hall", floors: 4, code: "STM"},
		{id: 4, name: "Wolf Hall", floors: 3, code: "WOLF"}
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
