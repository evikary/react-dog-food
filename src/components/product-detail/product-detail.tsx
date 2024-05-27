import {
	Box,
	Button,
	CardMedia,
	Divider,
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
import { useAppSelector } from '../../hooks/useAppSelector';
import { userSelector } from '../../storage/slices/user-slice';
import Feedback from '../feedback/feedback';
import { Link } from 'react-router-dom';
import { withQuery } from '../../HOCs/with-query';
import { useChangelikeMutation } from '../../storage/api/productsApi';
import CounterButton from '../button/counter-button/counter-button';
import { buySelector } from '../../storage/slices/buy-slice';

interface ProductDetailProps {
	product: ProductType;
}

const ProductDetail = withQuery(({ product }: ProductDetailProps) => {
	const currentUser = useAppSelector(userSelector.user);
	const buyCards = useAppSelector(buySelector.cards);
	const like = isLiked(product.likes, currentUser?.id);

	const [changeLikeReviewFn] = useChangelikeMutation();

	const handleLikeProduct = async () => {
		await changeLikeReviewFn({ id: product.id, like: like }).unwrap();
	};

	const countProduct = buyCards.find((item) => item.idProduct === product.id);

	const info = {
		count: countProduct?.count || 1,
		stock: product.stock,
		idProduct: product.id,
		price: product.price,
		discount: product.discount,
		checked: countProduct?.checked || true,
	};

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
						<CounterButton info={info} />
						<InBasketBtn
							id={product.id}
							price={product.price}
							discount={product.discount}
							stock={product.stock}
						/>
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
						onClick={() => handleLikeProduct()}>
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
			<Box>
				<Typography component='h2' variant='h6' sx={{ fontWeight: '800' }}>
					Отзывы
				</Typography>
				<Button
					component={Link}
					to={`/reviews/leave/${product.id}`}
					type='button'
					variant='outlined'
					sx={{
						width: '172px',
						height: '40px',
						borderRadius: '87px',
						color: 'rgb(26, 26, 26)',
						fontSize: '16px',
						fontWeight: '700',
						borderColor: 'rgb(207, 216, 220)',
						mt: '20px',
						mb: '20px',
						textTransform: 'unset',
					}}>
					Написать отзыв
				</Button>
				<Divider sx={{ mb: '20px' }} />
				{product.reviews &&
					product.reviews.map((item) => (
						<Feedback key={item.id} review={item} />
					))}
			</Box>
		</>
	);
});

export default ProductDetail;
