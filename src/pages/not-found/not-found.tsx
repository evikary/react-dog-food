import { Box, Container, Typography } from '@mui/material';

function NotFound() {
	return (
		<Container component='main' sx={{ height: 'calc(100vh - 192px - 96px)' }}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					rowGap: '50px',
					height: '100%',
				}}>
				<Typography component='h1' variant='h1' align='center'>
					404
				</Typography>
				<Typography component='h3' variant='h6' align='center'>
					Кажется что-то пошло не так! <br />
					Страница, которую вы запрашиваете не существует.
				</Typography>
			</Box>
		</Container>
	);
}

export default NotFound;
