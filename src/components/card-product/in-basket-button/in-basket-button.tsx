import { Button, Typography } from '@mui/material';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { buyActions, buySelector } from '../../../storage/slices/buy-slice';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useState } from 'react';

interface InBasketBtnProps {
	id: string;
	price: number;
	discount: number;
	stock: number;
}

function InBasketBtn({ id, price, discount, stock }: InBasketBtnProps) {
	const dispatch = useAppDispatch();
	const buyCards = useAppSelector(buySelector.cards);
	const [isWarning, setIsWarning] = useState(false);

	const handleClick = (prodId: string) => {
		if (buyCards.length !== 0) {
			const buyCard = buyCards.find((item) => item.idProduct === prodId);

			if (buyCard && buyCard.count >= buyCard.stock) {
				setIsWarning(true);
				return;
			}
		}
		dispatch(
			buyActions.addBuyCard({
				idProduct: id,
				count: 1,
				price: price,
				discount: discount,
				stock: stock,
				checked: true,
			})
		);
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
					onClick={() => handleClick(id)}
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
