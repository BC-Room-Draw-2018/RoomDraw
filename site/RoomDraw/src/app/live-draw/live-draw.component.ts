import { Room } from '../Room';
import { Dorm } from '../Dorm';
import { Student } from '../Student';
import { Wishlist } from '../Wishlist';
import { GroupWishlist } from '../GroupWishlist';
import { Group } from '../Group';
import { RoomService } from '../room.service';
import { DormService } from '../dorm.service';
import { StudentService } from '../student.service';
import { WishlistService } from '../wishlist.service';
import { GroupService } from '../group.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-draw',
  templateUrl: './live-draw.component.html',
  styleUrls: ['./live-draw.component.scss']
})
export class LiveDrawComponent implements OnInit {
	rooms: Room[] = [];
	
	roomsForFinalChoice: Room[] = [];

	dorms: Dorm[] = [];

	wishlist: GroupWishlist[] =[];

	myInfo: Student;

	group: Group;
	groupMembers: Student[];
	groupLeader: Student;

	displayDormDropdown: boolean = false;
	dropdownDorm = 0;
	displayFloorDropdown: boolean = false;
	dropdownFloors = null;
	dropdownFloorRooms = 0;
	displayRoomDropdown: boolean = false;
	dropdownRooms: Room[] = []
	dropdownRoom = 0;
	dropdownRoomCapacity = 0;
	okayToSubmit: boolean = false;
	popUpVisable: boolean = false;
	preference = 0;
	failedToAdd: boolean = false;

	deleteCardPopup: boolean = false;
	deleteCardRank = 0;
	deleteCardDorm = null;
	deleteCardRoom = 0;

	roomListPopupVisable: boolean = false;
	roomListPreference = 0;
	roomListDormID = 0;
	roomListDormName = null;
	roomListRoom = 0;
	roomListRankSelected: boolean = false;

	groupsAheadOfUser = 222222;

	/* Keep track of properties of the floor the user is currently using */
	current_id = null;
	current_floors = null;
	current_code = null;
	floor_viewing = null; /* What floor is the user looking at? */


	/* floorPlan is the image location and number_floors is a blank array to loop the appropriate amount
	of times with in the html to display the number of tabs for each floor in the dorm */
	floor_plan = null;
	number_floors = null;

	
	constructor(
		private roomService: RoomService,
		private dormService: DormService,
		private studentService: StudentService,
		private wishlistService: WishlistService,
		private groupService: GroupService
	) { }

	ngOnInit() {
		this.getAllDormsInfo();

		this.getWishlist();

		this.getGroup();
		this.getGroupMembers();
		this.getGroupLeader();

		this.myInfo = new Student();
		this.getMyInfo();
	}

	getAllDormsInfo() {
		this.dormService.getAllDorms()
			.subscribe(dorms => this.dorms = dorms);
	}

	getWishlist() {
		this.wishlistService.getGroupWishlist()
			.subscribe(wishlist => this.wishlist = wishlist);
	}

	getGroup() {
		this.groupService.getGroup()
			.subscribe(group => this.group = group);
	}

	getGroupMembers() {
		this.groupService.getGroupMembers()
			.subscribe(groupMembers => this.groupMembers = groupMembers);
	}

	getGroupLeader() {
		this.groupService.getGroupLeader()
			.subscribe(groupLeader => this.groupLeader = groupLeader);
	}

	getMyInfo() {
		this.studentService.getInfo()
			.subscribe(myInfo => this.myInfo = myInfo);
	}

	getRoomInfo() {
		this.rooms = [];
		this.roomService.getAllRooms(this.current_id, this.floor_viewing)
			.subscribe(rooms => this.rooms = rooms);
	}

	getFinalRooms(dorm_id, floor) {
		this.roomsForFinalChoice = [];
		this.roomService.getAllRooms(dorm_id, floor)
			.subscribe(rooms => this.roomsForFinalChoice = rooms);
	}

