import { Card } from 'react-bootstrap';
import { IComment } from '../../../types/comment';
import { memo } from 'react';

export interface CommentProps {
	comment: IComment;
}

export const Comment = memo(({ comment }: CommentProps): JSX.Element => {
	const { email, body } = comment;

	return (
		<Card border='0'>
			<Card.Header className='bg-secondary text-center'>{email}</Card.Header>
			<Card.Body className='text-dark'>{body}</Card.Body>
		</Card>
	);
});
