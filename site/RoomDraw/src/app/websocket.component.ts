/**front end web socket skeleton, still getting an error from the websocket generation I cant figure out*/

import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import { Dorm } from './Dorm';
import { Room } from './Room';

var genericWS: WebSocketSubject<> = webSocket('wss://localhost:4200');

genericWS.open();

genericWS.asObservable().subscribe(stillInLine => Dorm);
genericWS.asObservable().subscribe(stillInLine => Room);

//for information to be sent from the web to the sever
//do not believe this is needed
//genericWS.next();

genericWS.subscribe(
    msg => console.log('message received: ' + msg),
    err=>console.log(err),
    () => console.log('Web Socket closed.')
);
while(/*no informaiton from server*/){
    genericWS.closed()
}