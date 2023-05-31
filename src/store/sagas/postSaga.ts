import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { IPost, PostActionTypes } from '../../types/post';
import { fetchPosts } from '../../api';

function* fetchPostsWorker() {
	try {
		const posts: IPost[] = yield call(fetchPosts);
		yield delay(500);
		yield put({
			type: PostActionTypes.FETCH_POSTS_SUCCESS,
			payload: posts,
		});
	} catch (error) {
		yield put({
			type: PostActionTypes.FETCH_POSTS_ERROR,
			payload: 'Произошла ошибка при загрузке постов',
		});
	}
}

export function* fetchPostsWatcher() {
	yield takeLatest(PostActionTypes.FETCH_POSTS_REQUEST, fetchPostsWorker);
}
