/* Framework imports ----------------------------------- */
import { ipcMain as IPCMain } from 'electron';

/* Module imports -------------------------------------- */
import hasKey from '../../imports/helpers/hasKey';

/* Type imports ---------------------------------------- */
import type { IIPCChannel } from './IPCTypes/IIPCChannel';

/* IPCMain specific type ------------------------------- */
interface IIPCMainEventResult {
  response: unknown;
  error: unknown;
}

type IPCMainMethodType = <T = unknown, R = unknown>(args?: T) => R;
type IPCMainMethodsType = {
  [methodName: string]: IPCMainMethodType;
};

interface IPCMethodCallArgs {
  method: string;
  callerID: string;
  args: unknown[];
}

/* Helper functions ------------------------------------ */

/* Internal variables ---------------------------------- */

/* IPCMain functions ----------------------------------- */

/* IPCMain events -------------------------------------- */
