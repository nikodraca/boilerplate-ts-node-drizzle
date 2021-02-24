import { Socket, Server } from 'socket.io';

import { Event } from './types';

export class BaseEvents {
  protected io: Server;
  protected socket: Socket;

  constructor(io: Server, socket: Socket) {
    this.io = io;
    this.socket = socket;
  }

  protected attachEvent(event: Event) {
    this.socket.on((event.type as unknown) as string, event.eventHandler);
  }
}
