import { memo } from 'react';
import { Card } from 'react-bootstrap';

interface ProfileCardProps {
	userId: string;
}

const user = {
	id: '1',
	name: 'John Doe',
	username: 'johndoe',
	email: 'johndoe@ya.ru',
	phone: '+7 (111) 111-11-11',
	website: 'https://ya.ru',
	address: {
		street: 'sad',
		suite: 'sadsad',
		city: 'dsads',
	},
	company: {
		name: 'asds',
	},
};

export const ProfileCard = memo(({ userId }: ProfileCardProps) => {
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
