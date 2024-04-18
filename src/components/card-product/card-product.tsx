import { FavoriteBorder } from '@mui/icons-material';
import { Box, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { ProductType } from '../../types/types-data';
import InBasketBtn from './in-basket-button/in-basket-button';
import { Link } from 'react-router-dom';

function CardProduct({ name, images, price, id }: ProductType) {
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
			<IconButton sx={{ position: 'absolute', top: 0, right: '10px' }}>
				<FavoriteBorder sx={{ color: ' rgb(26, 26, 26)' }} />
			</IconButton>
			<Link to={`/products/${id}`}>
				<CardMedia
					component='img'
					image={images}
					alt={name}
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
						fontFamily: 'Nunito',
					}}>
					{price} ₽
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
					{name}
				</Typography>
				<InBasketBtn />
			</Box>
		</Grid>
	);
}

export default CardProduct;
