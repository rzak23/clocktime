const { app, BrowserWindow } = require('electron');
require('update-electron-app')({
  updateInterval: '1 hour'
})

function createWindow () {
  const win = new BrowserWindow({
    width: 1080,
    height: 400,
    icon: __dirname + '/build/icon.png',
  })

  win.loadFile('index.html');
  win.removeMenu();
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})