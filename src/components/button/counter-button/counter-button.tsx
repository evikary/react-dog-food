import { Box, Button, Typography } from '@mui/material';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { buyActions } from '../../../storage/slices/buy-slice';

interface CounterButtonProps {
	count: number;
	stock: number;
	idProduct: string;
	price: number;
	discount: number;
}

const CounterButton = ({
	count,
	stock,
	idProduct,
	price,
	discount,
}: CounterButtonProps) => {
	const dispatch = useAppDispatch();

	const handleIncreaseClick = () => {
		dispatch(
			buyActions.addBuyCard({
				count: count,
				stock: stock,
				idProduct: idProduct,
				price: price,
				discount: discount,
			})
		);
	};

	const handleDecreseClick = () => {
		dispatch(buyActions.decreaseCount(idProduct));
	};

	return (
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
				onClick={handleDecreseClick}
				disabled={count <= 1}
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
				{count}
			</Typography>
			<Button
				variant='text'
				onClick={handleIncreaseClick}
				disabled={count >= stock}
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
	);
};

export default CounterButton;
