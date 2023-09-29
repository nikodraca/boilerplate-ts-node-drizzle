require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

import 'reflect-metadata';
import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';

import cors from 'cors';
import morgan from 'morgan';

import Registry from './Registry';
import config from './config';

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
          'Access-Control-Allow-Origin'
        ],
        origin: 'http://localhost:3001'
      })
    );
    app.use(express.json());
    if (config.env !== 'test') {
      app.use(morgan('[:date[iso]] :method :url :status'));
    }
  });

  let app = server.build();
  app.listen(config.port, () => console.log(`Listening on port ${config.port}`));

  return server;
};
