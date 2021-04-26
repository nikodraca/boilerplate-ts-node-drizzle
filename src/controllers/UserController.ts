import 'reflect-metadata';

import { controller, httpGet } from 'inversify-express-utils';
import { Request, Response } from 'express';

import { BaseController } from './BaseController';

@controller('/user')
export class UserController extends BaseController {
  @httpGet('/')
  public async listRooms(req: Request, res: Response) {
    return { ok: true };
  }
}
