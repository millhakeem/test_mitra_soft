import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPageAsync as AboutPage } from '../../pages/AboutPage/AboutPage.async';
import { HomePageAsync as HomePage } from '../../pages/HomePage/HomePage.async';
import { NotFoundPageAsync as NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage.async';
import { ProfilePageAsync as ProfilePage } from '../../pages/ProfilePage/ProfilePage.async';

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
