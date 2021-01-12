const { app, BrowserWindow, dialog,ipcMain } = require('electron');

let mainWindow = null;
app.on('ready', () => {
	console.log(__dirname);

	// 不推荐
	mainWindow = new BrowserWindow({
		webPreferences: {
			//nodeIntegration: true,
			//nodeIntegrationInWorker: true,
			//webSecurity: false,
			enableRemoteModule: true
		},
		show: false
	})

	//mainWindow.webContents.openDevTools({mode:'right'});
	mainWindow.loadFile(__dirname+'/index.html');

	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
	});

	mainWindow.on('closed', () => {
		mainWindow = null;
	});

	ipcMain.on('close',()=>{
		mainWindow.close();
	});
});

