import { injectable, inject, named } from 'inversify';
import { RoomRepository } from '../repositories';

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
}
