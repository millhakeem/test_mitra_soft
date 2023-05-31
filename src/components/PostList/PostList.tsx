import { memo } from 'react';
import { IPost } from '../../types/post';
import { Col, Row, Spinner } from 'react-bootstrap';

interface PostListProps {
	title?: string;
	posts: IPost[];
	loading?: boolean;
	error?: string | null;
}

export const PostList = memo((props: PostListProps) => {
	const { title, posts, loading, error } = props;

	if (loading) {
		return (
			<Row className='text-center mb-5'>
				<h2 className='mb-5 text-center fw-bolder text-body'>Еще секундочку, пожалуйста</h2>
				<Spinner
					animation='border'
					variant='dark'
					className='mx-auto'
				/>
			</Row>
		);
	}

	if (error) {
		return <h1 className='mb-5 text-center fw-bolder text-body'>{error}</h1>;
	}

	return (
		<>
			{title && <h1 className='mb-5 text-center fw-bolder text-body'>{title}</h1>}
			<Col
				lg={{ span: 8, offset: 2 }}
				sm='12'
			>
				{!posts.length && (
					<h5 className='mb-2 text-center text-light'>{'Постов еще нет 8('}</h5>
				)}
				{posts.map((post) => (
					<div key={post.id}>{post.title}</div>
				))}
			</Col>
		</>
	);
});
