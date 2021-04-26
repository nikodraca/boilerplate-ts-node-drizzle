import { inject, injectable, named } from 'inversify';
import { ConnectedSocket, Controller, OnConnect, OnDisconnect, OnMessage, Payload } from 'inversify-socket-utils';
import 'reflect-metadata';

import { RoomService } from '../services';

@injectable()
@Controller('/')
export class RoomEvents {
  constructor(
    @inject('service')
    @named('room')
    private roomService: RoomService
  ) {}

  @OnConnect('connection')
  connection() {
    console.log('Client connected');
  }

  @OnDisconnect('disconnect')
  disconnect() {
    console.log('Client disconnected');
  }

  @OnMessage('room:join')
  message(@Payload() payload: any, @ConnectedSocket() socket: any) {
    console.log('Message received', payload);
    // socket.emit('message', 'Hello!');
  }
}
