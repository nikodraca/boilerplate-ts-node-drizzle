import { Socket, Server } from 'socket.io';

import { Event } from './types';
import { BaseEvents } from './baseEvents';
import { SpotifyService } from '../services';

export class SongEvents extends BaseEvents {
  private spotifyService: SpotifyService;

  constructor(io: Server, socket: Socket, spotifyService: SpotifyService) {
    super(io, socket);
    this.spotifyService = spotifyService;
  }

  init() {
    const events: Array<Event> = [
      {
        type: 'song:submit',
        eventHandler: ({ spotifyUri }) => {
          this.socket.rooms.forEach((roomId: string) => {
            console.log(roomId);
            this.io.to(roomId).emit('song:request', { spotifyUri });
          });
        },
      },
      {
        type: 'song:request',
        eventHandler: () => {},
      },
      {
        type: 'song:play',
        eventHandler: async ({ spotifyUri, accessToken }) => {
          await this.spotifyService.startUserPlayback(spotifyUri, accessToken);
        },
      },
    ];

    events.forEach((event) => {
      this.attachEvent(event);
    });
  }
}
