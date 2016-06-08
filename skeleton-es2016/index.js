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
    height: 600
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.setTitle(app.getName());
  });
  
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
