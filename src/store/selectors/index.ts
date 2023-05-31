import { createSelector } from 'reselect';
import { RootState } from '..';

// Post selectors
export const getAllPosts = (state: RootState) => state.postState.posts || [];
export const getPostLoading = (state: RootState) => state.postState.loading || false;
export const getPostError = (state: RootState) => state.postState.error || null;
export const getPostsByUserId = (id: string) =>
	createSelector([getAllPosts, getUserById(id)], (posts, user) => {
		if (!user) {
			return posts;
		}

		return posts.filter((post) => post.userId === user.id);
	});

// Comment selectors
export const getAllComments = (state: RootState) => state.commentState.comments || {};
export const getCommentLoading = (state: RootState) => state.commentState.loading || false;
export const getCommentError = (state: RootState) => state.commentState.error || null;

export const getCommentsByPostId = (id: string) =>
	createSelector(getAllComments, (comments) => comments[id] || []);

// User selectors
export const getAllUsers = (state: RootState) => state.userState.users || {};
export const getUserLoading = (state: RootState) => state.userState.loading || false;
export const getUserError = (state: RootState) => state.userState.error || null;

export const getUserById = (id: string) =>
	createSelector(getAllUsers, (users) => users[id] || null);
