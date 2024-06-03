import { Button, Typography } from '@mui/material';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import {
	StateBuyCard,
	buyActions,
	buySelector,
} from '../../../storage/slices/buy-slice';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useEffect, useState } from 'react';
import { useGetProductByIdQuery } from '../../../storage/api/productsApi';
import { isFinishProduct } from '../../../utils/products';

interface InBasketBtnProps {
	id: string;
}

function InBasketBtn({ id }: InBasketBtnProps) {
	const { data } = useGetProductByIdQuery(id);
	const buyCards = useAppSelector(buySelector.cards);
	const [isWarning, setIsWarning] = useState(false);
	const dispatch = useAppDispatch();

	useEffect(() => {
		setIsWarning(() => isFinishProduct(buyCards, id));
	}, [buyCards]);

	const handleClick = (buyProducts: StateBuyCard[], prodId: string) => {
		if (isFinishProduct(buyProducts, prodId)) {
			setIsWarning(true);
			return;
		}

		if (data) {
			dispatch(
				buyActions.addBuyCard({
					idProduct: id,
					count: 1,
					price: data?.price,
					discount: data?.discount,
					stock: data?.stock,
					checked: true,
				})
			);
		}
	};

	return (
		<>
			{isWarning ? (
				<Typography
					component='p'
					sx={{
						fontSize: '16px',
						fontWeight: '700',
						color: 'red',
						mt: '20px',
					}}>
					Этот товар закончился на складе!
				</Typography>
			) : (
				<Button
					variant='contained'
					onClick={() => handleClick(buyCards || [], id)}
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
			)}
		</>
	);
}

export default InBasketBtn;
