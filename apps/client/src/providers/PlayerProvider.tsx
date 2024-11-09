'use client'

import { createContext, ReactNode, useContext } from 'react'

const PlayerContext = createContext<string>('')

const PlayerProvider = ({
  children,
  name,
}: {
  children: ReactNode
  name: string
}) => {
  return (
    <PlayerContext.Provider value={name}>
      {children}
    </PlayerContext.Provider>
  )
}

const useCurrentPlayerName = () => {
  const context = useContext(PlayerContext)
  if (!context) {
    throw new Error('useCurrentPlayer must be used within a PlayerProvider')
  }
  return context
}

export { PlayerProvider, useCurrentPlayerName as useCurrentPlayer }
