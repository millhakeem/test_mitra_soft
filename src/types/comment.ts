export interface IComment {
	postId: string;
	id: string;
	name: string;
	email: string;
	body: string;
}

export enum CommentActionTypes {
	FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST',
	FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS',
	FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR',
}

export interface ICommentState {
	comments: Record<string, IComment[]>;
	loading: boolean;
	error: string | null;
}

export interface FetchCommentsRequestAction {
	type: CommentActionTypes.FETCH_COMMENTS_REQUEST;
	payload: { postId: string };
}

interface FetchCommentsSuccessAction {
	type: CommentActionTypes.FETCH_COMMENTS_SUCCESS;
	payload: IComment[];
}

interface FetchCommentsErrorAction {
	type: CommentActionTypes.FETCH_COMMENTS_ERROR;
	payload: string;
}

export type CommentsActions =
	| FetchCommentsRequestAction
	| FetchCommentsSuccessAction
	| FetchCommentsErrorAction;
