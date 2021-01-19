import { BrowserWindow, dialog, ipcMain } from "electron";
const { readFile, writeFile } = require('fs').promises;
const path = require('path');


import {
	ACTION_OPEN_DOC,
	ACTION_SAVE_DOC,
	ACTION_GENERATE_DOC,
} from "@/typings/action.d";

export default function registerHandles(mainWindow: BrowserWindow) {
	//使用：ipcRenderer.invoke(ACTION_OPEN_DOC)
	ipcMain.handle(ACTION_OPEN_DOC, async () => {
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


	//使用：ipcRenderer.invoke(ACTION_SAVE_DOC,pathInfo,content)
	ipcMain.handle(ACTION_SAVE_DOC, async (ev, pathInfo, content) => {
		console.info('ipcMain ACTION_SAVE_DOC');
		try {
			// const result = await dialog.showOpenDialog(mainWindow, {
			// 	buttonLabel: "打开",
			// 	filters: [
			// 		{ name: 'Tex', extensions: ['tex', 'latex', 'txt', 'md'] }
			// 	],
			// 	properties: ['openFile']
			// });

			// console.log(result.canceled);
			// console.log(result.filePaths);

			// if (result.canceled) return false;

			await writeFile(pathInfo, content, 'utf8');
		}
		catch (err) {
			console.log(err)
		};
	});
}