import { Box, Container, Typography } from '@mui/material';

function EmptyList() {
	return (
		<Container component='main'>
			<Box
				display='flex'
				alignItems='center'
				justifyContent='center'
				height='100%'>
				<Typography component='h2' variant='h3' color='red' align='center'>
					Список товаров пуст!
				</Typography>
			</Box>
		</Container>
	);
}

export default EmptyList;
