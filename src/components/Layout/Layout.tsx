import { ReactNode, Suspense, memo } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { Header } from './Header/Header';

interface LayoutProps {
	children: ReactNode;
}

export const Layout = memo(({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<Container>
				<Row>
					<Suspense fallback={<Spinner className='mx-auto text-center' />}>
						{children}
					</Suspense>
				</Row>
			</Container>
		</>
	);
});
