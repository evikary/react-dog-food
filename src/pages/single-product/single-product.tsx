import { Button, Container, Typography } from '@mui/material';
import IcoLeft from '../../icons/ico-left';
import ProductDetail from '../../components/product-detail/product-detail';
import { useContext, useEffect, useState } from 'react';
import { ProductType } from '../../types/types-data';
import { getProductId } from '../../utils/api';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
	ProductsContext,
	ProductsContextInterface,
} from '../../context/product-context';
import Spinner from '../../components/spinner/spinner';
import NotFoundPage from '../not-found/not-found';

function SingleProductPage() {
	const { idProduct } = useParams();
	const [product, setProduct] = useState<ProductType | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const { onProductLike } = useContext(
		ProductsContext
	) as ProductsContextInterface;

	const handleLikeProduct = async (productData: ProductType) => {
		const updateProduct = await onProductLike(productData);
		if (updateProduct) {
			setProduct(updateProduct);
		}
	};

	useEffect(() => {
		setIsLoading(true);
		getProductId(idProduct!)
			.then((dataProduct: ProductType) => {
				setProduct(dataProduct);
			})
			.catch(() => setIsError(true))
			.finally(() => setIsLoading(false));
	}, [idProduct]);

	const navigate = useNavigate();
	const location = useLocation();
	const isBack = location.state?.isBack;

	if (isError) {
		return <NotFoundPage />;
	}

	return (
		<>
			{isLoading ? (
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
					{product && (
						<ProductDetail
							product={product}
							onProductLike={handleLikeProduct}
						/>
					)}
				</Container>
			)}
		</>
	);
}

export default SingleProductPage;
