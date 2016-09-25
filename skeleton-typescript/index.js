//Note: This file is provided as an aid to help you get up and running with
//Electron for desktop apps. See the readme file for more information.
/* eslint-disable strict, no-var, no-console */

'use strict';

const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
let mainWindow;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // Note: The following line turns off Node integration to allow 
    // jQuery to work properly. If you need Node integration, please
    // see the Electron FAQ for how to enable this:
    // http://electron.atom.io/docs/faq/
    webPreferences: {
      nodeIntegration: false
    }
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.setTitle(app.getName());
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
