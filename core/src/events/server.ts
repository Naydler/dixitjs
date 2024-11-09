import { IEvent } from "./interface";


export enum ServerEventType {
  Error = 'error',
}

export interface ErrorEvent extends IEvent {
  type: ServerEventType.Error;
  data: {
    message: string;
  }
}

export type ServerEvent = ErrorEvent;