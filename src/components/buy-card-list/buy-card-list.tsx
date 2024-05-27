import {
	Box,
	Checkbox,
	Divider,
	Paper,
	Stack,
	Typography,
} from '@mui/material';
import BuyCard from '../buy-card/buy-card';
import { StateBuyCard, buyActions } from '../../storage/slices/buy-slice';
import EmptyList from '../empty-list/empty-list';
import PlaceOnOrder from '../../pages/basket-page/place-on-order/place-on-order';
import { countProducts } from '../../utils/products';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';

interface BuyCardList {
	cards: StateBuyCard[];
}

const BuyCardList = ({ cards }: BuyCardList) => {
	const [check, setCheck] = useState(false);
	const dispatch = useAppDispatch();

	useEffect(() => {
		handleChangePrimaryBox();
	}, [cards]);

	const allSum = useCallback(() => {
		return cards.reduce(
			(acc, item) => (item.checked ? acc + item.price * item.count : acc),
			0
		);
	}, [cards]);

	const allDiscount = useCallback(() => {
		return cards.reduce(
			(acc, item) => (item.checked ? acc + item.discount * item.count : acc),
			0
		);
	}, [cards]);

	const productsCount = countProducts(cards);

	function handleChangePrimaryBox() {
		setCheck(cards.every((item) => item.checked === true));
	}

	const handleAllCheckBox = () => {
		dispatch(buyActions.changeAllChecked(!check));
	};

	if (!cards.length) {
		return <EmptyList />;
	}

	return (
		<>
			<Stack rowGap='5px'>
				<Box display='flex' alignItems='center' columnGap='10px' mb='20px'>
					<Checkbox
						inputProps={{ 'aria-label': 'controlled' }}
						checked={check}
						onChange={handleAllCheckBox}
					/>
					<Typography
						component='p'
						sx={{ fontSize: '20px', fontWeight: '800' }}>
						Выбрать все товары
					</Typography>
				</Box>
				{cards.map((item) => {
					return <BuyCard key={item.idProduct} info={{ ...item }} />;
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
						Товары ({productsCount})
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
						{allSum() - allDiscount()} ₽
					</Typography>
				</Box>
				<PlaceOnOrder />
			</Paper>
		</>
	);
};

export default BuyCardList;
