import { Player } from './player';

export class Room {
  private players: Player[] = [];
  private _code: string;

  constructor({ host }: { host: Player }) {
    this.players.push(host);
    this._code = Math.random().toString(36).substring(7).toUpperCase();
  }

  addPlayer(player: Player) {
    if (this.players.some(p => p.name === player.name)) {
      throw new Error('Ya hay un jugador con el mismo nombre en la sala.');
    }

    this.players.push(player);
    this.players.forEach(p => p.onRoomPlayersUpdate());
    player.onJoinRoom(this);
  }

  removePlayer(player: Player) {
    this.players = this.players.filter(p => p.name !== player.name);
  }

  get code() {
    return this._code;
  }
}