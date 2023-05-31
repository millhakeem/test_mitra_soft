import { IPostState, PostActions, PostActionTypes } from '../../types/post';

const initialState: IPostState = {
	posts: [],
	loading: false,
	error: null,
};

export const postReducer = (state = initialState, action: PostActions): IPostState => {
	switch (action.type) {
		case PostActionTypes.FETCH_POSTS_REQUEST:
			return {
				...state,
				loading: true,
			};

		case PostActionTypes.FETCH_POSTS_SUCCESS:
			return {
				...state,
				loading: false,
				posts: action.payload,
			};

		case PostActionTypes.FETCH_POSTS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
