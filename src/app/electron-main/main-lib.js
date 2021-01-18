
//暂时不用了
const { app, BrowserWindow, dialog, ipcMain } = require('electron');
const { readFile } = require('fs');


function openUserFile(parentWindow) {

	dialog.showOpenDialog(parentWindow, {
		buttonLabel: "打开",
		filters: [
			{ name: 'Text', extensions: ['txt'] },
			{ name: 'Tex', extensions: ['tex', 'latex'] }
		],
		properties: ['openFile']
	}).then(result => {
		console.log(result.canceled)
		console.log(result.filePaths)

		if (result.canceled) return;

		readFile(result.filePaths[0], (err, buffer) => {
			if (err) {
				console.log(err);
				return;
			}

			const content = buffer.toString();
			console.log(content);
			parentWindow.webContents.send('file-opened', result.filePaths[0],content);
		});


	}).catch(err => {
		console.log(err)
	});
}

module.exports = { openUserFile };