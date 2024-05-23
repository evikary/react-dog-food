import {
	Box,
	CardMedia,
	Checkbox,
	Divider,
	IconButton,
	Typography,
} from '@mui/material';
import IcoBin from '../../icons/ico-bin';
import { useGetProductByIdQuery } from '../../storage/api/productsApi';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { buyActions } from '../../storage/slices/buy-slice';
import CounterButton from '../button/counter-button/counter-button';

interface BuyCardProps {
	id: string;
	count: number;
	stock: number;
	price: number;
	discount: number;
	check: boolean;
}

const BuyCard = ({
	id,
	count,
	stock,
	price,
	discount,
	check,
}: BuyCardProps) => {
	const { data } = useGetProductByIdQuery(id);
	const dispatch = useAppDispatch();

	const endPrice = (price: number, discount: number) => {
		return price - discount;
	};

	const handleDeleteProduct = (id: string | undefined) => {
		if (id) {
			dispatch(buyActions.removeBuyCard(id));
		}
	};

	const handleChangecheckBox = () => {
		dispatch(buyActions.changeChecked(id));
	};

	return (
		<div>
			<Box
				display='flex'
				width='620px'
				alignItems='center'
				justifyContent='space-between'
				mb='20px'>
				<Checkbox
					inputProps={{ 'aria-label': 'controlled' }}
					onChange={handleChangecheckBox}
					checked={check}
				/>
				<CardMedia
					component='img'
					image={data?.images}
					alt={data?.name}
					sx={{ height: '62px', width: '62px', objectFit: 'contain' }}
				/>
				<Box width='244px'>
					<Typography
						component='p'
						sx={{ fontSize: '14px', fontWeight: '700', mb: '8px' }}>
						{data?.name}
					</Typography>
					<Typography
						component='p'
						sx={{
							fontSize: '12px',
							fontWeight: '400',
							color: 'rgb(123, 142, 152)',
						}}>
						{data?.wight}
					</Typography>
				</Box>
				<CounterButton
					count={count}
					stock={stock}
					idProduct={id}
					price={price}
					discount={discount}
				/>
				{data?.discount ? (
					<Box>
						<Typography
							component='p'
							sx={{
								fontSize: '14px',
								fontWeight: '700',
								textDecoration: 'line-through',
							}}>
							{data?.price} ₽
						</Typography>
						<Typography
							component='p'
							sx={{ fontSize: '20px', fontWeight: '800', color: 'red' }}>
							{endPrice(data?.price || 0, data?.discount || 0)} ₽
						</Typography>
					</Box>
				) : (
					<Typography
						component='p'
						sx={{ fontSize: '20px', fontWeight: '800' }}>
						{data?.price} ₽
					</Typography>
				)}
				<IconButton onClick={() => handleDeleteProduct(data?.id)}>
					<IcoBin />
				</IconButton>
			</Box>
			<Divider />
		</div>
	);
};

export default BuyCard;
