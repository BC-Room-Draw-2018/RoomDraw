import { Wishlist } from './Wishlist'
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
}