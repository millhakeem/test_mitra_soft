export interface IPost {
	userId: string;
	id: string;
	title: string;
	body: string;
}

export enum PostActionTypes {
	FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST',
	FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
	FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
}

export interface IPostState {
	posts: IPost[];
	loading: boolean;
	error: string | null;
}

interface FetchPostsRequestAction {
	type: PostActionTypes.FETCH_POSTS_REQUEST;
}

interface FetchPostsSuccessAction {
	type: PostActionTypes.FETCH_POSTS_SUCCESS;
	payload: IPost[];
}

interface FetchPostsErrorAction {
	type: PostActionTypes.FETCH_POSTS_ERROR;
	payload: string;
}

export type PostActions = FetchPostsRequestAction | FetchPostsSuccessAction | FetchPostsErrorAction;
