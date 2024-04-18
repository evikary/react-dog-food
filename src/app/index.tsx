import { useEffect, useState } from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home/home-page';
import NotFound from '../pages/not-found/not-found';
import '../styles.css';
import { getAllProducts } from '../utils/api';
import { ProductType } from '../types/types-data';
import ProfilePage from '../pages/profile/profile-page';
import CatalogProducts from '../pages/catalog-products/catalog-products';
import SingleProduct from '../pages/single-product/single-product';

export const App = () => {
	const [products, setProducts] = useState<ProductType[]>([]);

	useEffect(() => {
		getAllProducts().then((data) => {
			setProducts(data.products);
		});
	}, []);

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route
					path='/products'
					element={<CatalogProducts allProducts={products} />}
				/>
				<Route path='*' element={<NotFound />} />
				<Route path='/profile' element={<ProfilePage />} />
				<Route path='/products/:idProduct' element={<SingleProduct />} />
			</Routes>
			<Footer />
		</>
	);
};
