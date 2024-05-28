import * as yup from 'yup';

export const signUpFormSchema = yup.object({
	email: yup.string().email().required('Это обязательное поле'),
	password: yup
		.string()
		.required('Это обязательное поле')
		.min(6, 'Не менее 6 символов')
		.max(24, 'Не более 24 символов'),
});
