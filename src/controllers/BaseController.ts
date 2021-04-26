import { injectable } from 'inversify';
import { Request, Response } from 'express';
import config from '../config';

interface Params {
  [key: string]: any;
}

@injectable()
export class BaseController {
  constructor() {}

  validateParams(params: Params, requiredParams: Array<string>): void {
    requiredParams.forEach((key) => {
      if (!params[key]) {
        throw new Error(`Missing key "${key}" in params`);
      }
    });
  }

  handleError(req: Request, res: Response, error?: Error, statusCode?: number) {
    if (config.env !== 'test') {
      console.error(error);
    }

    res.status(statusCode || 500).send(error?.message || 'Something went wrong');

    return;
  }
}
