import { yupResolver } from '@hookform/resolvers/yup';
import { FormControl, TextField } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { userActions, userSelector } from '../../../storage/slices/user-slice';
import { FofmProfile } from '../../../types/types-data';
import { updatedUserFormSchema } from './validator';
import { LoadingButton } from '@mui/lab';
import { toast } from 'react-toastify';
import { getMessageFromError } from '../../../utils/error-utils';
import { useUpdatedUserMutation } from '../../../storage/api/productsApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UpdatedUserForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const currentUser = useAppSelector(userSelector.user);
	const [updatedUserRequestFn] = useUpdatedUserMutation();

	const {
		control,
		handleSubmit,
		formState: { errors, isValid, isSubmitting, isSubmitted },
	} = useForm<FofmProfile>({
		defaultValues: {
			name: currentUser?.name,
			about: currentUser?.about,
			phone: currentUser?.phone,
			email: currentUser?.email,
		},
		resolver: yupResolver(updatedUserFormSchema),
	});

	const submitHandler: SubmitHandler<FofmProfile> = async (values) => {
		try {
			const response = await updatedUserRequestFn(values).unwrap();
			dispatch(userActions.setUser(response));
			toast.success('Данные о пользователе изменены!');
			navigate(-1);
		} catch (error) {
			toast.error(
				getMessageFromError(
					error,
					'Не известная ошибка при изменении пользователя'
				)
			);
		}
	};

	return (
		<FormControl
			component='form'
			onSubmit={handleSubmit(submitHandler)}
			sx={{
				width: '740px',
				margin: 'auto',
				flexDirection: 'row',
				flexWrap: 'wrap',
				gap: '12px',
			}}>
			<Controller
				name='name'
				control={control}
				render={({ field }) => (
					<TextField
						required
						label='Имя'
						type='text'
						size='small'
						sx={{ width: '364px', borderRadius: '12px' }}
						error={!!errors.email?.message}
						helperText={errors.email?.message}
						{...field}
					/>
				)}
			/>
			<Controller
				name='about'
				control={control}
				render={({ field }) => (
					<TextField
						required
						label='Фамилия'
						type='text'
						size='small'
						sx={{ width: '364px', borderRadius: '12px' }}
						error={!!errors.email?.message}
						helperText={errors.email?.message}
						{...field}
					/>
				)}
			/>
			<Controller
				name='phone'
				control={control}
				render={({ field }) => (
					<TextField
						required
						label='Телефон'
						type='tel'
						size='small'
						sx={{ width: '364px', borderRadius: '12px' }}
						error={!!errors.email?.message}
						helperText={errors.email?.message}
						{...field}
					/>
				)}
			/>
			<Controller
				name='email'
				control={control}
				render={({ field }) => (
					<TextField
						required
						label='Почта'
						type='email'
						size='small'
						sx={{ width: '364px', borderRadius: '12px' }}
						error={!!errors.email?.message}
						helperText={errors.email?.message}
						{...field}
					/>
				)}
			/>
			<LoadingButton
				type='submit'
				disabled={isSubmitted && (!isValid || isSubmitting)}
				loading={isSubmitting}
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
				Сохранить
			</LoadingButton>
		</FormControl>
	);
};

export default UpdatedUserForm;
