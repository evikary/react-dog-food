import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function NotFoundPage() {
	return (
		<Container component='main'>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					height: '100%',
				}}>
				<Typography component='h1' variant='h1' align='center' mb='50px'>
					404
				</Typography>
				<Typography component='h3' variant='h6' align='center'>
					Страница не найдена
				</Typography>
				<Typography component='h3' variant='h6' align='center' mb='50px'>
					Возможно, она была перемещена, или вы просто неверно указали адрес
					страницы.
				</Typography>
				<Button
					variant='outlined'
					component={Link}
					to='/'
					sx={{
						color: 'rgb(26, 26, 26)',
						borderRadius: '50px',
						border: '2px solid rgb(255, 228, 77)',
					}}>
					Перейти на главную
				</Button>
			</Box>
		</Container>
	);
}

export default NotFoundPage;
