
import { call, put, takeLatest } from 'redux-saga/effects'

import {
	ACTION_OPEN_DOC,
	ACTION_OPEN_DOC_SUCCESS,
	ACTION_SAVE_DOC,
	ACTION_SAVE_DOC_SUCCESS,
	ACTION_GENERATE_DOC,
	ACTION_ALERT,
	ACTION_CLOSE,
	IActionSaga
} from "@/typings/action.d"
import { AlertType } from "@/typings/store.d";


import { ipcRenderer } from 'electron';

const ActionSaga: IActionSaga = {
	*openDoc() {
		try {
			const result = yield ipcRenderer.invoke(ACTION_OPEN_DOC);
			if(!result) return;
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
			const resp = yield call(
				fetch,
				'/save',
				{
					method: "POST",
					mode: 'cors',
					headers: { 'Accept': 'application/json' },
				});

			if (resp.status >= 200 && resp.status <= 299) {
				const data = yield call(resp.json.bind(resp));
				console.log(data);

				yield put({
					type: ACTION_SAVE_DOC_SUCCESS,
					payload: {
						success: true,
						data: data
					}
				});
			}
			else {
				throw new Error('http response status:' + resp.status)
			}

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
	*close(){
		ipcRenderer.send(ACTION_CLOSE);
	},
	*registerWatch(sagaMw) {

		console.info('registerWatch start ...');

		//yield addLisener(sagaMw);

		yield takeLatest(ACTION_OPEN_DOC, ActionSaga.openDoc);
		yield takeLatest(ACTION_SAVE_DOC, ActionSaga.saveDoc);
		yield takeLatest(ACTION_GENERATE_DOC, ActionSaga.generateDoc);
		yield takeLatest(ACTION_CLOSE, ActionSaga.close);

		console.info('registerWatch end ===');
	}
}

export default ActionSaga;