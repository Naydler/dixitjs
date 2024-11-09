import WebSocket, { WebSocketServer } from 'ws';
import { ClientEvent, ClientEventType, ServerEvent, ServerEventType } from 'dixitjs-core';
import { Room } from './model/room';
import { roomsManager } from './roomsManager';
import { Player } from './model/player';

const port = 8080;
const wss = new WebSocketServer({ port });

wss.on('connection', (ws: WebSocket) => {
  let player: Player | undefined = undefined;

  const sendEvent = (event: ServerEvent) => {
    ws.send(JSON.stringify(event));
  }

  ws.on('message', (rawEvent: string) => {
    try {
      const event = JSON.parse(rawEvent) as ClientEvent;

      if (event.type === ClientEventType.CreatePlayer) {
        player = new Player({ ws, name: event.data.playerName });
        return
      }

      if (!player) throw new Error('Player not defined');

      if (event.type === ClientEventType.CreateRoom) {
        roomsManager.addRoom(new Room({ host: player }));
        return
      }

      if (event.type === ClientEventType.JoinRoom) {
        const roomCode = event.data.roomCode;
        const room = roomsManager.getRooms().find(room => room.code === roomCode);

        if (!room) throw new Error('La sala no existe.');

        room.addPlayer(player);
        return;
      }

      // @ts-expect-error – This error is expected
      throw new Error(`Event type not found: ${event.type}`);
    } catch (err) {
      const error = err as Error
      sendEvent({ type: ServerEventType.Error, data: error });
    }

  });

  ws.on('close', () => {
    if (!player) return

    if (player)
    console.log('Client disconnected');
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
});

console.log(`WebSocket server is running on ws://localhost:${port}`);
