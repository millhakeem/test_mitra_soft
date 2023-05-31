import { Card, Col, Row } from 'react-bootstrap';
import { Avatar, AvatarSize } from '../../components/Avatar/Avatar';

export default function AboutPage() {
	return (
		<Col
			lg={{ span: 8, offset: 2 }}
			sm='12'
		>
			<h1 className='text-center mb-4 fw-bolder text-body'> Обо мне:</h1>
			<Card
				bg='dark'
				text='light'
			>
				<Card.Header className='border-bottom border-secondary py-3'>
					<Row className='align-items-center gap-sm-2 gap-md-0'>
						<Col
							sm='12'
							md='2'
						>
							<Avatar
								size={AvatarSize.LARGE}
								src='mSZYUBzAL8E.webp'
								className='text-center'
							/>
						</Col>
						<Col
							sm='12'
							md='10'
						>
							<h2 className='mb-0 text-center text-md-start text-truncate p-2'>
								Павел Игнатов
							</h2>
						</Col>
					</Row>
				</Card.Header>
				<Card.Body>
					<Card.Text className='px-3 fs-5 mb-3'>
						Здравствуйте, меня зовут Павел, мне 35 лет.
						<br />
						Я Frontend-разработчик. Основную часть времени пишу на стэке React,
						TypeScript, Redux-toolkit, Webpack/Vite.
						<br />
						Начал свой путь с верстальщика и web-программиста. Параллельно с работой
						развивался самостоятельно, в данный момент очень уверенно чувствую себя в
						своем стэке и даже если сталкиваюсь с чем-то незнакомым умею самостоятельно
						находить решения. Помимо фронтенда есть небольшой опыт в создании REST-api
						на Nest.js, Prisma, Docker. <br />
						В свободное время нравится изучать новое (не только в программировании),
						люблю "научпоп" в целом и астрономию и астрофотографию в частности, учу
						английский. Обожаю чай, котиков, фэнтези и научную фантастику.
						<br />В людях очень ценю доброту и чувство юмора, легко нахожу общий язык с
						кем угодно.
					</Card.Text>
				</Card.Body>
				<Card.Footer className='border-top border-secondary px-4'>
					<Row>
						<Col className='text-end'>
							<a
								href='https://t.me/psushkin'
								target='_blank'
								className='text-decoration-none'
							>
								Мой telegram
							</a>{' '}
						</Col>
					</Row>
				</Card.Footer>
			</Card>
		</Col>
	);
}
