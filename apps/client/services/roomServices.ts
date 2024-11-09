import { Player } from "./clientServices"

export type Room = {
    id: number;
    players: Player[];
    name: string;
    host: Player;
    };

export function createRoom(name: string, host: Player): Room {
    return {
        id: Math.floor(Math.random() * 1000),
        players: [host],
        name: name,
        host: host,
    }
}


export function joinRoom(room: Room, player: Player): Room {
    return {
        id: room.id,
        players: room.players.concat(player),
        name: room.name,
        host: room.host,
    }
}

