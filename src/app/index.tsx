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
				{/* <Route path='/' element={<HomePage />} />
				<Route path='/favorites' element={<FavoritesPage />} />
				<Route path='/products' element={<CatalogProductsPage />} />
				<Route path='*' element={<NotFoundPage />} />
				<Route path='/profile' element={<ProfilePage />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route path='/basket' element={<BasketPage />} />
				<Route path='/signin' element={<SignInPage />} />
				<Route path='/profile/my' element={<MyDataPage />} />
				<Route path='/reviews/leave/:idProduct' element={<ReviewsPage />} />
				<Route path='/products/:idProduct' element={<SingleProductPage />} /> */}
			</Routes>
			<Footer />
		</>
	);
};
