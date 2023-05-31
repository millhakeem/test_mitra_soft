import { all } from 'redux-saga/effects';
import { fetchCommentsWatcher } from './commentSaga';
import { fetchPostsWatcher } from './postSaga';
import { fetchUserWatcher } from './userSaga';

export function* rootSaga() {
	yield all([fetchPostsWatcher(), fetchCommentsWatcher(), fetchUserWatcher()]);
}
