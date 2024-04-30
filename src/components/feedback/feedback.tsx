import { Box, Stack, Typography } from '@mui/material';
import { ReviewsType } from '../../types/types-data';
import { getDate } from '../../utils/products';

interface FeedbackProps {
	review: ReviewsType;
}

function Feedback({ review }: FeedbackProps) {
	return (
		<Stack mb='40px'>
			<Box display='flex' mb='8px' gap='8px' alignItems='center'>
				<Typography component='h4' variant='h6' fontWeight='800'>
					{review.user.name}
				</Typography>
				<Typography color='rgb(123, 142, 152)'>
					{getDate(review.createdAt)}
				</Typography>
			</Box>
			<Typography>{review.text}</Typography>
		</Stack>
	);
}

export default Feedback;
