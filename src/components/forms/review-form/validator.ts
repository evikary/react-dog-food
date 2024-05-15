import * as yup from 'yup';

export const reviewsFormSchema = yup.object({
	text: yup.string().required(),
	rating: yup.number().required(),
});
