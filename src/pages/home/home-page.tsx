import { Box, Button, Container, Stack, Typography } from '@mui/material';
import IcoRight from '../../icons/ico-right';
import DogImage from './dog-image/dog-image';
import { Link } from 'react-router-dom';

function HomePage() {
	return (
		<Container
			disableGutters
			component='main'
			sx={{
				pt: 5,
				pb: 3,
				background: 'rgb(255, 228, 77)',
			}}>
			<Box display='flex' width='1000px' m='auto'>
				<Stack>
					<Typography
						component='h1'
						variant='h3'
						sx={{ fontWeight: '900', mb: '20px' }}>
						Крафтовые <br />
						лакомства для <br />
						собак
					</Typography>
					<Typography
						component='p'
						sx={{ fontSize: '24px', fontWeight: '300', mb: '20px' }}>
						Всегда свежие лакомства ручной
						<br /> работы с доставкой по России и<br /> Миру
					</Typography>
					<Link to='/products' style={{ textDecoration: 'none' }}>
						<Button
							variant='contained'
							sx={{
								display: 'flex',
								columnGap: '8px',
								width: '157px',
								height: '56px',
								borderRadius: '60px',
								background: 'rgb(255, 255, 255)',
							}}>
							<Typography
								component='span'
								sx={{
									fontSize: '20px',
									fontWeight: '800',
									color: 'rgb(26, 26, 26)',
								}}>
								Каталог
							</Typography>
							<IcoRight />
						</Button>
					</Link>
				</Stack>
				<DogImage />
			</Box>
		</Container>
	);
}

export default HomePage;
