import { PostActionTypes } from '../../types/post';

export const fetchAllPosts = () => ({
	type: PostActionTypes.FETCH_POSTS_REQUEST,
});
