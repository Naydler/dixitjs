'use client';

import useWebSocket from "$/hooks/useWebSockets";

export function Dashboard() {
  const { messages, sendMessage } = useWebSocket('ws://localhost:8080');

  return (
    <div className="flex flex-col gap-8 p-8">
      Messages ({messages.length}):
      <div className="flex flex-col gap-2">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>

      <button onClick={() => sendMessage('hello world')}>
        Send message
      </button>
    </div>
  )
} 