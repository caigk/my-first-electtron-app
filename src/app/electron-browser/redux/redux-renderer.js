const { ipcRenderer } = require('electron');

const Renderer = store => next => action => {
	console.log('dispatching', action)
	ipcRenderer.send('')
	let result = next(action)
	console.log('next state', store.getState())
	return result
  }

export default Renderer;