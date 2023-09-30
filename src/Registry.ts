import { Container } from 'inversify';
import { drizzle } from 'drizzle-orm/postgres-js';
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as schema from '../db/schema';
import { RoomService } from './services';
import { RoomRepository } from './repositories';
import { RoomController } from './controllers';
import config from './config';

const registry = new Container();

// for query purposes
const queryClient = postgres(config.db.url);
const db: PostgresJsDatabase<typeof schema> = drizzle(queryClient, { schema });

// CONNECTIONS
registry
  .bind<PostgresJsDatabase<typeof schema>>('connection')
  .toConstantValue(db)
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
