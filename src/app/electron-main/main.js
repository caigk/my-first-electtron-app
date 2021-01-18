const { app, BrowserWindow, dialog, ipcMain } = require('electron');
const { readFile } = require('fs').promises;
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
			enableRemoteModule: false,
			contextIsolation: false,
			//preload:'',
		},
		show: false
	})

	//mainWindow.webContents.openDevTools({mode:'right'});
	mainWindow.loadFile(__dirname + '/index.html');

	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
	});

	mainWindow.on('closed', () => {
		mainWindow = null;
	});

	ipcMain.on('ACTION_CLOSE', () => {
		mainWindow.close();
	});

	//注意handle的用法，ipcRenderer.invoke()
	ipcMain.handle('ACTION_OPEN_DOC', async () => {
		console.info('ipcMain ACTION_OPEN_DOC');
		try {
			const result = await dialog.showOpenDialog(mainWindow, {
				buttonLabel: "打开",
				filters: [
					{ name: 'Tex', extensions: ['tex', 'latex', 'txt', 'md'] }
				],
				properties: ['openFile']
			});

			// console.log(result.canceled);
			// console.log(result.filePaths);

			if (result.canceled) return false;

			const buffer = await readFile(result.filePaths[0]);
			const content = buffer.toString();
			//console.log(content);
			return {
				fileName: path.basename(result.filePaths[0]),
				path: result.filePaths[0],
				content: content
			};
		}
		catch (err) {
			console.log(err)
		};
	});
});

