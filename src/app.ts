require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

import 'reflect-metadata';
import express from 'express';
import { InversifyExpressServer, TYPE } from 'inversify-express-utils';
import { InversifySocketServer } from 'inversify-socket-utils';
import SocketIO from 'socket.io';
import cors from 'cors';
import morgan from 'morgan';

import Registry from './Registry';
import config from './config';

/**
 * There's a namespace conflict with TYPE.Controller in `inversify-express-utils`
 * and `inversify-socket-utils` so I change one to avoid it
 */
TYPE.Controller = Symbol.for('RouteController');

export const start = () => {
  const server = new InversifyExpressServer(Registry);

  server.setConfig((app) => {
    app.use(
      cors({
        allowedHeaders: [
          'Origin',
          'X-Requested-With',
          'Content-Type',
          'Accept',
          'X-Access-Token',
          'Access-Control-Allow-Origin',
        ],
        origin: 'http://localhost:3001',
      })
    );
    app.use(express.json());
    if (config.env !== 'test') {
      app.use(morgan('[:date[iso]] :method :url :status'));
    }
  });

  let app = server.build();
  let instance = app.listen(config.port, () => console.log(`Listening on port ${config.port}`));

  const io = new SocketIO.Server(instance);

  const socketServer = new InversifySocketServer(Registry, io);
  socketServer.build();

  return server;
};
