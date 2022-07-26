const { app, BrowserWindow, Tray, Menu } = require('electron');
require('@electron/remote/main').initialize();

const path = require('path');
const isDev = require('electron-is-dev');

const iconPath = path.join(__dirname, 'favicon.ico');
const TrayMenu = Menu;
let tray = null;
let mainWindow = null;
let isQuiting;

function createTray() {
  tray = new Tray(iconPath);

  let template = [
    {
      label: 'Settings',
      click: function () {
        mainWindow.show();
      },
    },
    {
      label: 'Quit',
      click: function () {
        isQuiting = true;
        app.quit();
      },
    },
  ];
  tray.setToolTip('JustA');
  const ctxMenu = TrayMenu.buildFromTemplate(template);
  tray.setContextMenu(ctxMenu);
}

function mainFunction() {
  createTray();
  createWindow();
  mainWindow.on('close', function (event) {
    if (!isQuiting) {
      event.preventDefault();
      mainWindow.hide();
      event.returnValue = false;
    }
  });
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 600,
    minWidth: 800,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
}

app.on('ready', mainFunction);

app.on('before-quit', function () {
  isQuiting = true;
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
  // if (BrowserWindow.getAllWindows().length === 0) {
  //   createWindow();
  // }
});
