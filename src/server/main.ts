/* Framework imports ----------------------------------- */
import Electron from 'electron';
// import installExtension, { REACT_DEVELOPER_TOOLS /* REDUX_DEVTOOLS */ } from 'electron-devtools-installer';

/* Module imports -------------------------------------- */
import MenuBuilder from './menus/MenuBuilder';

/* Webpack variable declarations ----------------------- */
/* eslint-disable init-declarations */
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
/* eslint-enable init-declarations */

/* Declare the mainWindow variable --------------------- */
/* eslint-disable-next-line init-declarations */
let sMainWindow: Electron.BrowserWindow;

/* ----------------------------------------------------- */
/* Handle creating/removing shortcuts on Windows when installing/uninstalling. */
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
if(require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  Electron.app.quit();
}

/* Create main window ---------------------------------- */
const createWindow = () => {
  sMainWindow = new Electron.BrowserWindow(
    {
      width: 1200,
      height: 900,
      webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: false,
        contextIsolation: true,
        nodeIntegrationInWorker: false,
        nodeIntegrationInSubFrames: false,
        preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      },
    },
  );

  sMainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)
    .then(
      (pResult) => {
        console.log(`[INFO ] Successfully loaded ${MAIN_WINDOW_WEBPACK_ENTRY} :`, pResult);
      },
    )
    .catch(
      (pError) => {
        console.error(`[ERROR] Failed to load ${MAIN_WINDOW_WEBPACK_ENTRY} :`, pError);
        throw new Error(`[ERROR] Failed to load ${MAIN_WINDOW_WEBPACK_ENTRY}`);
      },
    );

  /* Show window when its ready to */
  sMainWindow.on(
    'ready-to-show',
    () => {
      sMainWindow.show();
    },
  );

  // if(process.env.NODE_ENV === 'development') {
  //   const lPath = 'http://localhost:4000';
  //   sMainWindow.loadURL(lPath)
  //     .then(
  //       (pResult) => {
  //         console.log(`[INFO ] Successfully loaded ${lPath} :`, pResult);
  //       },
  //     )
  //     .catch(
  //       (pError) => {
  //         console.error(`[ERROR] Failed to load ${lPath} :`, pError);
  //         throw new Error(`[ERROR] Failed to load ${lPath}`);
  //       },
  //     );
  // } else {
  //   const lPath = path.join(__dirname, '../client/public/index.html');
  //   sMainWindow.loadFile(lPath)
  //     .then(
  //       (pResult) => {
  //         console.log(`[INFO ] Successfully loaded ${lPath} :`, pResult);
  //       },
  //     )
  //     .catch(
  //       (pError) => {
  //         console.error(`[ERROR] Failed to load ${lPath} :`, pError);
  //         throw new Error(`[ERROR] Failed to load ${lPath}`);
  //       },
  //     );
  // }

  const lMenuBuilder = new MenuBuilder(sMainWindow);
  lMenuBuilder.buildMenu();
};

/* Main server code ------------------------------------ */
const main = () => {
  Electron.app.whenReady()
    .then(
      () => {
        if(process.env.NODE_ENV === 'development') {
          /* Install the devtools necessary for the development environment */
          // installExtension(REACT_DEVELOPER_TOOLS)
          //   .then(
          //     (pExtensionName) => {
          //       console.log(`[INFO ] Added Extension: ${pExtensionName}`);
          //     }
          //   )
          //   .catch(
          //     (pError) => {
          //       console.log(`[ERROR] An error occurred while installing extension REACT_DEVELOPER_TOOLS :`, pError);
          //     }
          //   );
          // installExtension(REDUX_DEVTOOLS)
          //   .then(
          //     (name) => {
          //       console.log(`Added Extension:  ${name}`);
          //     }
          //   )
          //   .catch(
          //     (pError) => {
          //       console.log('[ERROR] An error occurred while installing extension REDUX_DEVTOOLS :', pError);
          //     }
          //   );
        }

        /* Create the main window */
        createWindow();
      },
    )
    .catch(
      (pError) => {
        console.error(`[ERROR] Electron.app.on().whenReady failed :`, pError);
        throw new Error(`[ERROR] Electron.app.on().whenReady failed :`);
      },
    );

  Electron.app.on(
    'window-all-closed',
    () => {
      console.log('[DEBUG] Closing window...');
      /* On macOS, it is common for an app and it's menu bar
       * to stay active until the user has explicitly close
       * the app. */
      if(process.platform !== 'darwin') {
        Electron.app.quit();
      }
    },
  );

  Electron.app.on(
    'activate',
    () => {
      /* On macOS, it is common to recreate the app's
       * window when the Dock icon is clicked
       * and no other windows are opened. */
      if(Electron.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    },
  );

  Electron.app.allowRendererProcessReuse = true;
};

/* Call main server code ------------------------------- */
main();

/* In this file, you can include the rest of
 * your app's specific code to the main process.
 * You can also put it in other files
 * and just include it here */
// eslint-disable-next-line import/first
import './ipc/IPCMain';
