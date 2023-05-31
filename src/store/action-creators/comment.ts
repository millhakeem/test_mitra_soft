import { CommentActionTypes } from '../../types/comment';

export const fetchCommentsByPostId = (postId: string) => ({
	type: CommentActionTypes.FETCH_COMMENTS_REQUEST,
	payload: { postId },
});
