import { Player } from "services/clientServices";

export class Room {
  readonly code: string;
  players: Player[] = [];

  constructor({ code, player }: { code: string, player: Player }) {
    this.code = code;
    this.players.push(player);
  }
}