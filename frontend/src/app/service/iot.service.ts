import { Injectable } from '@angular/core';
//import { Socket } from 'ngx-socket-io';
//import * as  io from 'socket.io-client';
import {Socket, io }from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IotService {
/* endpoint : string = 'http://localhost:4001';
headers = new HttpHeaders().set('Content-Type', 'application/json');
currentUser={};
HttpHeaders= new HttpHeaders().set('Content-Type', 'application/json');
 */
  constructor( /* private http:HttpClient, private HttpClient:HttpClient  */) {
    this.socket = io('ws://localhost:4001');
  }
  private socket: Socket;




  iot() {
    return new Observable(observer => {
      this.socket.on('data', data => {
        observer.next(data);
      });
    });


}
// coté récupèration tableau journalier
/* getIot(){
  return this.http.get(`${this.endpoint}/`)
} */
}





