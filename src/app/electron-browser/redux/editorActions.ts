
import {
	ACTION_NEW_DOC,
	EFFECT_OPEN_DOC, 
	ACTION_EDITED_DOC,
	EFFECT_SAVE_DOC, 
	EFFECT_GENERATE_DOC,
	ACTION_CLOSE
} from "@/typings/action.d"



/**
   * 新建
   */

export function newDoc() {
	return {
		type: ACTION_NEW_DOC
	};
}

export function openDoc() {
	return {
		type: EFFECT_OPEN_DOC
	};
}

export function handleDocChanged(newContent:string) {
	return {
		type: ACTION_EDITED_DOC,
		payload:{
			newContent
		}
	};
}

export function saveDoc() {
	return {
		type: EFFECT_SAVE_DOC
	};
}

export function generateDoc() {
	return {
		type: EFFECT_GENERATE_DOC
	};
}


export function close() {
	return {
		type: ACTION_CLOSE
	};
}


/**
   * 重置状态
   */

  export function reset() {
	return {
		type: 'RESET'
	};
}

const Actions = {
	newDoc,
	openDoc,
	handleDocChanged,
	saveDoc,
	generateDoc,
	close,
	reset
};
export default Actions;