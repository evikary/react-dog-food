import {
	Box,
	Button,
	CardMedia,
	Paper,
	Stack,
	Typography,
} from '@mui/material';
import InBasketBtn from '../card-product/in-basket-button/in-basket-button';
import { Favorite } from '@mui/icons-material';
import IcoTruck from '../../icons/ico-truck';
import IcoQuality from '../../icons/ico-quality';
import { ProductType } from '../../types/types-data';
import { isLiked } from '../../utils/products';
import { useContext } from 'react';
import { UserContext } from '../../context/user-context';

interface ProductDetailProps {
	onProductLike: (productData: ProductType) => void;
	product: ProductType;
}

function ProductDetail({ product, onProductLike }: ProductDetailProps) {
	const currentUser = useContext(UserContext);
	const like = isLiked(product.likes, currentUser?.id);

	return (
		<>
			<Box sx={{ mb: '20px' }}>
				<Typography component='h2' variant='h5' sx={{ fontWeight: '800' }}>
					{product.name}
				</Typography>
			</Box>
			<Box sx={{ display: 'flex', columnGap: '160px' }}>
				<CardMedia
					component='img'
					image={product.images}
					alt={product.name}
					sx={{ height: '488px', width: '488px', objectFit: 'contain' }}
				/>
				<Stack>
					<Typography
						component='p'
						sx={{
							fontSize: '14px',
							fontWeight: '400',
							textDecoration: 'line-through',
						}}>
						550 ₽
					</Typography>
					<Typography
						component='p'
						sx={{
							fontSize: '28px',
							fontWeight: '800',
						}}>
						{product.price}
					</Typography>
					<Box display='flex' gap='16px' sx={{ mt: '24px' }}>
						<Box
							display='flex'
							width='109px'
							height='48px'
							alignItems='center'
							justifyContent='space-around'
							sx={{
								border: '1px solid rgb(207, 216, 220)',
								borderRadius: '100px',
							}}>
							<Button
								variant='text'
								disabled
								sx={{
									fontSize: '21px',
									fontWeight: '700',
									color: 'rgb(26, 26, 26)',
									padding: '0',
									minWidth: '24px',
								}}>
								-
							</Button>
							<Typography sx={{ fontSize: '21px', fontWeight: '700' }}>
								0
							</Typography>
							<Button
								variant='text'
								sx={{
									fontSize: '21px',
									fontWeight: '700',
									color: 'rgb(26, 26, 26)',
									padding: '0',
									minWidth: '24px',
								}}>
								+
							</Button>
						</Box>
						<InBasketBtn />
					</Box>
					<Button
						variant='text'
						size='small'
						sx={{
							display: 'flex',
							columnGap: '10px',
							justifyContent: 'flex-start',
							mt: '24px',
							color: 'rgb(123, 142, 152)',
						}}
						onClick={() => onProductLike(product)}>
						<Favorite sx={{ fill: like ? 'red' : '' }} />
						<Typography component='span'>В избранное</Typography>
					</Button>
					<Paper
						elevation={0}
						square={false}
						sx={{
							padding: '12px',
							background: 'rgba(236, 239, 241, 0.5)',
							mt: '24px',
						}}>
						<Box display='flex' gap='12px'>
							<IcoTruck />
							<Stack>
								<Typography component='p' sx={{ fontWeight: '700', mb: '8px' }}>
									Доставка по всему Миру!
								</Typography>
								<Box mb='8px'>
									<Typography component='span' sx={{ fontSize: '14px' }}>
										Доставка курьером —{' '}
									</Typography>
									<Typography
										component='span'
										sx={{
											fontSize: '14px',
											fontWeight: '700',
										}}>
										от 399 ₽
									</Typography>
								</Box>
								<Box>
									<Typography component='span' sx={{ fontSize: '14px' }}>
										Доставка в пункт выдачи —{' '}
									</Typography>
									<Typography
										component='span'
										sx={{
											fontSize: '14px',
											fontWeight: '700',
										}}>
										от 199 ₽
									</Typography>
								</Box>
							</Stack>
						</Box>
					</Paper>
					<Paper
						elevation={0}
						square={false}
						sx={{
							padding: '12px',
							background: 'rgba(236, 239, 241, 0.5)',
							mt: '8px',
						}}>
						<Box display='flex' gap='12px'>
							<IcoQuality />
							<Stack>
								<Typography component='p' sx={{ fontWeight: '700', mb: '8px' }}>
									Гарантия качества
								</Typography>
								<Typography component='span' sx={{ fontSize: '14px' }} mb='8px'>
									Если Вам не понравилось качество <br />
									нашей продукции, мы вернем деньги,
									<br /> либо сделаем все возможное, чтобы <br />
									удовлетворить ваши нужды.
								</Typography>
							</Stack>
						</Box>
					</Paper>
				</Stack>
			</Box>
			<Box>
				<Typography
					component='h2'
					variant='h6'
					sx={{ fontWeight: '800', mb: '20px' }}>
					Описание
				</Typography>
				<Typography
					component='p'
					sx={{ fontSize: '16px', fontWeight: '400', mb: '20px' }}>
					{product.description}
				</Typography>
			</Box>
		</>
	);
}

export default ProductDetail;
