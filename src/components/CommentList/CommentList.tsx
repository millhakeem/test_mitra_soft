import { memo, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { getCommentError, getCommentLoading, getCommentsByPostId } from '../../store/selectors';
import { Comment } from './CommentCard/CommentCard';

interface CommentListProps {
	postId: string;
}

const CommentList = ({ postId }: CommentListProps) => {
	const { fetchCommentsByPostId } = useActions();
	const comments = useSelector(getCommentsByPostId(postId));
	const loading = useSelector(getCommentLoading);
	const error = useSelector(getCommentError);

	useEffect(() => {
		fetchCommentsByPostId(postId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) {
		return (
			<Spinner
				animation='border'
				className='mx-auto text-light'
			/>
		);
	}

	if (error) {
		return <h3 className='mb-0 text-center fw-bolder text-secondary'>{error}</h3>;
	}
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
