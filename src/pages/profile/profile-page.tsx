import { Box, Button, Container, Stack, Typography } from '@mui/material';
import IcoPhone from '../../icons/ico-phone';
import IcoMail from '../../icons/ico-mail';
import { useAppSelector } from '../../hooks/useAppSelector';
import { userActions, userSelector } from '../../storage/slices/user-slice';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { authAction } from '../../storage/slices/auth-slice';
import { withProtection } from '../../HOCs/with-protection';
import { buyActions } from '../../storage/slices/buy-slice';

const ProfilePage = withProtection(() => {
	const currentUser = useAppSelector(userSelector.user);
	const dispatch = useAppDispatch();

	const logOut = () => {
		dispatch(authAction.clearToken());
		dispatch(userActions.clearUser());
		dispatch(buyActions.clearBuyCards());
	};

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
						component={Link}
						to={'/profile/my'}
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
						onClick={logOut}
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
});

export default ProfilePage;
