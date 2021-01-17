import { select, take,takeEvery, takeLatest } from 'redux-saga/effects'

export function* helloSaga() {
	console.log('Hello Sagas!');
}


export function* openDoc() {
	console.log('Hello Sagas!');
}



export function* watch() {

	while (true) {
		const action = yield take('*')
		const state = yield select()

		console.log('action', action)
		console.log('state after', state)
	}
}

