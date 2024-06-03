import { Button } from '@mui/material';

function PlaceOnOrder() {
	return (
		<Button
			variant='contained'
			sx={{
				borderRadius: '55px',
				background: 'rgb(255, 228, 77)',
				color: 'rgb(26, 26, 26)',
				fontWeight: '700',
				width: '280px',
				height: '40px',
				mt: 'auto',
				boxShadow: 'none',
			}}>
			Оформить заказ
		</Button>
	);
}

export default PlaceOnOrder;
