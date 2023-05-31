import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { fetchCommentsByPostId } from '../../api';
import { CommentActionTypes, FetchCommentsRequestAction, IComment } from '../../types/comment';

function* fetchCommentsWorker(action: FetchCommentsRequestAction) {
	try {
		const comments: IComment[] = yield call(fetchCommentsByPostId, action.payload.postId);
		yield delay(500);
		yield put({
			type: CommentActionTypes.FETCH_COMMENTS_SUCCESS,
			payload: comments,
		});
	} catch (error) {
		yield put({
			type: CommentActionTypes.FETCH_COMMENTS_ERROR,
			payload: 'Произошла ошибка при загрузке комментариев',
		});
	}
}

export function* fetchCommentsWatcher() {
	yield takeLatest(CommentActionTypes.FETCH_COMMENTS_REQUEST, fetchCommentsWorker);
}
