import * as yup from 'yup';

export const updatedUserFormSchema = yup.object({
	name: yup.string().required(),
	about: yup.string().required(),
	phone: yup.string().required(),
	email: yup.string().email().required(),
});
