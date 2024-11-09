type IEvent = {
  type: string;
  data: unknown;
}

export enum ClientEventType {
  CreateRoom = 'create_room',
  JoinRoom = 'join_room',
}

export interface CreateRoomEvent extends IEvent {
  type: ClientEventType.CreateRoom;
  data: {
    roomName: string;
  }
}

export interface JoinRoomEvent extends IEvent {
  type: ClientEventType.JoinRoom;
  data: {
    roomCode: string;
  }
}

export type ClientEvent = CreateRoomEvent | JoinRoomEvent;

export interface ErrorEvent extends IEvent {
  type: 'error';
  data: {
    message: string;
  }
}

export type ServerEvent = ErrorEvent;