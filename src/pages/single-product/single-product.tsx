import { Button, Container, Typography } from '@mui/material';
import IcoLeft from '../../icons/ico-left';
import ProductDetail from '../../components/product-detail/product-detail';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner';
import NotFoundPage from '../not-found/not-found';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import {
	ProductActions,
	productSelector,
} from '../../storage/slices/product-slice';
import { useAppSelector } from '../../hooks/useAppSelector';

function SingleProductPage() {
	const { idProduct } = useParams();
	const dispatch = useAppDispatch();
	const product = useAppSelector(productSelector.product);
	const status = useAppSelector(productSelector.productsRequestStatus);

	useEffect(() => {
		dispatch(ProductActions.fetchProduct(idProduct!));
	}, [idProduct]);

	const navigate = useNavigate();
	const location = useLocation();
	const isBack = location.state?.isBack;

	if (status === 'failed') {
		return <NotFoundPage />;
	}

	return (
		<>
			{status !== 'success' ? (
				<Spinner />
			) : (
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
					{product && <ProductDetail product={product} />}
				</Container>
			)}
		</>
	);
}

export default SingleProductPage;
