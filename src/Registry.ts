import { Container } from 'inversify';
import { PrismaClient } from '@prisma/client';

import config from './config';

import { RoomService } from './services';
import { RoomRepository } from './repositories';
import { RoomController } from './controllers';

const registry = new Container();

// CONNECTIONS
registry
  .bind<PrismaClient>('connection')
  .toConstantValue(
    new PrismaClient({
      datasources: { db: { url: config.db.url } }
    })
  )
  .whenTargetNamed('prisma');

// SERVICES
registry.bind<RoomService>('service').to(RoomService).inSingletonScope().whenTargetNamed('room');

// REPOSITORIES
registry
  .bind<RoomRepository>('repository')
  .to(RoomRepository)
  .inSingletonScope()
  .whenTargetNamed('room');

// ROUTE CONTROLLERS
registry
  .bind<RoomController>('route')
  .to(RoomController)
  .inSingletonScope()
  .whenTargetNamed('room');

export default registry;
