import express from 'express';
import { RoomService } from '../services';

export class RoomController {
  private router: express.Router;
  private roomService: RoomService;

  constructor(roomService: RoomService) {
    this.roomService = roomService;
    this.router = express.Router({ mergeParams: true });
  }

  private listRoutes(req: express.Request, res: express.Response) {
    res.json([
      {
        id: 'cool-room',
        title: 'Cool Room',
      },
    ]);
  }

  routes() {
    this.router.get('/', this.listRoutes);

    return this.router;
  }
}
