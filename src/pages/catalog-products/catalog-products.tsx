import { Box, Button, Container, Typography } from '@mui/material';
import CardList from '../../components/card-list/card-list';
import SortProduct from '../../components/sort/sort';
import IcoLeft from '../../icons/ico-left';
import { useNavigate } from 'react-router-dom';
import { withProtection } from '../../HOCs/with-protection';
import { useGetProductsQuery } from '../../storage/api/productsApi';
import { getMessageFromError } from '../../utils/error-utils';

const CatalogProductsPage = withProtection(() => {
	const { data, isLoading, error, refetch } = useGetProductsQuery({});
	const navigate = useNavigate();

	return (
		<Container disableGutters component='main' sx={{ py: 3, px: 3 }}>
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
					Главная
				</Typography>
			</Button>
			<Typography
				component='h2'
				sx={{ fontSize: '28px', fontWeight: '800', mt: '4px' }}>
				Каталог
			</Typography>
			<SortProduct />
			<Box sx={{ height: '40px' }} />

			<CardList
				products={data?.products || []}
				isLoading={isLoading}
				isError={false}
				queryErrorMsg={getMessageFromError(
					error,
					'Неизвестная ошибка при получении продуктов'
				)}
				refetch={refetch}
			/>
		</Container>
	);
});

export default CatalogProductsPage;
