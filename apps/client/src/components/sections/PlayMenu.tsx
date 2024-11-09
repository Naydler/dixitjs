import { useCurrentPlayer } from "$/providers/PlayerProvider";
import { Button } from "../ui/button";


export function PlayMenu() {
  const name = useCurrentPlayer()

  return (
    <div className="flex w-full max-w-sm flex-col space-y-4">
        {name}
        <Button type="submit" className="w-full py-4">Crear sala</Button>
        <Button type="submit" className="w-full py-4">Unirse a sala</Button>
    </div>
)
}