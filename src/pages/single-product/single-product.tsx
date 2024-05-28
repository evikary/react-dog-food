import { Button, Container, Typography } from '@mui/material';
import ProductDetail from '../../components/product-detail/product-detail';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import IcoLeft from '../../icons/ico-left';
import { useGetProductByIdQuery } from '../../storage/api/productsApi';
import { getMessageFromError } from '../../utils/error-utils';
import { withProtection } from '../../HOCs/with-protection';

const SingleProductPage = withProtection(() => {
	const { idProduct } = useParams();
	const { data, refetch, isError, error, isLoading } = useGetProductByIdQuery(
		idProduct!,
		{ skip: idProduct === undefined }
	);

	const navigate = useNavigate();
	const location = useLocation();
	const isBack = location.state?.isBack;

	return (
		<>
			<Container component='main'>
				<Button
					variant='text'
					sx={{ mt: '36px', padding: '6px 0' }}
					onClick={() => (isBack ? navigate(-1) : navigate('/'))}>
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
				<ProductDetail
					isLoading={isLoading}
					isError={isError}
					queryErrorMsg={getMessageFromError(
						error,
						'Неизвестная ошибка при запросе продукта'
					)}
					refetch={refetch}
					product={data!}
				/>
			</Container>
		</>
	);
});

export default SingleProductPage;
