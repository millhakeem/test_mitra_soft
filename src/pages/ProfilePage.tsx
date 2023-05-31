import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { PostList } from '../components/PostList/PostList';
import { ProfileCard } from '../components/ProfileCard/ProfileCard';

const ProfilePage = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/');
	};

	if (!id) {
		return null;
	}

	return (
		<Row>
			<Col>
				<Button
					variant='outline-dark'
					className='w-auto mb-5'
					onClick={handleNavigate}
				>
					Назад
				</Button>

				<ProfileCard userId={id} />

				<PostList
					userId={id}
					title='Посты пользователя:'
				/>
			</Col>
		</Row>
	);
};

export default ProfilePage;
