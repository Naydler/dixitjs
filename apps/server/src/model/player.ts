import { Room } from "./room";
import WebSocket from "ws";

export class Player {
  readonly ws: WebSocket;
  readonly name: string;
  private currentRoom: Room | undefined;

  constructor({ ws, name }: {ws: WebSocket; name: string}) {
    this.ws = ws;
    this.name = name;
  }

  onJoinRoom(room: Room) {
    this.currentRoom = room;
  }

  onLeaveRoom() {
    this.currentRoom = undefined;
  }

  onRoomPlayersUpdate() {
    if (!this.currentRoom) return;

    // Send the updated list of players to the client  
  }

  get room() {
    return this.currentRoom;
  }
}