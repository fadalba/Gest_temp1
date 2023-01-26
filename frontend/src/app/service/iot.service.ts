import { Injectable } from '@angular/core';
//import { Socket } from 'ngx-socket-io';
//import * as  io from 'socket.io-client';
import {Socket, io }from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IotService {

  constructor() {
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
}





