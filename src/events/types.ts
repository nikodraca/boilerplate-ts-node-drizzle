export type RoomEventTypes = 'room:join';

export type SongEventTypes = 'song:submit' | 'song:request' | 'song:play';

export type EventTypes = RoomEventTypes | SongEventTypes;

export interface Event {
  type: EventTypes;
  eventHandler: (...params: any) => any;
}
