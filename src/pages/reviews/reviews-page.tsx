import { Box, Container, Divider, Typography } from '@mui/material';
import ButtonBack from '../../components/button/back-button';
import { useGetProductByIdQuery } from '../../storage/api/productsApi';
import ReviewForm from '../../components/forms/review-form/review-form';
import { useParams } from 'react-router-dom';
import { withProtection } from '../../HOCs/with-protection';

const ReviewsPage = withProtection(() => {
	const { idProduct } = useParams();

	const { data } = useGetProductByIdQuery(idProduct!, {
		skip: idProduct === undefined,
	});

	return (
		<Container component='main' sx={{ height: 'calc(100vh - 192px - 96px)' }}>
			<ButtonBack />
			<Box>
				{data && (
					<Typography component='h2' variant='h5' fontWeight='800' mb='20px'>
						Отзыв о товаре {data.name}
					</Typography>
				)}
				<Divider />
				<ReviewForm id={idProduct!} />
			</Box>
		</Container>
	);
});

export default ReviewsPage;
