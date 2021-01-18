export const NEW_DOC = 'NEW_DOC';
export const ACTION_OPEN_DOC = 'ACTION_OPEN_DOC';
export const ACTION_OPEN_DOC_FINISHED = 'ACTION_OPEN_DOC_FINISHED'; //SAGA
export const ACTION_OPEN_DOC_SUCCESS = 'ACTION_OPEN_DOC_SUCCESS';
export const ACTION_SAVE_DOC = 'ACTION_SAVE_DOC';
export const ACTION_SAVE_DOC_SUCCESS = 'ACTION_SAVE_DOC_SUCCESS';
export const ACTION_GENERATE_DOC = 'ACTION_GENERATE_DOC';
export const ACTION_ALERT = 'ACTION_ALERT';
export const ACTION_CLOSE = 'ACTION_CLOSE';

export interface IActionSaga{
	openDoc():void;
	saveDoc():void;
	generateDoc():void;
	close():void;
	registerWatch(saga:SagaMiddleware):void;
}