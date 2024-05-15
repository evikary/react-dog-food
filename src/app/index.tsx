import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home/home-page';
import '../styles.css';
import ProfilePage from '../pages/profile/profile-page';
import CatalogProductsPage from '../pages/catalog-products/catalog-products';
import FavoritesPage from '../pages/favorites-page/favorite-page';
import NotFoundPage from '../pages/not-found/not-found';
import SingleProductPage from '../pages/single-product/single-product';
import MyDataPage from '../pages/my-data/my-data';
import ReviewsPage from '../pages/reviews/reviews-page';
import SignUpPage from '../pages/sign-up-page/sign-up-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';

export const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/favorites' element={<FavoritesPage />} />
				<Route path='/products' element={<CatalogProductsPage />} />
				<Route path='*' element={<NotFoundPage />} />
				<Route path='/profile' element={<ProfilePage />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route path='/signin' element={<SignInPage />} />
				<Route path='/profile/my' element={<MyDataPage />} />
				<Route path='/reviews/leave/:idProduct' element={<ReviewsPage />} />
				<Route path='/products/:idProduct' element={<SingleProductPage />} />
			</Routes>
			<Footer />
		</>
	);
};
