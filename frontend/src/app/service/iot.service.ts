import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import * as  io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class IotService {
  
  constructor(private socket:Socket) {}
  iot(){
    console.log('votre service socket');

    return this.socket.fromEvent('data')
  }
}

