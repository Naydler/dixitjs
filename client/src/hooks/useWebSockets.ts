import { ClientEvent, ServerEvent } from '$/event_types';
import { useEffect, useState } from 'react';

const useWebSocket = (url: string) => {
  const [events, setEvents] = useState<ServerEvent[]>([]);
  const [ws, setWs] = useState<WebSocket>();

  useEffect(() => {
    const socket = new WebSocket(url);
    setWs(socket);

    socket.onmessage = (rawEvent) => {
      const event = JSON.parse(rawEvent.data) as ServerEvent;

      setEvents((prevMessages) => [...prevMessages, event]);
    };

    return () => {
      socket.close();
    };
  }, [url]);

  const sendEvent = (event: ClientEvent) => {
    if (ws) {
      ws.send(JSON.stringify(event));
    }
  };

  return { events, sendEvent };
};

export default useWebSocket;