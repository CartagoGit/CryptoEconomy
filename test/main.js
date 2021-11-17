const electron  = require('electron');
const {app, BrowserWindow} = electron;

const path = require ('path');
const url = require('url');
let isDev = false;
isDev = require('electron-is-dev');

let win;

function createWindow(){
    
    win = new BrowserWindow({show: false});
    win.maximize();
    win.setAutoHideMenuBar(true);
    win.show();
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
    if (isDev) {
        // Open the DevTools.
        //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
        win.webContents.openDevTools(); 
    }
    
}

app.on('ready',createWindow);