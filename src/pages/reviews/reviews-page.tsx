import {
	Box,
	Button,
	Container,
	Divider,
	FormControl,
	Rating,
	TextField,
	Typography,
} from '@mui/material';
import ButtonBack from '../../components/button/back-button';
import { useNavigate, useParams } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import {
	ProductActions,
	productSelector,
} from '../../storage/slices/product-slice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { FormFeedback } from '../../types/types-data';
import { apiToken } from '../../utils/constants';
import { ProductsActions } from '../../storage/slices/products-slice';

function ReviewsPage() {
	const { idProduct } = useParams();
	const dispatch = useAppDispatch();
	const product = useAppSelector(productSelector.product);
	const [form, setForm] = useState<FormFeedback>({ feed: '', rating: 1 });
	const navigate = useNavigate();

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		if (idProduct) {
			dispatch(ProductActions.fetchProduct(idProduct));
		}
	}, [idProduct]);

	const onClick = () => {
		dispatch(
			ProductsActions.fetchCreateFeedback({
				token: apiToken,
				id: idProduct!,
				rating: form.rating,
				text: form.feed,
			})
		).then(() => navigate(-1));
	};

	return (
		<Container component='main' sx={{ height: 'calc(100vh - 192px - 96px)' }}>
			<ButtonBack />
			<Box>
				{product && (
					<Typography component='h2' variant='h5' fontWeight='800' mb='20px'>
						Отзыв о товаре {product.name}
					</Typography>
				)}
				<Divider />
				<FormControl component='form' sx={{ mt: '40px' }}>
					<Box display='flex' width='740px' mb='40px' columnGap='12%'>
						<Typography>Общая оценка</Typography>
						<Rating
							name='simple-controlled'
							value={form.rating}
							onChange={(event, newValue) => {
								setForm({ ...form, rating: newValue || form.rating });
							}}
						/>
					</Box>
					<Box display='flex' width='740px' justifyContent='space-between'>
						<Typography>Комментарии</Typography>
						<TextField
							multiline
							placeholder='Поделитесь впечатлениями о товаре'
							name='feed'
							required
							type='text'
							size='small'
							rows={4}
							defaultValue={form.feed}
							onChange={onChange}
							sx={{
								width: '540px',
								borderRadius: '12px',
								mb: '40px',
							}}
						/>
					</Box>
					<Button
						variant='contained'
						onClick={onClick}
						sx={{
							borderRadius: '55px',
							background: 'rgb(255, 228, 77)',
							color: 'rgb(26, 26, 26)',
							fontSize: '16px',
							fontWeight: '700',
							width: '196px',
							height: '48px',
							mt: 'auto',
							boxShadow: 'none',
							textTransform: 'unset',
						}}>
						Отправить отзыв
					</Button>
				</FormControl>
			</Box>
		</Container>
	);
}

export default ReviewsPage;
