const { app, BrowserWindow, dialog,ipcMain } = require('electron');

let mainWindow = null;
app.on('ready', () => {
	console.log(__dirname);

	// 不推荐
	mainWindow = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true,
			nodeIntegrationInWorker: true,
			webSecurity: false,
			enableRemoteModule: true
		},
		show: false
	})

	mainWindow.loadFile('app/pre/index.html');

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



function openUserFile() {
	dialog.showOpenDialog(mainWindow,{
		properties: ['openFile']
	}).then(result => {
		console.log(result.canceled)
		console.log(result.filePaths)

		mainWindow.webContents.send('file-opened','********');
	}).catch(err => {
		console.log(err)
	});
}

module.exports = { openUserFile };