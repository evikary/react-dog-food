import { Box, Container, Typography } from '@mui/material';
import CardList from '../../components/card-list/card-list';
import ButtonBack from '../../components/button/back-button';
import { withProtection } from '../../HOCs/with-protection';
import { useGetUserQuery } from '../../storage/api/productsApi';
import { getMessageFromError } from '../../utils/error-utils';
import { ProductType } from '../../types/types-data';

const FavoritesPage = withProtection(() => {
	const { data, isLoading, refetch, error } = useGetUserQuery();
	const likeProducts = data?.likes?.map((item) => item.product);

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
				products={(likeProducts as ProductType[]) || []}
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
