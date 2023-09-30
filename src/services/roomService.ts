import { injectable, inject, named } from 'inversify';

import { RoomRepository } from '../repositories';
import type { NewRoom } from '../../db/schema';

@injectable()
export class RoomService {
  constructor(
    @inject('repository')
    @named('room')
    private roomRepository: RoomRepository
  ) {}

  public async listRooms(limit: number, offset: number) {
    return this.roomRepository.listRooms(limit, offset);
  }

  public async createRoom(createRoomArgs: NewRoom) {
    return this.roomRepository.createRoom(createRoomArgs);
  }
}
