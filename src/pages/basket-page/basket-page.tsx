import { Box, Container, Typography } from '@mui/material';
import ButtonBack from '../../components/button/back-button';
import { useAppSelector } from '../../hooks/useAppSelector';
import { buySelector } from '../../storage/slices/buy-slice';
import BuyCardList from '../../components/buy-card-list/buy-card-list';
import { countProducts, words } from '../../utils/products';

const BasketPage = () => {
	const buyCards = useAppSelector(buySelector.cards);
	const count = countProducts(buyCards);

	return (
		<Container component='main'>
			<ButtonBack />
			<Box mb='20px'>
				<Typography
					component='span'
					sx={{ fontSize: '28px', fontWeight: '800' }}>
					{count} {words(count, ['товар', 'товара', 'товаров'])}
				</Typography>
				<Typography
					component='span'
					sx={{ fontSize: '28px', fontWeight: '300', ml: '5px' }}>
					в корзине
				</Typography>
			</Box>
			<Box display='flex' columnGap='60px'>
				<BuyCardList cards={buyCards || []} />
			</Box>
		</Container>
	);
};

export default BasketPage;
