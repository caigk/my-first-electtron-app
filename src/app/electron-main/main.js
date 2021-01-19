import { app, BrowserWindow, dialog, ipcMain } from 'electron';
import registerHandles from './main-handles';

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

	registerHandles(mainWindow);
});

