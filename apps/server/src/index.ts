import WebSocket, { WebSocketServer } from 'ws';
import { ClientEvent, ServerEvent, ServerEventType } from 'dixitjs-core';

const port = 8080;
const wss = new WebSocketServer({ port });

wss.on('connection', (ws: WebSocket) => {
  console.log('Client connected');

  const sendEvent = (event: ServerEvent) => {
    ws.send(JSON.stringify(event));
  }

  ws.on('message', (rawEvent: string) => {
    const event = JSON.parse(rawEvent) as ClientEvent;

    sendEvent({ type: ServerEventType.Error, data: { message: JSON.stringify(event) } });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
});

console.log(`WebSocket server is running on ws://localhost:${port}`);
