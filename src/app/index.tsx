import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import { Route, Routes } from 'react-router-dom';
import '../styles.css';
import { useGetUserQuery } from '../storage/api/productsApi';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useEffect } from 'react';
import { userActions } from '../storage/slices/user-slice';
import { routes } from './routes';

export const App = () => {
	const dispatch = useAppDispatch();
	const { data } = useGetUserQuery();

	useEffect(() => {
		dispatch(userActions.setUser(data));
	}, [data]);

	return (
		<>
			<Header />
			<Routes>
				{routes.map((item) => (
					<Route key={item.path} {...item} />
				))}
			</Routes>
			<Footer />
		</>
	);
};
