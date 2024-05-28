import { Grid } from '@mui/material';
import CardProduct from '../card-product/card-product';
import { ProductType } from '../../types/types-data';
import EmptyList from '../empty-list/empty-list';
import { withQuery } from '../../HOCs/with-query';

interface CardListProps {
	products: ProductType[];
}

const CardList = withQuery(({ products }: CardListProps) => {
	if (!products.length) {
		return <EmptyList />;
	}

	return (
		<>
			<Grid container rowSpacing={{ xs: 5 }} columnSpacing={{ xs: 1, sm: 2 }}>
				{products.map((elem) => (
					<CardProduct key={elem.id} product={elem} />
				))}
			</Grid>
		</>
	);
});

export default CardList;
