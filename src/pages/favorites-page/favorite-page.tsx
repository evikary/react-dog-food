import { Box, Container, Typography } from '@mui/material';
import CardList from '../../components/card-list/card-list';
import { favoritesProducts } from '../../utils/products';
import { useAppSelector } from '../../hooks/useAppSelector';
import { userSelector } from '../../storage/slices/user-slice';
import { productsSelector } from '../../storage/slices/products-slice';
import ButtonBack from '../../components/button/back-button';

function FavoritesPage() {
	const products = useAppSelector(productsSelector.products);
	const currentUser = useAppSelector(userSelector.user);

	return (
		<Container component='main'>
			<ButtonBack />
			<Typography
				component='h2'
				sx={{ fontSize: '28px', fontWeight: '800', mt: '4px' }}>
				Избранное
			</Typography>
			<Box sx={{ height: '40px' }} />
			{currentUser && (
				<CardList products={favoritesProducts(products, currentUser.id)} />
			)}
			<Box sx={{ height: '40px' }} />
		</Container>
	);
}

export default FavoritesPage;
