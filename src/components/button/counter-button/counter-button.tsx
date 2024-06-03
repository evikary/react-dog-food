import { Box, Button, Typography } from '@mui/material';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { StateBuyCard, buyActions } from '../../../storage/slices/buy-slice';

interface CounterButtonProps {
	info: StateBuyCard;
}

const CounterButton = ({ info }: CounterButtonProps) => {
	const dispatch = useAppDispatch();

	const handleIncreaseClick = () => {
		dispatch(buyActions.addBuyCard(info));
	};

	const handleDecreseClick = () => {
		dispatch(buyActions.decreaseCount(info.idProduct));
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
				disabled={info.count <= 1}
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
				{info.count}
			</Typography>
			<Button
				variant='text'
				onClick={handleIncreaseClick}
				disabled={info.count >= info.stock}
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
