'use client'

import { createContext, ReactNode, useContext } from 'react'
import { Room } from 'services/roomServices'

const RoomContext = createContext<Room>({} as Room)

const RoomProvider = ({
  children,
  room,
}: {
  children: ReactNode
  room: Room
}) => {
  return (
    <RoomContext.Provider value={room}>
      {children}
    </RoomContext.Provider>
  )
}

const useCurrentRoom = () => {
  const context = useContext(RoomContext)
  if (!context) {
    throw new Error('useCurrentRoom must be used within a RoomProvider')
  }
  return context
}

export { RoomProvider, useCurrentRoom }
