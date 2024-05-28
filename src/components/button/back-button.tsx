import { Button, Typography } from '@mui/material';
import IcoLeft from '../../icons/ico-left';
import { useNavigate } from 'react-router-dom';

function ButtonBack() {
	const navigate = useNavigate();

	return (
		<Button
			variant='text'
			sx={{ mt: '36px', padding: '6px 0' }}
			onClick={() => navigate(-1)}>
			<IcoLeft />
			<Typography
				component='span'
				sx={{
					color: 'rgb(123, 142, 152)',
					fontSize: '14px',
					fontWeight: '400',
					textTransform: 'capitalize',
				}}>
				Назад
			</Typography>
		</Button>
	);
}

export default ButtonBack;
