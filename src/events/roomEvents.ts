import { Socket, Server } from 'socket.io';

import { Event } from './types';
import { BaseEvents } from './baseEvents';

export class RoomEvents extends BaseEvents {
  constructor(io: Server, socket: Socket) {
    super(io, socket);
  }

  init() {
    const events: Array<Event> = [
      {
        type: 'room:join',
        eventHandler: ({ roomId }) => {
          console.log(`Joined room: ${roomId}`);
          this.socket.join(roomId);
        },
      },
    ];

    events.forEach((event) => {
      this.attachEvent(event);
    });
  }
}
