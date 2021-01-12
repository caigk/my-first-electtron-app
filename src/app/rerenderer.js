const $ = require("jquery");
const { remote, ipcRenderer } = require("electron");
console.log(remote);

const { openUserFile } = remote.require(__dirname + "/mainlib.js")

function open(ev) {
	openUserFile(remote.getCurrentWindow());
}

$(function () {
	$("#btnOpen").on('click', open);
	$("#btnClose").on('click', () => {
		ipcRenderer.send('close');
	});

	ipcRenderer.on('file-opened', (ev, file, content) => {
		$("#txtSource").text(content);
	});
});