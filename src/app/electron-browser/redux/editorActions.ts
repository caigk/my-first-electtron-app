
import {NEW_DOC,OPEN_DOC,OPEN_DOC_SUCCESS,SAVE_DOC,GENERATE_DOC} from "@/typings/action.d"

/**
   * 新建
   */

export function newDoc() {
	return {
		type: NEW_DOC
	};
}

export function openDoc() {
	return {
		type: OPEN_DOC
	};
}


export function saveDoc() {
	return {
		type: SAVE_DOC
	};
}

export function generateDoc() {
	return {
		type: GENERATE_DOC
	};
}

const Actions = {
	newDoc,
	openDoc,
	saveDoc,
	generateDoc,
};
export default Actions;