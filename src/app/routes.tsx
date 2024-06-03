import BasketPage from '../pages/basket-page/basket-page';
import CatalogProductsPage from '../pages/catalog-products/catalog-products';
import FavoritesPage from '../pages/favorites-page/favorite-page';
import HomePage from '../pages/home/home-page';
import MyDataPage from '../pages/my-data/my-data';
import NotFoundPage from '../pages/not-found/not-found';
import ProfilePage from '../pages/profile/profile-page';
import ReviewsPage from '../pages/reviews/reviews-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import SignUpPage from '../pages/sign-up-page/sign-up-page';
import SingleProductPage from '../pages/single-product/single-product';

export const path = {
	home: '/',
	favorites: '/favorites',
	products: '/products',
	profile: '/profile',
	signup: '/signup',
	signin: '/signin',
	basket: '/basket',
	myData: '/profile/my',
	reviewsPage: '/reviews/leave/:idProduct',
	singleProduct: '/products/:idProduct',
};

export const routes = [
	{ path: path.home, element: <HomePage /> },
	{ path: path.favorites, element: <FavoritesPage /> },
	{ path: path.products, element: <CatalogProductsPage /> },
	{ path: path.profile, element: <ProfilePage /> },
	{ path: path.signup, element: <SignUpPage /> },
	{ path: path.signin, element: <SignInPage /> },
	{ path: path.basket, element: <BasketPage /> },
	{ path: path.myData, element: <MyDataPage /> },
	{ path: path.reviewsPage, element: <ReviewsPage /> },
	{ path: path.singleProduct, element: <SingleProductPage /> },
	{ path: '*', element: <NotFoundPage /> },
];
