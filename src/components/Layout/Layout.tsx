import { ReactNode, memo } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Header } from './Header/Header';

interface LayoutProps {
	children: ReactNode;
}

export const Layout = memo(({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<Container>
				<Row>{children}</Row>
			</Container>
		</>
	);
});
