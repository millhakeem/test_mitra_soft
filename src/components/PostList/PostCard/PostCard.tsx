import { Suspense, lazy, memo, useState } from 'react';
import {
	Accordion,
	Button,
	Card,
	Col,
	Nav,
	Row,
	Spinner,
	useAccordionButton,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IPost } from '../../../types/post';
import { Avatar, AvatarSize } from '../../Avatar/Avatar';

interface PostCardProps {
	post: IPost;
}

const LazyCommentList = lazy(() => import('../../CommentList/CommentList'));

export const PostCard = memo(({ post }: PostCardProps): JSX.Element => {
	const { title, body, userId, id } = post;
	const [showComments, setShowComments] = useState(false);

	const toggleComments = useAccordionButton('0', () => setShowComments(!showComments));

	return (
		<Card className='text-white bg-dark border-secondary mb-3'>
			<Card.Header className='border-bottom border-secondary py-3'>
				<Row className='align-items-center gap-sm-2 gap-md-0'>
					<Col
						sm='12'
						md='2'
					>
						<Nav.Link
							as={Link}
							to={'/profile/' + userId}
							className='d-flex justify-content-center align-items-center'
						>
							<Avatar size={AvatarSize.SMALL} />
						</Nav.Link>
					</Col>
					<Col
						sm='12'
						md='10'
					>
						<h5 className='mb-0 text-sm-center text-md-start text-truncate p-2'>
							{title}
						</h5>
					</Col>
				</Row>
			</Card.Header>
			<Card.Body>
				<Row>
					<Col sm={{ span: 10, offset: 1 }}>{body}</Col>
				</Row>
			</Card.Body>

			<Accordion defaultActiveKey='0'>
				<Card className='bg-dark border-dark mb-3'>
					<Card.Header className='d-flex justify-content-end border-0'>
						<Button
							variant='light'
							onClick={toggleComments}
							className='ml-auto mr-0'
						>
							{showComments ? 'Скрыть' : 'Показать'} комментарии
						</Button>
					</Card.Header>
					<Accordion.Collapse eventKey='0'>
						<Card.Body className={showComments ? 'd-flex flex-column gap-3' : 'd-none'}>
							{showComments && (
								<Suspense fallback={<Spinner className='mx-auto text-center' />}>
									<LazyCommentList postId={id} />
								</Suspense>
							)}
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</Card>
	);
});
