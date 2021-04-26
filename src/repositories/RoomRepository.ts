import { PrismaClient } from '@prisma/client';
import { injectable, inject, named } from 'inversify';

@injectable()
export class RoomRepository {
  constructor(@inject('connection') @named('prisma') private client: PrismaClient) {}

  public async listRooms(limit: number, offset: number) {
    return [{ id: 'cool-room', title: 'Cool Room' }];
    // return this.client.room.findMany({
    //   skip: offset,
    //   take: limit,
    // });
  }
}
