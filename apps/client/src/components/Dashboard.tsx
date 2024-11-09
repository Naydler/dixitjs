'use client';

import { useState } from "react";
import { ClientEventType } from "dixitjs-core";
import useWebSocket from "$/hooks/useWebSockets";
import { Button } from "$/components/ui/button";
import { Input } from "$/components/ui/input";

export function Dashboard() {
  const { events, sendEvent } = useWebSocket('ws://localhost:8080');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [actionType, setActionType] = useState<string | null>(null); 

  const openModal = (type: string) => {
    setActionType(type);
    setIsModalOpen(true);
  }

  const handleConfirm = () => {
    if (inputValue.trim()) {
      if (actionType === "create") {
        sendEvent({
          type: ClientEventType.CreateRoom,
          data: { roomName: inputValue }
        });
      } else if (actionType === "join") {
        sendEvent({
          type: ClientEventType.JoinRoom,
          data: { roomCode: inputValue }
        });
      }
      setIsModalOpen(false);
      setInputValue(''); // Limpia el campo de entrada
    }
  }

  return (
    <div className="flex flex-col gap-8 p-8">
      <Button onClick={() => openModal("create")}>
        Create room
      </Button>

      <Button onClick={() => openModal("join")}>
        Join room
      </Button>

      <div>
        {events.map((event, index) => (
          <div key={index}>
            {JSON.stringify(event)}
          </div>
        ))}
      </div>

      {/* Modal para ingresar el nombre o el código de la sala */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg flex flex-col gap-4">
            <h2 className="text-xl font-semibold">
              {actionType === "create" ? "Enter Room Name" : "Enter Room Code"}
            </h2>
            <Input
              placeholder={actionType === "create" ? "Room Name" : "Room Code"}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="flex gap-2">
              <Button onClick={handleConfirm}>Confirm</Button>
              <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
