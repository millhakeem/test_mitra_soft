import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PostList } from '../components/PostList/PostList';
import { useActions } from '../hooks/useActions';
import { getAllPosts, getPostError, getPostLoading } from '../store/selectors';

export default function HomePage() {
	const fetchAllPosts = useActions();
	const posts = useSelector(getAllPosts);
	const loading = useSelector(getPostLoading);
	const error = useSelector(getPostError);

	useEffect(() => {
		fetchAllPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<PostList
			posts={posts}
			loading={loading}
			error={error}
			title='Страница постов'
		/>
	);
}
