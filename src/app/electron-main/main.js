const { app, BrowserWindow, dialog,ipcMain } = require('electron');
const { readFile } = require('fs');
const path = require('path');

let mainWindow = null;
app.on('ready', () => {
	console.log(__dirname);

	// 不推荐
	mainWindow = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true,	//注意与webpack配置文件中的外部对象有关
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

	ipcMain.on('ACTION_CLOSE',()=>{
		mainWindow.close();
	});

	ipcMain.on('ACTION_OPEN_DOC',()=>{
		console.info('ipcMain ACTION_OPEN_DOC');
		dialog.showOpenDialog(mainWindow, {
			buttonLabel: "打开",
			filters: [
				{ name: 'Tex', extensions: ['tex', 'latex','txt','md'] }
			],
			properties: ['openFile']
		}).then(result => {
			// console.log(result.canceled);
			// console.log(result.filePaths);
	
			if (result.canceled) return;
	
			readFile(result.filePaths[0], (err, buffer) => {
				if (err) {
					console.log(err);
					return;
				}
	
				const content = buffer.toString();
				//console.log(content);
				mainWindow.webContents.send('ACTION_OPEN_DOC_FINISHED', {
					fileName: path.basename(result.filePaths[0]),
					path: result.filePaths[0],
					content:content
				})
			});
		}).catch(err => {
			console.log(err)
		});
	});
});

