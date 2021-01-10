const $ = require("jquery");
const { remote, ipcRenderer } = require("electron");
console.log(remote);
const { openUserFile } = remote.require("./main.js")

function open(ev) {
	openUserFile();
}

$(function () {
	// $("#btnClose").on('click', (ev) => {
	// 	alert('tt');
	// });

	$("#btnOpen").on('click', open);
	$("#btnClose").on('click', ()=>{
		ipcRenderer.send('close');
	});

	ipcRenderer.on('file-opened',(ev,content)=>{
		alert(content);
	});
});