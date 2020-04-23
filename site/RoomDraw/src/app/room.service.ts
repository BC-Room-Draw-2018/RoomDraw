import { Room } from './Room';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { share } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class RoomService {

  roomOnFloor: Room

  httpOptions = {
    headers: new HttpHeaders({
      'SESSION-ID': window.localStorage['SESSION-ID']
    })
  }

  constructor(
		private http: HttpClient
	) { }
    

  getRoomInfo(room_number, spots_left, floor, dorm_id): Observable<Room> {
    var url = 'http://localhost:8000/rooms?room_number=' + room_number + "&spots_left=" + spots_left + "&floor=" + floor + "&dorm_id=" + dorm_id;
    return this.http.get<Room>(url, this.httpOptions);
  }

  getAllRooms(dorm_id, floor): Observable<Room[]> {
    var url = `http://localhost:8000/rooms?floor=${floor}&dorm_id=${dorm_id}`;
    return this.http.get<Room[]>(url, this.httpOptions)
  }
}
