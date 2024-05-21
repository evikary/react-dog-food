import { Box, Button, Container, Stack, Typography } from '@mui/material';
import IcoPhone from '../../icons/ico-phone';
import IcoMail from '../../icons/ico-mail';
import { useContext } from 'react';
import { UserContext } from '../../context/user-context';

function ProfilePage() {
	const currentUser = useContext(UserContext);
	return (
		<Container component='main'>
			<Box sx={{ width: '617px', pt: '20px', margin: 'auto' }}>
				<Typography sx={{ fontSize: '28px', fontWeight: '800', mb: '20px' }}>
					Профиль
				</Typography>
				<Stack>
					<Typography sx={{ fontSize: '20px', fontWeight: '800' }}>
						{currentUser?.name}
					</Typography>
					<Box sx={{ display: 'flex' }}>
						<IcoPhone />
						<Typography
							component='span'
							sx={{ fontSize: '12px', fontWeight: '400' }}>
							{currentUser?.phone}
						</Typography>
					</Box>
					<Box sx={{ display: 'flex' }}>
						<IcoMail />
						<Typography
							component='span'
							sx={{ fontSize: '12px', fontWeight: '400' }}>
							{currentUser?.email}
						</Typography>
					</Box>
					<Button
						variant='outlined'
						sx={{
							width: '97px',
							height: '32px',
							borderRadius: '87px',
							color: 'rgb(26, 26, 26)',
							fontSize: '12px',
							fontWeight: '700',
							borderColor: 'rgb(26, 26, 26)',
							mt: '25px',
							textTransform: 'capitalize',
						}}>
						Изменить
					</Button>
					<Button
						variant='outlined'
						sx={{
							width: '75px',
							height: '32px',
							borderRadius: '87px',
							color: 'rgb(26, 26, 26)',
							fontSize: '12px',
							fontWeight: '700',
							borderColor: 'rgb(26, 26, 26)',
							mt: '40px',
							textTransform: 'capitalize',
						}}>
						Выйти
					</Button>
				</Stack>
			</Box>
		</Container>
	);
}

export default ProfilePage;
