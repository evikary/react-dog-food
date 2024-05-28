import {
	Box,
	Button,
	Container,
	TextField,
	Typography,
	Link as LinkMiu,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInMutation } from '../../../storage/api/authApi';
import { toast } from 'react-toastify';
import { getMessageFromError } from '../../../utils/error-utils';
import { UserActions } from '../../../storage/slices/user-slice';
import { authAction } from '../../../storage/slices/auth-slice';
import { SignInFormValues } from './helpers/types';
import { signInFormSchema } from './helpers/validator';
import { useGetUserQuery } from '../../../storage/api/productsApi';
import { useEffect, useState } from 'react';

function SignInForm() {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [login, setlogin] = useState<boolean>(false);
	const [signInRequestFn] = useSignInMutation();
	const { data } = useGetUserQuery(void 0, { skip: login === false });

	useEffect(() => {
		if (data) {
			dispatch(UserActions.setUser(data));
			toast.success('Вы зашли в систему!');
			navigate(location.state?.from || '/products');
		}
	}, [data]);

	const {
		control,
		handleSubmit,
		formState: { errors, isValid, isSubmitting, isSubmitted },
	} = useForm<SignInFormValues>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(signInFormSchema),
	});

	const submitHandler: SubmitHandler<SignInFormValues> = async (values) => {
		try {
			const response = await signInRequestFn(values).unwrap();

			dispatch(
				authAction.setAccessToken({ accessToken: response.accessToken })
			);

			setlogin(true);
		} catch (error) {
			toast.error(
				getMessageFromError(error, 'Не известная ошибка при попытки войти')
			);
		}
	};

	return (
		<Container component='main' maxWidth='xs'>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<Typography component='h1' fontSize='28px' fontWeight='800' mr='auto'>
					Вход
				</Typography>
				<Box
					display='flex'
					flexDirection='column'
					alignItems='center'
					component='form'
					onSubmit={handleSubmit(submitHandler)}
					noValidate
					sx={{ mt: 1 }}>
					<Controller
						name='email'
						control={control}
						render={({ field }) => (
							<TextField
								margin='normal'
								label='Почта'
								type='email'
								fullWidth
								required
								autoComplete='email'
								error={!!errors.email?.message}
								helperText={errors.email?.message}
								{...field}
							/>
						)}
					/>
					<Controller
						name='password'
						control={control}
						render={({ field }) => (
							<TextField
								label='Пароль'
								type='password'
								error={!!errors.password?.message}
								helperText={errors.password?.message}
								margin='normal'
								fullWidth
								required
								{...field}
							/>
						)}
					/>
					<LinkMiu
						underline='hover'
						sx={{
							mt: '8px',
							fontSize: '14px',
							fontWeight: '400',
							color: 'rgb(123, 142, 152)',
							ml: 'auto',
						}}>
						Восстановить пароль
					</LinkMiu>
					<LoadingButton
						type='submit'
						disabled={isSubmitted && (!isValid || isSubmitting)}
						loading={isSubmitting}
						fullWidth
						variant='contained'
						sx={{
							mt: 3,
							borderRadius: '55px',
							background: 'rgb(255, 228, 77)',
							color: 'rgb(26, 26, 26)',
							fontWeight: '700',
							width: '356px',
							height: '48px',
							boxShadow: 'none',
							textTransform: 'capitalize',
							fontSize: '16px',
						}}>
						Войти
					</LoadingButton>
				</Box>
				<Button
					component={Link}
					to='/signup'
					fullWidth
					variant='outlined'
					sx={{
						mt: 1,
						borderRadius: '55px',
						border: '1px solid rgb(236, 239, 241)',
						color: 'rgb(26, 26, 26)',
						fontWeight: '700',
						width: '356px',
						height: '48px',
						boxShadow: 'none',
						textTransform: 'capitalize',
						fontSize: '16px',
					}}>
					Регистрация
				</Button>
			</Box>
		</Container>
	);
}

export default SignInForm;
