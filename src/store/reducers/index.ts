import { combineReducers } from 'redux';
import { postReducer } from './postReducer';

export const rootReducer = combineReducers({
	postState: postReducer,
});
