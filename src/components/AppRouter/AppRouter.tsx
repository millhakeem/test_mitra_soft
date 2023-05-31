import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import ProfilePage from '../../pages/ProfilePage';
import NotFoundPage from '../../pages/NotFoundPage';

const AppRouter = () => (
	<Routes>
		<Route
			path='/'
			element={<HomePage />}
		/>
		<Route
			path='/about'
			element={<AboutPage />}
		/>
		<Route
			path='/profile/:id'
			element={<ProfilePage />}
		/>
		<Route
			path='*'
			element={<NotFoundPage />}
		/>
	</Routes>
);

export default memo(AppRouter);
