import { Room } from './model/room';

class RoomsManager {
  private static instance: RoomsManager;
  private rooms: Room[] = [];

  private constructor() {}

  static getInstance(): RoomsManager {
    if (!RoomsManager.instance) {
      RoomsManager.instance = new RoomsManager();
    }
    return RoomsManager.instance;
  }

  addRoom(room: Room) {
    this.rooms.push(room);
  }

  getRooms(): Room[] {
    return this.rooms;
  }
}

export const roomsManager = RoomsManager.getInstance();

