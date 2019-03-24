const { app, BrowserWindow } = require('electron')
require('electron-reload')(__dirname);


function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({ width: 1280, height: 800 });

  if (process.env.NODE_ENV !== 'production') {
    win.webContents.openDevTools();
  }

  win.setMenu(null);
  // and load the index.html of the app.
  win.loadFile('dist/index.html');
}

app.disableHardwareAcceleration();
app.on('ready', createWindow);