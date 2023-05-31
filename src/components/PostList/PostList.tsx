import { memo, useEffect } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { getPostError, getPostLoading, getPostsByUserId } from '../../store/selectors';
import { PostCard } from './PostCard/PostCard';

interface PostListProps {
	title?: string;
	userId?: string;
}

export const PostList = memo((props: PostListProps): JSX.Element => {
	const { userId = '', title } = props;

	const { fetchAllPosts } = useActions();
	const posts = useSelector(getPostsByUserId(userId));
	const loading = useSelector(getPostLoading);
	const error = useSelector(getPostError);

	useEffect(() => {
		fetchAllPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading && userId === '') {
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

	if (loading) {
		return <></>;
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
					<PostCard
						key={post.id}
						post={post}
					/>
				))}
			</Col>
		</>
	);
});
