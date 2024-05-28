import { LoadingButton } from '@mui/lab';
import { Box, FormControl, Rating, TextField, Typography } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { DataCreateFeedback, FormFeedback } from '../../../types/types-data';
import { yupResolver } from '@hookform/resolvers/yup';
import { reviewsFormSchema } from './validator';
import { useCreateReviewMutation } from '../../../storage/api/productsApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { getMessageFromError } from '../../../utils/error-utils';

interface ReviewFormProps {
	id: string;
}

const ReviewForm = ({ id }: ReviewFormProps) => {
	const navigate = useNavigate();

	const [createReviewFn] = useCreateReviewMutation();

	const {
		control,
		handleSubmit,
		formState: { isValid, isSubmitting, isSubmitted },
	} = useForm<FormFeedback>({
		defaultValues: {
			text: '',
			rating: 1,
		},
		resolver: yupResolver(reviewsFormSchema),
	});

	const submitHandler: SubmitHandler<FormFeedback> = async (values) => {
		try {
			const newValues: Omit<DataCreateFeedback, 'token'> = {
				...values,
				id: id || '',
			};
			await createReviewFn(newValues).unwrap();

			toast.success('Отзыв отправлен!');
			navigate(-1);
		} catch (error) {
			toast.error(
				getMessageFromError(error, 'Не известная ошибка при отправке отзыва')
			);
		}
	};

	return (
		<FormControl
			component='form'
			sx={{ mt: '40px' }}
			onSubmit={handleSubmit(submitHandler)}>
			<Box display='flex' width='740px' mb='40px' columnGap='12%'>
				<Typography>Общая оценка</Typography>
				<Controller
					name='rating'
					control={control}
					render={({ field: { value, onChange } }) => (
						<Rating
							value={value}
							onChange={(event, newValue) => onChange(newValue)}
						/>
					)}
				/>
			</Box>
			<Box display='flex' width='740px' justifyContent='space-between'>
				<Typography>Комментарии</Typography>
				<Controller
					name='text'
					control={control}
					render={({ field }) => (
						<TextField
							multiline
							placeholder='Поделитесь впечатлениями о товаре'
							required
							type='text'
							size='small'
							rows={4}
							sx={{
								width: '540px',
								borderRadius: '12px',
								mb: '40px',
							}}
							{...field}
						/>
					)}
				/>
			</Box>
			<LoadingButton
				type='submit'
				disabled={isSubmitted && (!isValid || isSubmitting)}
				loading={isSubmitting}
				variant='contained'
				sx={{
					borderRadius: '55px',
					background: 'rgb(255, 228, 77)',
					color: 'rgb(26, 26, 26)',
					fontSize: '16px',
					fontWeight: '700',
					width: '196px',
					height: '48px',
					mt: 'auto',
					boxShadow: 'none',
					textTransform: 'unset',
				}}>
				Отправить отзыв
			</LoadingButton>
		</FormControl>
	);
};

export default ReviewForm;
