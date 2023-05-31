import { PostActionTypes } from '../../types/post';

const fetchAllPosts = () => ({
	type: PostActionTypes.FETCH_POSTS_REQUEST,
});

export default fetchAllPosts;
