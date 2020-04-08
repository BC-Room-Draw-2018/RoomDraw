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
			'SESSION-ID': 'alex'
		})
	}

	constructor(
		private http: HttpClient
	) { }

	getStudentWishlist(): Observable<Wishlist[]> {
		var url = 'http://localhost:8000/wishlist';
		return this.http.get<Wishlist[]>(url, this.httpOptions);
	}
}