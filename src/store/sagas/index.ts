import { all } from 'redux-saga/effects';
import { fetchPostsWatcher } from './postSaga';

export function* rootSaga() {
	yield all([fetchPostsWatcher()]);
}
