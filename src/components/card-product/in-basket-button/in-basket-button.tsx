import { Button } from '@mui/material';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { buyActions } from '../../../storage/slices/buy-slice';

interface InBasketBtnProps {
	id: string;
	price: number;
	discount: number;
}

function InBasketBtn({ id, price, discount }: InBasketBtnProps) {
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(
			buyActions.addBuyCard({
				idProduct: id,
				count: 1,
				price: price,
				discount: discount,
			})
		);
	};

	return (
		<Button
			variant='contained'
			onClick={handleClick}
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
	);
}

export default InBasketBtn;
