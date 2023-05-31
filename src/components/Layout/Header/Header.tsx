import { memo, useState } from 'react';
import { CloseButton, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Avatar, AvatarSize } from '../../Avatar/Avatar';

export const Header = memo(() => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Navbar
			bg='dark'
			variant='dark'
			expand='false'
			className='py-3 mb-5 shadow-sm'
			as={'header'}
			sticky='top'
		>
			<Container>
				<Navbar.Brand>
					<Link
						to='/'
						className='text-decoration-none text-light fs-3'
					>
						Awesome Blog
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls='drawer'
					onClick={handleShow}
				/>
				<Navbar.Offcanvas
					id='drawer'
					aria-labelledby='drawer-title'
					placement='start'
					show={show}
					onHide={handleClose}
					className='bg-dark text-light'
				>
					<Offcanvas.Header className='pb-0'>
						<Offcanvas.Title
							id='drawer-title'
							className='w-100 text-center'
						>
							John Doe
						</Offcanvas.Title>
						<CloseButton
							variant='white'
							onClick={handleClose}
							aria-label='Hide'
						/>
					</Offcanvas.Header>
					<Offcanvas.Body className='me-3 d-flex flex-column'>
						<Avatar
							size={AvatarSize.LARGE}
							className='mx-auto mb-3'
						/>
						<div className='text-center mb-1'>john.doe@example.com</div>
						<hr />
						<h4 className='text-center mb-3'>Навигация</h4>
						<Nav
							as={'ul'}
							className='px-3'
						>
							<li>
								<Nav.Link
									as={Link}
									to='/'
									onClick={handleClose}
									className='fs-5'
								>
									Список постов
								</Nav.Link>
							</li>
							<li>
								<Nav.Link
									as={Link}
									to='/about'
									onClick={handleClose}
									className='fs-5'
								>
									Обо мне
								</Nav.Link>
							</li>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
});
