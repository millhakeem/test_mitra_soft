import * as PostActionCreators from './post';
import * as CommentActionCreators from './comment';
import * as UserActionCreators from './user';

export default {
	...PostActionCreators,
	...CommentActionCreators,
	...UserActionCreators,
};
