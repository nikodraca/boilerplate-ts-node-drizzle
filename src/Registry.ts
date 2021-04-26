import { Container } from 'inversify';
import { PrismaClient } from '@prisma/client';
import { Interfaces, TYPE } from 'inversify-socket-utils';

import config from './config';

import { RoomController, UserController } from './controllers';
import { RoomService } from './services';
import { RoomRepository } from './repositories';
import { RoomEvents } from './events';

const registry = new Container();

// CONNECTIONS
registry
  .bind<PrismaClient>('connection')
  .toConstantValue(
    new PrismaClient({
      datasources: { db: { url: config.db.url } },
    })
  )
  .whenTargetNamed('prisma');

// GATEWAYS

// SERVICES
registry.bind<RoomService>('service').to(RoomService).inSingletonScope().whenTargetNamed('room');

// REPOSITORIES
registry.bind<RoomRepository>('repository').to(RoomRepository).inSingletonScope().whenTargetNamed('room');

// ROUTE CONTROLLERS
registry.bind<RoomController>('route').to(RoomController).inSingletonScope().whenTargetNamed('room');
registry.bind<UserController>('route').to(UserController).inSingletonScope().whenTargetNamed('user');

// EVENTS
registry.bind<Interfaces.Controller>(TYPE.Controller).to(RoomEvents);

export default registry;
