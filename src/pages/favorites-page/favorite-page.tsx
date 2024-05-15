import { Box, Container, Typography } from '@mui/material';
import CardList from '../../components/card-list/card-list';
import { favoritesProducts } from '../../utils/products';
import { useAppSelector } from '../../hooks/useAppSelector';
import { userSelector } from '../../storage/slices/user-slice';
import ButtonBack from '../../components/button/back-button';
import { withProtection } from '../../HOCs/with-protection';
import { useGetProductsQuery } from '../../storage/api/productsApi';
import { getMessageFromError } from '../../utils/error-utils';

const FavoritesPage = withProtection(() => {
	const { data, isLoading, error, refetch } = useGetProductsQuery({});
	const currentUser = useAppSelector(userSelector.user);
	const favorites = favoritesProducts(data?.products || [], currentUser?.id);

	return (
		<Container component='main'>
			<ButtonBack />
			<Typography
				component='h2'
				sx={{ fontSize: '28px', fontWeight: '800', mt: '4px' }}>
				Избранное
			</Typography>
			<Box sx={{ height: '40px' }} />
			<CardList
				products={favorites}
				isLoading={isLoading}
				isError={false}
				queryErrorMsg={getMessageFromError(
					error,
					'Неизвестная ошибка при получении продуктов'
				)}
				refetch={refetch}
			/>
			<Box sx={{ height: '40px' }} />
		</Container>
	);
});

export default FavoritesPage;
