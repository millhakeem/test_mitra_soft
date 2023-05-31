import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/');
	};

	return (
		<Row className='mb-5'>
			<Col>
				<Button
					variant='outline-dark'
					className='w-auto mb-5'
					onClick={handleNavigate}
				>
					На главную
				</Button>
				<h2 className='mb-5 text-center fw-bolder text-body'>Страница не найдена 404</h2>
			</Col>
		</Row>
	);
}
