/* Framework imports ----------------------------------- */
import { IpcMainEvent as IPCMainEvent } from 'electron';

/* Type imports ---------------------------------------- */
import type { IIPCRequest } from './IIPCRequest';

/* IIPCChannel interface definition -------------------- */
export interface IIPCChannel {
  getName(): string;

  handle(event: IPCMainEvent, request: IIPCRequest): void;
}
