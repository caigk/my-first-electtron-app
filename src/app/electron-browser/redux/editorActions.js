/**
   * 新建
   */
export const NEW_DOC = 'NEW_DOC'
export function newDoc() {
	return {
		type: NEW_DOC
	};
}

export const OPEN_DOC = 'OPEN_DOC';
export function openDoc() {
	return {
		type: OPEN_DOC
	};
}


export const SAVE_DOC = 'SAVE_DOC';
export function saveDoc() {
	return {
		type: SAVE_DOC
	};
}

export const GENERATE_DOC = 'GENERATE_DOC';
export function generateDoc() {
	return {
		type: GENERATE_DOC
	};
}

const Actions = {
	newDoc,
	openDoc,
	generateDoc,
};
export default Actions;