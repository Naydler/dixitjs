import { ClientEventType } from "dixitjs-core";
import useWebSocket from "./useWebSockets";
import { useEffect, useMemo } from "react";
import { Player } from "services/clientServices";

export default function usePlayer({ name }: { name: string }) {
  const { sendEvent } = useWebSocket('ws://localhost:8080');

  useEffect(() => {
    sendEvent({ type: ClientEventType.CreatePlayer, data: { playerName: name } });
  }, [name, sendEvent]);

  const player = useMemo<Player>(() => {
    return new Player({ name });
  }, [name]);

  return { player };
}