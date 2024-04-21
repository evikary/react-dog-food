import { Box, Container, Typography } from '@mui/material';

function EmptyList() {
	return (
		<Container component='main' sx={{ height: 'calc(100vh - 192px - 96px)' }}>
			<Box
				display='flex'
				alignItems='center'
				justifyContent='center'
				height='100%'>
				<Typography component='h2' variant='h3' color='red' align='center'>
					Ooops! Card list is empty.
				</Typography>
			</Box>
		</Container>
	);
}

export default EmptyList;
