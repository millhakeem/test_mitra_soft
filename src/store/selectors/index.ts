import { createSelector } from 'reselect';
import { RootState } from '..';

// Post selectors
export const getAllPosts = (state: RootState) => state.postState.posts || [];
export const getPostLoading = (state: RootState) => state.postState.loading || false;
export const getPostError = (state: RootState) => state.postState.error || null;

// Comment selectors
export const getAllComments = (state: RootState) => state.commentState.comments || {};
export const getCommentLoading = (state: RootState) => state.commentState.loading || false;
export const getCommentError = (state: RootState) => state.commentState.error || null;

export const getCommentsByPostId = (id: string) =>
	createSelector(getAllComments, (comments) => comments[id] || []);
