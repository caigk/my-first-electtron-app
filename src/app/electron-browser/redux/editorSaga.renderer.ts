
import { put, takeLatest, select } from 'redux-saga/effects'

import {
	EFFECT_OPEN_DOC,
	ACTION_OPEN_DOC_SUCCESS,
	EFFECT_SAVE_DOC,
	ACTION_SAVE_DOC_SUCCESS,
	EFFECT_GENERATE_DOC,
	ACTION_ALERT,
	ACTION_CLOSE,
	IActionSaga
} from "@/typings/action.d"

import { AlertType } from "@/typings/store.d";
import { getSource } from './selectors';

import { ipcRenderer } from 'electron';

const ActionSaga: IActionSaga = {
	*openDoc() {
		try {
			const result = yield ipcRenderer.invoke(EFFECT_OPEN_DOC);
			if (!result) return;
			yield put({
				type: ACTION_OPEN_DOC_SUCCESS,
				payload: {
					success: true,
					data: result
				}
			});

		} catch (error) {
			console.error(error);
		}
	},
	*saveDoc() {
		try {
			const { fileName, path, content } = yield select(getSource);
			const result = ipcRenderer.invoke(EFFECT_SAVE_DOC, path, content)
			if (!result) return;
			yield put({
				type: ACTION_SAVE_DOC_SUCCESS,
				payload: {
					success: true,
					data: result
				}
			});

		} catch (error) {
			console.error(error);
			const action: { type: string, payload: AlertType[] } = {
				type: ACTION_ALERT,
				payload: [{
					message: error.message
				}]
			};
			yield put(action);
		}
	},
	*generateDoc() {

	},
	*close() {
		ipcRenderer.send(ACTION_CLOSE);
	},
	*registerWatch(sagaMw) {

		console.info('registerWatch start ...');

		//yield addLisener(sagaMw);

		yield takeLatest(EFFECT_OPEN_DOC, ActionSaga.openDoc);
		yield takeLatest(EFFECT_SAVE_DOC, ActionSaga.saveDoc);
		yield takeLatest(EFFECT_GENERATE_DOC, ActionSaga.generateDoc);
		yield takeLatest(ACTION_CLOSE, ActionSaga.close);

		console.info('registerWatch end ===');
	}
}

export default ActionSaga;