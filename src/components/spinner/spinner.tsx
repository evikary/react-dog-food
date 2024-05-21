import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

function Spinner() {
	return (
		<Container component='main'>
			<Box
				height='100%'
				display='flex'
				alignItems='center'
				justifyContent='center'>
				<CircularProgress />
			</Box>
		</Container>
	);
}

export default Spinner;
