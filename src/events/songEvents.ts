// import { Socket, Server } from 'socket.io';

// import { Event } from './types';
// import { SpotifyService } from '../services';

// export class SongEvents {
//   private spotifyService: SpotifyService;

//   constructor(io: Server, socket: Socket, spotifyService: SpotifyService) {

//   }

//   init() {
//     const events: Array<Event> = [
//       {
//         type: 'song:submit',
//         eventHandler: ({ spotifyUri }) => {
//           this.socket.rooms.forEach((roomId: string) => {
//             console.log({ roomId, spotifyUri });
//             this.io.to(roomId).emit('song:request', { spotifyUri });
//           });
//         },
//       },
//       {
//         type: 'song:request',
//         eventHandler: () => {
//           console.log('song:request');
//         },
//       },
//       {
//         type: 'song:play',
//         eventHandler: async () => {
//           console.log('song:play');
//         },
//       },
//     ];

//     events.forEach((event) => {
//       this.attachEvent(event);
//     });
//   }
// }