	loadDorm(id) {
		var selected_dorm = this.dorms.find(dorm => dorm.dorm_id == id);
		this.current_id = id;
		this.current_code = selected_dorm.dorm_code;
		this.current_floors = selected_dorm.floors;
		this.floor_viewing = 1;


		/* Array that has length = floors and has each individual floor as its members
		i.e. [1, 2, 3, 4] */
		this.number_floors = Array(this.current_floors);
		for(var _i = 0; _i < this.number_floors.length; _i++) {
			this.number_floors[_i] = _i + 1;
		}
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

	showPopUp() {
		this.popUpVisable = true;
	}

	hidePopUp() {
		this.displayDormDropdown = false;
		this.displayFloorDropdown = false;
		this.displayRoomDropdown = false;
		this.okayToSubmit = false;
		this.popUpVisable = false;
		this.failedToAdd = false;
	}

	setPreference(rank) {
		this.preference = rank;
		this.displayDormDropdown = true;
	}

	wishlistHall(dorm_id): string {
		var name = this.dorms.find(dorm => dorm.dorm_id == dorm_id).dorm_name;
		return name;
	}

	showFloorDropdown(dorm_id) {
		this.displayFloorDropdown = true;
		this.dropdownDorm = dorm_id
		const numFlrs = this.dorms.find(dorm => dorm.dorm_id == dorm_id).floors;

		this.dropdownFloors = Array(numFlrs);
		for(var _i = 0; _i < this.dropdownFloors.length; _i++) {
			this.dropdownFloors[_i] = _i + 1;
		}
	}

	floorDropdown(floorNum) {
		this.dropdownFloorRooms = floorNum;
		this.displayRoomDropdown = true;
		this.getDropdownRooms();
	}

	getDropdownRooms() {
		this.dropdownRooms = [];
		this.roomService.getAllRooms(this.dropdownDorm, this.dropdownFloorRooms)
			.subscribe(rooms => this.dropdownRooms = rooms);
	}

	roomDropdown(roomNum, capacity) {
		this.dropdownRoomCapacity = capacity;
		this.dropdownRoom = roomNum;
		this.okayToSubmit = true;
	}

	submitWishlist() {
		if(this.dropdownRoomCapacity >= this.groupMembers.length) {
			this.hidePopUp();
			this.wishlistService.addGroupWishlist(this.preference, this.dropdownDorm, this.dropdownRoom, this.dropdownFloorRooms)
				.subscribe(error => error = error)
			this.getWishlist();
		} else {
			this.failedToAdd = true;
		}
	}

	showDeleteCardPopup(rank, dorm_id, room_id) {
		this.deleteCardPopup = true;
		this.deleteCardRank = rank;
		var dormName = this.dorms.find(dorm => dorm.dorm_id == dorm_id).dorm_name;
		this.deleteCardDorm = dormName;
		this.deleteCardRoom = room_id;
		// console.log("card to delete:");
		// console.log("Rank: " + rank);
		// console.log("dorm_id: " + dorm_id);
		// console.log("room id: " + room_id);
	}

	hideDeleteCardPopup() {
		this.deleteCardPopup = false;
	}

	deleteCard() {
		this.deleteCardPopup = false;
		this.wishlistService.removeGroupWishlist(this.deleteCardRank)
			.subscribe(error => error = error);
		this.getWishlist();
	}

	deleteWishlist(rank) {
		this.wishlistService.removeGroupWishlist(rank)
			.subscribe(error => error = error);
		this.getWishlist();
	}

	showRoomListAddPopup(dorm_id, room) {
		//roomIQ means 'room in question'
		var roomCapacity = this.rooms.find(roomIQ => (roomIQ.dorm_id == dorm_id) && (roomIQ.room_number == room)).capacity;
		if(roomCapacity >= this.groupMembers.length) {
			this.roomListDormName = this.dorms.find(dorm => dorm.dorm_id == dorm_id).dorm_name;
			this.roomListDormID = dorm_id
			this.roomListRoom = room;
			this.roomListPopupVisable = true;
		}
	}

	hideRoomListAddPopup() {
		this.roomListPopupVisable = false;
	}

	setRoomListPreference(rank) {
		this.roomListPreference = rank;
		this.roomListRankSelected = true;
	}

	addRoomList() {
		this.roomListPopupVisable = false;
		this.roomListRankSelected = false;
		this.wishlistService.addGroupWishlist(this.roomListPreference, this.roomListDormID, this.roomListRoom, this.floor_viewing)
			.subscribe(error => error = error);
		this.getWishlist();
	}

	ifLeader(): boolean {
		return this.groupLeader.random_number == this.myInfo.random_number;
	}

	chooseRoomFromList(list: Wishlist) {
		console.log("here's the room choosen " + list)
		//do choose room here
		//failedToAdd = false;
		//pass turn
	}

	chooseRoomFromSelection() {
		//check if okay
			//failedToAdd = false;
			console.log("Room chosen from selection: Dorm = " + this.dropdownDorm + " room = " + this.dropdownRoom + "floor = " + this.dropdownFloorRooms)
			//pass turn
		//if not failedToAdd = true;
	}

	available(): boolean {
		return true;
	}

	//ngStyle ----------------------------------------
	howManyLeft(capacity, spots_available): object {
		if(spots_available < capacity && spots_available != 0) {
			return {
				'color': `black`,
				'background-color': `yellow`
			};
		} else if(spots_available <= 0) {
			return {
				'color': `black`,
				'background-color': `red`
			};
		} else {
			console.log("ERROR: Something has gone very wrong!")
		}
	}

	stillAvailable(dorm_id, room_id, floor): object {
		//if unavailable
		if(1 > 2) {
			return {
				'background-color': `gray`
			}
		}
	}
}
