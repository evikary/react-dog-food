import { Box, Container } from '@mui/material';
import { productsData } from '../../post';
import { useState } from 'react';
import { ProductType } from '../../types/types-data';
import CardList from '../../components/card-list/card-list';
import SortProduct from '../../components/sort/sort';

function HomePage() {
	const [products] = useState<ProductType[]>(productsData.products);
	console.log('products', products);
	return (
		<Container disableGutters component='main' sx={{ pt: 3, pb: 3 }}>
			<SortProduct />
			<Box sx={{ height: '40px' }} />
			<CardList cards={products} />
		</Container>
	);
}

export default HomePage;
