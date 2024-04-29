import { useEffect, useState } from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home/home-page';
import '../styles.css';
import { changelike, getAllProducts, getProductId } from '../utils/api';
import { ProductType } from '../types/types-data';
import ProfilePage from '../pages/profile/profile-page';
import CatalogProductsPage from '../pages/catalog-products/catalog-products';
import { apiToken } from '../utils/constants';
import { isLiked } from '../utils/products';
import { ProductsContext } from '../context/product-context';
import FavoritesPage from '../pages/favorites-page/favorite-page';
import NotFoundPage from '../pages/not-found/not-found';
import SingleProductPage from '../pages/single-product/single-product';
import { UserActions, userSelector } from '../storage/slices/user-slice';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import MyDataPage from '../pages/my-data/my-data';

export const App = () => {
	const [products, setProducts] = useState<ProductType[]>([]);
	const currentUser = useAppSelector(userSelector.user);
	const dispatch = useAppDispatch();

	useEffect(() => {
		getAllProducts()
			.then((data) => {
				setProducts(data.products);
			})
			.catch((error: Error) => {
				console.log(error);
			});

		dispatch(UserActions.fetchUser(apiToken));
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
			<ProductsContext.Provider
				value={{ products, onProductLike: handleProductLike }}>
				<Header />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/favorites' element={<FavoritesPage />} />
					<Route path='/products' element={<CatalogProductsPage />} />
					<Route path='*' element={<NotFoundPage />} />
					<Route path='/profile' element={<ProfilePage />} />
					<Route path='/profile/my' element={<MyDataPage />} />
					<Route path='/products/:idProduct' element={<SingleProductPage />} />
				</Routes>
				<Footer />
			</ProductsContext.Provider>
		</>
	);
};
