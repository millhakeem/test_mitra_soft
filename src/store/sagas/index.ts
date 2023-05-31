import { all } from 'redux-saga/effects';
import { fetchCommentsWatcher } from './commentSaga';
import { fetchPostsWatcher } from './postSaga';

export function* rootSaga() {
	yield all([fetchPostsWatcher(), fetchCommentsWatcher()]);
}
