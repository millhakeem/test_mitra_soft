import * as PostActionCreators from './post';
import * as CommentActionCreators from './comment';

export default {
	...PostActionCreators,
	...CommentActionCreators,
};
