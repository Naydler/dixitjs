'use client'

import { PlayerProvider } from "$/providers/PlayerProvider"
import { useState } from "react"
import { NameInput } from "./NameInput"
import { PlayMenu } from "./PlayMenu"

export default function MainLogic() {
  const [name, setName] = useState<string>()

  if (!name) {
    return <NameInput setName={setName} />
  }

  return (
    <PlayerProvider name={name}>
      <PlayMenu />
    </PlayerProvider>
  )
}