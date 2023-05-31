import { memo, useEffect } from 'react';
import { Card, Row, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { getUserById, getUserError, getUserLoading } from '../../store/selectors/';

interface ProfileCardProps {
	userId: string;
}

export const ProfileCard = memo(({ userId }: ProfileCardProps) => {
	const user = useSelector(getUserById(userId));
	const loading = useSelector(getUserLoading);
	const error = useSelector(getUserError);
	const { fetchUserById } = useActions();

	useEffect(() => {
		fetchUserById(userId);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) {
		return (
			<Row className='text-center mb-5'>
				<h1 className='mb-5 text-center fw-bolder text-body'>Еще секундочку, пожалуйста</h1>
				<Spinner
					animation='border'
					variant='dark'
					className='mx-auto text-center'
				/>
			</Row>
		);
	}

	if (error) {
		return <h1 className=' text-center fw-bolder text-body'>{error}</h1>;
	}

	return (
		<>
			<h1 className='mb-5 text-center fw-bolder text-body'>Информация о пользователе:</h1>
			<Card
				bg='dark'
				text='light'
				className='col-lg-8 col-sm-12 offset-lg-2 offset-sm-0 mb-5'
			>
				<Card.Header className='border-bottom border-secondary py-2 text-center'>
					<h2 className='mb-0'>{user?.name}</h2>
				</Card.Header>
				<Card.Body>
					<Card.Text className='fs-6'>
						<strong>Логин:</strong> {user?.username}
						<br />
						<strong>Почта:</strong> {user?.email}
						<br />
						<strong>Телефон:</strong> {user?.phone}
						<br />
						<strong>Сайт:</strong> {user?.website}
						<br />
						<strong>Адрес:</strong> {user?.address.city}, {user?.address.street},{' '}
						{user?.address.suite}
						<br />
						<strong>Место работы:</strong> {user?.company.name}
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
});
