import { Grid, Pagination, Stack, Typography } from '@mui/material';
import CardProduct from '../card-product/card-product';
import { ProductType } from '../../types/types-data';
import usePagination from '../../hooks/usePagination';
import { ChangeEvent } from 'react';

interface CardListProps {
	cards: ProductType[];
}

const PER_PAGE = 8;

function CardList({ cards }: CardListProps) {
	const { currentPage, getCurrentData, setPagePaginated, countPages } =
		usePagination<ProductType>(cards, PER_PAGE);

	if (!cards.length) {
		return (
			<Typography component='h2' variant='h3' color='red' align='center'>
				Ooops! Card list is empty.
			</Typography>
		);
	}

	function handlePageChange(event: ChangeEvent<unknown>, page: number) {
		setPagePaginated(page);
	}

	return (
		<>
			<Grid container rowSpacing={{ xs: 5 }} columnSpacing={{ xs: 1, sm: 2 }}>
				{getCurrentData().map((elem) => (
					<CardProduct key={elem.id} {...elem} />
				))}
			</Grid>
			<Stack spacing={2} alignItems='center' sx={{ mt: '30px' }}>
				<Typography
					component='p'
					sx={{ fontSize: '16px', fontWeight: '400', mb: '2px' }}>
					Страница {currentPage}
				</Typography>
				<Pagination
					count={countPages}
					page={currentPage}
					onChange={handlePageChange}
				/>
			</Stack>
		</>
	);
}

export default CardList;
