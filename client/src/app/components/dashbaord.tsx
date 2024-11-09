'use client';

import { ClientEventType } from "$/event_types";
import useWebSocket from "$/hooks/useWebSockets";

export function Dashboard() {
  const { events, sendEvent } = useWebSocket('ws://localhost:8080');

  return (
    <div className="flex flex-col gap-8 p-8">
      Messages ({events.length}):
      <div className="flex flex-col gap-2">
        {events.map((event, index) => (
          <div key={index}>{JSON.stringify(event)}</div>
        ))}
      </div>

      <button onClick={() => sendEvent({
        type: ClientEventType.CreateRoom,
        data: { roomName: 'My room' }
      })}>
        Create room
      </button>
    </div>
  )
} 