import { Box, Button, Container, Typography } from '@mui/material';
import IcoLeft from '../../icons/ico-left';
import { useNavigate } from 'react-router-dom';
import CardList from '../../components/card-list/card-list';
import { useContext } from 'react';
import {
	ProductsContext,
	ProductsContextInterface,
} from '../../context/product-context';
import { favoritesProducts } from '../../utils/products';
import { UserContext } from '../../context/user-context';

function FavoritesPage() {
	const { products } = useContext(ProductsContext) as ProductsContextInterface;
	const currentUser = useContext(UserContext);
	const navigate = useNavigate();

	return (
		<Container component='main'>
			<Button
				variant='text'
				sx={{ padding: '6px 0' }}
				onClick={() => navigate(-1)}>
				<IcoLeft />
				<Typography
					component='span'
					sx={{
						color: 'rgb(123, 142, 152)',
						fontSize: '14px',
						fontWeight: '400',
						textTransform: 'capitalize',
					}}>
					Назад
				</Typography>
			</Button>
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
