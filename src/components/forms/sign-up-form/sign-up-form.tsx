import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { SignUpFormValues } from './helpers/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpFormSchema } from './helpers/validator';
import LoadingButton from '@mui/lab/LoadingButton';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { useSignUpMutation } from '../../../storage/api/authApi';
import { UserActions } from '../../../storage/slices/user-slice';
import { authAction } from '../../../storage/slices/auth-slice';
import { getMessageFromError } from '../../../utils/error-utils';

function SignUpForm() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [signUpRequestFn] = useSignUpMutation();

	// инициализируем react-hook-form
	const {
		control,
		handleSubmit,
		formState: { errors, isValid, isSubmitting, isSubmitted },
	} = useForm<SignUpFormValues>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(signUpFormSchema),
	});

	const submitHandler: SubmitHandler<SignUpFormValues> = async (values) => {
		console.log('values', values);
		try {
			const response = await signUpRequestFn(values).unwrap();
			console.log('response', response);
			dispatch(UserActions.setUser(response.user));
			dispatch(
				authAction.setAccessToken({ accessToken: response.accessToken })
			);

			toast.success('Вы успешно зарегистрированы!');
			navigate('/');
		} catch (error) {
			console.log(error);
			toast.error(
				getMessageFromError(
					error,
					'Не известная ошибка при регистрации пользователя'
				)
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
				}}>
				<Typography component='h1' fontSize='28px' fontWeight='800'>
					Регистрация
				</Typography>
				<Box
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

					<Typography
						mt='24px'
						fontSize='12px'
						sx={{ color: 'rgb(123, 142, 152)' }}>
						Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и
						Политикой конфиденциальности и соглашаетесь на информационную
						рассылку.
					</Typography>

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
						Зарегистрироваться
					</LoadingButton>
				</Box>
				<Button
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
					Войти
				</Button>
			</Box>
		</Container>
	);
}

export default SignUpForm;
