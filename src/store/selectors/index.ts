import { RootState } from '..';

// Post selectors
export const getAllPosts = (state: RootState) => state.postState.posts || [];
export const getPostLoading = (state: RootState) => state.postState.loading || false;
export const getPostError = (state: RootState) => state.postState.error || null;
