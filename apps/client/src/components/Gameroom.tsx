import { Button } from "./ui/button";

export function createRoom() {
    console.log("create room")


}

export function joinRoom() {
    console.log("join room")
}

export function gameRoom() {

    return (
        <div className="flex w-full max-w-sm flex-col space-y-4">
            <Button type="submit" className="w-full py-4" onClick={() => handleCreate()}>Crear sala</Button>
            <Button type="submit" className="w-full py-4" onClick={() => handleJoin()}>Unirse a sala</Button>
        </div>
    )
}