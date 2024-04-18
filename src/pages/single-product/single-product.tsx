import { Button, Container, Typography } from '@mui/material';
import IcoLeft from '../../icons/ico-left';
import ProductDetail from '../../components/product-detail/product-detail';
import { useEffect, useState } from 'react';
import { ProductType } from '../../types/types-data';
import { getProductId } from '../../utils/api';
import { useNavigate, useParams } from 'react-router-dom';

function SingleProduct() {
	const { idProduct } = useParams();
	const [product, setProduct] = useState<ProductType | null>(null);

	useEffect(() => {
		try {
			getProductId(idProduct!).then((dataProduct: ProductType) => {
				setProduct(dataProduct);
			});
		} catch (error) {
			console.log(error);
		}
	}, [idProduct]);

	const navigate = useNavigate();

	return (
		<Container component='main'>
			<Button
				variant='text'
				sx={{ mt: '36px', padding: '6px 0' }}
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
			{product && <ProductDetail {...product} />}
		</Container>
	);
}

export default SingleProduct;
