import { combineReducers } from 'redux';
import { commentReducer } from './commentReducer';
import { postReducer } from './postReducer';

export const rootReducer = combineReducers({
	postState: postReducer,
	commentState: commentReducer,
});
