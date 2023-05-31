import { CommentActionTypes, CommentsActions, ICommentState } from '../../types/comment';

const initialState: ICommentState = {
	comments: {},
	loading: false,
	error: null,
};

export const commentReducer = (state = initialState, action: CommentsActions): ICommentState => {
	switch (action.type) {
		case CommentActionTypes.FETCH_COMMENTS_REQUEST: {
			return {
				...state,
				loading: true,
			};
		}

		case CommentActionTypes.FETCH_COMMENTS_SUCCESS:
			return {
				...state,
				loading: false,
				comments: {
					...state.comments,
					[action.payload[0].postId]: action.payload,
				},
			};

		case CommentActionTypes.FETCH_COMMENTS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
