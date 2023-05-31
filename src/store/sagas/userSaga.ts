import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { fetchUserById } from '../../api';
import { FetchUserRequestAction, IUser, UserActionTypes } from '../../types/user';

function* fetchUserWorker(action: FetchUserRequestAction) {
	try {
		const user: IUser = yield call(fetchUserById, action.payload.userId);
		yield delay(500);
		yield put({
			type: UserActionTypes.FETCH_USER_SUCCESS,
			payload: user,
		});
	} catch (error) {
		yield put({
			type: UserActionTypes.FETCH_USER_ERROR,
			payload: 'Произошла ошибка при загрузке пользователя',
		});
	}
}

export function* fetchUserWatcher() {
	yield takeLatest(UserActionTypes.FETCH_USER_REQUEST, fetchUserWorker);
}
