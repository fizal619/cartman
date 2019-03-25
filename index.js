const { app, BrowserWindow } = require('electron')
require('electron-reload')(__dirname);


function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({ width: 1280, height: 800 });

  win.webContents.openDevTools();
  win.setMenu(null);
  // and load the index.html of the app.
  win.loadFile('dist/index.html');
}

app.on('window-all-closed', app.quit);
app.on('before-quit', () => {
    mainWindow.removeAllListeners('close');
    mainWindow.close();
});

app.disableHardwareAcceleration();
app.on('ready', createWindow);