import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { injectable, inject, named } from 'inversify';

import * as schema from '../../db/schema';

@injectable()
export class RoomRepository {
  constructor(
    @inject('connection') @named('prisma') private client: PostgresJsDatabase<typeof schema>
  ) {}

  public async listRooms(limit: number, offset: number) {
    return this.client.query.room.findMany({
      limit,
      offset
    });
  }

  public async createRoom(createRoomArgs: schema.NewRoom) {
    return this.client.insert(schema.room).values(createRoomArgs).returning();
  }
}
