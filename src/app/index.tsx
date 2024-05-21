import { useEffect, useState } from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home/home-page';
import '../styles.css';
import {
	changelike,
	getAllProducts,
	getProductId,
	getUser,
} from '../utils/api';
import { ProductType, UserType } from '../types/types-data';
import ProfilePage from '../pages/profile/profile-page';
import CatalogProductsPage from '../pages/catalog-products/catalog-products';
import { apiToken } from '../utils/constants';
import { isLiked } from '../utils/products';
import { UserContext } from '../context/user-context';
import { ProductsContext } from '../context/product-context';
import FavoritesPage from '../pages/favorites-page/favorite-page';
import NotFoundPage from '../pages/not-found/not-found';
import SingleProductPage from '../pages/single-product/single-product';

export const App = () => {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [currentUser, setCurrentUser] = useState<UserType | null>(null);

	useEffect(() => {
		getAllProducts()
			.then((data) => {
				setProducts(data.products);
			})
			.catch((error: Error) => {
				console.log(error);
			});

		getUser(apiToken)
			.then((data) => {
				setCurrentUser(data);
			})
			.catch((error: Error) => {
				console.log(error);
			});
	}, []);

	const handleProductLike = async (productData: ProductType) => {
		const liki = isLiked(productData.likes, currentUser?.id);
		await changelike(productData.id, apiToken, liki);
		const updateProduct = await getProductId(productData.id);
		const newProducts = products.map((product) => {
			return product.id === updateProduct.id ? updateProduct : product;
		});
		setProducts(newProducts);
		return updateProduct;
	};

	return (
		<>
			<UserContext.Provider value={currentUser}>
				<ProductsContext.Provider
					value={{ products, onProductLike: handleProductLike }}>
					<Header />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/favorites' element={<FavoritesPage />} />
						<Route path='/products' element={<CatalogProductsPage />} />
						<Route path='*' element={<NotFoundPage />} />
						<Route path='/profile' element={<ProfilePage />} />
						<Route
							path='/products/:idProduct'
							element={<SingleProductPage />}
						/>
					</Routes>
					<Footer />
				</ProductsContext.Provider>
			</UserContext.Provider>
		</>
	);
};
