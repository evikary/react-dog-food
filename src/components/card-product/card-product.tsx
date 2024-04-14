import { FavoriteBorder } from '@mui/icons-material';
import {
	Box,
	Button,
	CardMedia,
	Grid,
	IconButton,
	Typography,
} from '@mui/material';
import { ProductType } from '../../types/types-data';

function CardProduct({ name, images, price }: ProductType) {
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
			<CardMedia
				component='img'
				image={images}
				alt={name}
				sx={{ height: '187px', mb: '30px', objectFit: 'contain' }}
			/>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					minHeight: '172px',
				}}>
				<Typography
					component='span'
					sx={{ fontSize: '20px', fontWeight: '800', mb: '6px' }}>
					{price}p
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
				<Button
					variant='contained'
					sx={{
						borderRadius: '55px',
						background: 'rgb(255, 228, 77)',
						color: 'rgb(26, 26, 26)',
						fontWeight: '700',
						width: '121px',
						height: '40px',
						mt: 'auto',
						boxShadow: 'none',
					}}>
					В корзину
				</Button>
			</Box>
		</Grid>
	);
}

export default CardProduct;
