import {
	Button,
	Container,
	FormControl,
	TextField,
	Typography,
} from '@mui/material';
import IcoLeft from '../../icons/ico-left';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { UserActions, userSelector } from '../../storage/slices/user-slice';
import { ChangeEvent, useState } from 'react';
import { FofmProfile } from '../../types/types-data';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { apiToken } from '../../utils/constants';

function MyDataPage() {
	const dispatch = useAppDispatch();
	const currentUser = useAppSelector(userSelector.user);
	const [form, setForm] = useState<FofmProfile>({
		name: currentUser?.name || '',
		about: currentUser?.about || '',
		phone: currentUser?.phone || '',
		email: currentUser?.email || '',
	});

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleClick = () => {
		dispatch(UserActions.fetchEditUser({ token: apiToken, user: form }));
	};

	const navigate = useNavigate();
	return (
		<Container
			component='main'
			sx={{
				height: 'calc(100vh - 192px - 96px)',
			}}>
			<Button
				variant='text'
				sx={{ padding: '6px 0' }}
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
			<Typography sx={{ fontSize: '28px', fontWeight: '800', mb: '20px' }}>
				Мои данные
			</Typography>
			<FormControl
				component='form'
				sx={{
					width: '740px',
					margin: 'auto',
					flexDirection: 'row',
					flexWrap: 'wrap',
					gap: '12px',
				}}>
				<TextField
					name='name'
					required
					label='Имя'
					type='text'
					size='small'
					defaultValue={form.name}
					sx={{ width: '364px', borderRadius: '12px' }}
					onChange={onChange}
				/>
				<TextField
					name='about'
					required
					label='Фамилия'
					type='text'
					size='small'
					defaultValue={form.about}
					sx={{ width: '364px', borderRadius: '12px' }}
					onChange={onChange}
				/>
				<TextField
					name='phone'
					required
					label='Телефон'
					type='tel'
					size='small'
					defaultValue={form.phone}
					sx={{ width: '364px', borderRadius: '12px' }}
					onChange={onChange}
				/>
				<TextField
					name='email'
					required
					label='Почта'
					type='email'
					size='small'
					defaultValue={form.email}
					sx={{ width: '364px', borderRadius: '12px' }}
					onChange={onChange}
				/>
				<Button
					type='button'
					variant='outlined'
					onClick={handleClick}
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
					Сохранить
				</Button>
			</FormControl>
		</Container>
	);
}

export default MyDataPage;
