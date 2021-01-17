
export const NEW_DOC = 'NEW_DOC';
export const OPEN_DOC = 'OPEN_DOC';
export const OPEN_DOC_SUCCESS = 'OPEN_DOC_SUCCESS';
export const SAVE_DOC = 'SAVE_DOC';
export const SAVE_DOC_SUCCESS = 'SAVE_DOC_SUCCESS';
export const GENERATE_DOC = 'GENERATE_DOC';
export const ALERT = 'ALERT';

export interface IActionSaga{
	openDoc():void;
	saveDoc():void;
	generateDoc():void;
	registerWatch():void;
}