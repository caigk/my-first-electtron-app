
import {
	ACTION_NEW_DOC,
	ACTION_OPEN_DOC, 
	ACTION_SAVE_DOC, 
	ACTION_GENERATE_DOC,
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
		type: ACTION_OPEN_DOC
	};
}


export function saveDoc() {
	return {
		type: ACTION_SAVE_DOC
	};
}

export function generateDoc() {
	return {
		type: ACTION_GENERATE_DOC
	};
}


export function close() {
	return {
		type: ACTION_CLOSE
	};
}

const Actions = {
	newDoc,
	openDoc,
	saveDoc,
	generateDoc,
	close
};
export default Actions;