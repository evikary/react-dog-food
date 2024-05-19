import { Favorite } from '@mui/icons-material';
import { Box, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { ProductType } from '../../types/types-data';
import InBasketBtn from './in-basket-button/in-basket-button';
import { Link, useLocation } from 'react-router-dom';
import { isLiked } from '../../utils/products';
import IcoBin from '../../icons/ico-bin';
import { useAppSelector } from '../../hooks/useAppSelector';
import { userSelector } from '../../storage/slices/user-slice';
import { useChangelikeMutation } from '../../storage/api/productsApi';

type CardProductProps = {
	product: ProductType;
};

function CardProduct({ product }: CardProductProps) {
	const location = useLocation();
	const currentUser = useAppSelector(userSelector.user);
	const [changeLikeReviewFn] = useChangelikeMutation();

	const handleLikeProduct = async () => {
		await changeLikeReviewFn({ id: product.id, like: like }).unwrap();
	};

	const like = isLiked(product.likes, currentUser?.id);

	return (
		<Grid
			item
			xs={6}
			sm={4}
			md={4}
			lg={3}
			sx={{
				position: 'relative',
			}}>
			<IconButton
				sx={{ position: 'absolute', top: 0, right: '10px' }}
				onClick={() => handleLikeProduct()}>
				{location.pathname === '/products' ? (
					<Favorite
						sx={{ color: ' rgb(26, 26, 26)', fill: like ? 'red' : '' }}
					/>
				) : (
					<IcoBin />
				)}
			</IconButton>
			<Link to={`/products/${product.id}`} state={{ isBack: true }}>
				<CardMedia
					component='img'
					image={product.images}
					alt={product.name}
					sx={{ height: '187px', mb: '30px', objectFit: 'contain' }}
				/>
			</Link>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					minHeight: '172px',
				}}>
				<Typography
					component='span'
					sx={{
						fontSize: '20px',
						fontWeight: '800',
						mb: '6px',
					}}>
					{product.price} ₽
				</Typography>
				<Typography
					component='span'
					color='text.secondary'
					sx={{ fontSize: '12px', fontWeight: '400', mb: '2px' }}>
					1шт
				</Typography>
				<Typography
					component='span'
					sx={{ fontSize: '16px', fontWeight: '600' }}>
					{product.name}
				</Typography>
				<InBasketBtn />
			</Box>
		</Grid>
	);
}

export default CardProduct;
