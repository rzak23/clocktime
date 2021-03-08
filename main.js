const { app, BrowserWindow } = require('electron')
require('update-electron-app')({
  updateInterval: '1 hour'
})

function createWindow () {
  const win = new BrowserWindow({
    width: 1080,
    height: 400,
    icon: __dirname + '/build/icon.png',
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
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
