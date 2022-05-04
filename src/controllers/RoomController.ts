import 'reflect-metadata';

import { inject, named } from 'inversify';
import { controller, httpGet } from 'inversify-express-utils';
import { Request, Response } from 'express';

import { BaseController } from './BaseController';
import { RoomService } from '../services';

@controller('/room')
export class RoomController extends BaseController {
  constructor(
    @inject('service')
    @named('room')
    private roomService: RoomService
  ) {
    super();
  }

  @httpGet('/')
  public async listRooms(req: Request, res: Response) {
    try {
      const { limit, offset } = req.query;
      const data = await this.roomService.listRooms(limit ? +limit : 30, offset ? +offset : 0);

      res.status(200).json(data);
    } catch (e: unknown) {
      this.handleError(req, res, e as Error);
    }
  }
}
