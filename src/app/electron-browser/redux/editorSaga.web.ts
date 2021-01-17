
import { call, put, takeLatest } from 'redux-saga/effects'

import { OPEN_DOC, OPEN_DOC_SUCCESS, SAVE_DOC, SAVE_DOC_SUCCESS, GENERATE_DOC, ALERT, IActionSaga } from "@/typings/action.d"
import { AlertType } from "@/typings/store.d";

const ActionSaga: IActionSaga = {
	*openDoc() {
		try {
			const resp = yield call(
				fetch,
				'/open',
				{
					method: "GET",
					mode: 'cors',
					headers: { 'Accept': 'application/json' },
				});

			const data = yield call(resp.json.bind(resp));
			console.log(data);

			yield put({
				type: OPEN_DOC_SUCCESS,
				payload: {
					success: true,
					data: data
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
					type: SAVE_DOC_SUCCESS,
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
				type: ALERT,
				payload: [{
					message: error.message
				}]
			};
			yield put(action);
		}
	},
	*generateDoc() {

	},
	*registerWatch() {
		console.info('registerWatch start ...');

		yield takeLatest(OPEN_DOC, ActionSaga.openDoc);
		yield takeLatest(SAVE_DOC, ActionSaga.saveDoc);
		yield takeLatest(GENERATE_DOC, ActionSaga.generateDoc);

		console.info('registerWatch end ===');
	}
}

export default ActionSaga;