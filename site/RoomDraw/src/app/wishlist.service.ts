import { Wishlist } from './Wishlist';
import { GroupWishlist } from './GroupWishlist';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { share } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class WishlistService {

	wishlist: Wishlist;

	httpOptions = {
		headers: new HttpHeaders({
			'SESSION-ID': window.localStorage['SESSION-ID']
		})
	}

	constructor(
		private http: HttpClient
	) { }

	getStudentWishlist(): Observable<Wishlist[]> {
		var url = 'http://localhost:8000/wishlist';
		return this.http.get<Wishlist[]>(url, this.httpOptions);
	}

	addWishlist(rank, dorm_id, room_id, floor): Observable<Object> {
		var url = 'http://localhost:8000/wishlist?rank=' + rank + '&dorm_id=' + dorm_id + '&room_id=' + room_id + '&floor=' + floor;
		const body = {
			rank: rank,
			dorm_id: dorm_id,
			room_id: room_id,
			floor: floor
		};

		return this.http.put<Object>(url, body, this.httpOptions);
	}

	removeWishlist(rank): Observable<Object> {
		var url = 'http://localhost:8000/wishlist?rank=' + rank;
		return this.http.delete<Object>(url, this.httpOptions);
	}

	//GROUP WISHLIST MANAGEMENT
	getGroupWishlist(): Observable<GroupWishlist[]> {
		var url = 'http://localhost:8000/group_wishlist';
		return this.http.get<GroupWishlist[]>(url, this.httpOptions);
	}

	addGroupWishlist(rank, dorm_id, room_id, floor) {
		var url = 'http://localhost:8000/group_wishlist?rank=' + rank + '&dorm_id=' + dorm_id + "&room_id=" + room_id + "&floor=" + floor;
		const body = {
			rank: rank,
			dorm_id: dorm_id,
			room_id: room_id,
			floor: floor
		}

		var str = JSON.stringify(body)
		return this.http.put<GroupWishlist[]>(url, str, this.httpOptions);
	}

	addGroupWishlistWithoutFloor(rank, dorm_id, room_id) {
		var url = 'http://localhost:8000/group_wishlist?rank=' + rank + '&dorm_id=' + dorm_id + "&room_id=" + room_id;
		const body = {
			rank: rank,
			dorm_id: dorm_id,
			room_id: room_id
		}

		var str = JSON.stringify(body)
		return this.http.put<GroupWishlist[]>(url, str, this.httpOptions);
	}

	removeGroupWishlist(rank) {
		var url = 'http://localhost:8000/group_wishlist?rank=' + rank;
		return this.http.delete<GroupWishlist[]>(url, this.httpOptions);
	}
}