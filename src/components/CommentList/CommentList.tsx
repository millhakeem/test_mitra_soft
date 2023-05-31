import { memo } from 'react';
import { Comment } from './CommentCard/CommentCard';
import { IComment } from '../../types/comment';

interface CommentListProps {
	postId: string;
}

const comments: IComment[] = [
	{
		id: '1',
		body: 'Lorem ipsum',
		postId: '1',
		email: 'Lorem ipsum',
		name: 'Lorem ipsum',
	},
];

const CommentList = ({ postId }: CommentListProps) => {
	return (
		<>
			{comments.length === 0 && (
				<h5 className='mb-2 text-center text-light'>{'Комментариев еще нет 8('}</h5>
			)}
			{comments.map((comment) => (
				<Comment
					key={comment.id}
					comment={comment}
				/>
			))}
		</>
	);
};

export default memo(CommentList);
