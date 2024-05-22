import { Box, Divider, Paper, Stack, Typography } from '@mui/material';
import BuyCard from '../buy-card/buy-card';
import { StateBuyCard } from '../../storage/slices/buy-slice';
import EmptyList from '../empty-list/empty-list';
import PlaceOnOrder from '../../pages/basket-page/place-on-order/place-on-order';

interface BuyCardList {
	cards: StateBuyCard[];
}

const BuyCardList = ({ cards }: BuyCardList) => {
	if (!cards.length) {
		return <EmptyList />;
	}

	const allSum = () => {
		return cards.reduce((acc, item) => acc + item.price * item.count, 0);
	};

	const allDiscount = () => {
		return cards.reduce((acc, item) => acc + item.discount * item.count, 0);
	};

	const endSum = () => {
		return allSum() - allDiscount();
	};

	return (
		<>
			<Stack rowGap='5px'>
				{cards.map((item) => {
					return (
						<BuyCard
							key={item.idProduct}
							id={item.idProduct}
							count={item.count}
						/>
					);
				})}
			</Stack>
			<Paper
				elevation={3}
				square={false}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					p: '16px',
					borderRadius: '20px',
				}}>
				<Typography
					component='h5'
					sx={{ fontSize: '20px', fontWeight: '800', mb: '25px' }}>
					Ваша корзина
				</Typography>
				<Box
					width='280px'
					display='flex'
					justifyContent='space-between'
					mb='16px'>
					<Typography
						component='p'
						sx={{ fontSize: '14px', fontWeight: '400' }}>
						Товары
					</Typography>
					<Typography
						component='p'
						sx={{ fontSize: '14px', fontWeight: '600' }}>
						{allSum()} ₽
					</Typography>
				</Box>
				<Box
					width='280px'
					display='flex'
					justifyContent='space-between'
					mb='16px'>
					<Typography
						component='p'
						sx={{ fontSize: '14px', fontWeight: '400' }}>
						Скидка
					</Typography>
					<Typography
						component='p'
						sx={{ fontSize: '14px', fontWeight: '600' }}>
						- {allDiscount()} ₽
					</Typography>
				</Box>
				<Divider />
				<Box
					width='280px'
					display='flex'
					alignItems='center'
					justifyContent='space-between'
					my='20px'>
					<Typography
						component='p'
						sx={{ fontSize: '14px', fontWeight: '800' }}>
						Общая стоимость
					</Typography>
					<Typography
						component='p'
						sx={{ fontSize: '20px', fontWeight: '800' }}>
						{endSum()} ₽
					</Typography>
				</Box>
				<PlaceOnOrder />
			</Paper>
		</>
	);
};

export default BuyCardList;
