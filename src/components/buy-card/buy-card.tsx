import {
	Box,
	Button,
	CardMedia,
	Divider,
	IconButton,
	Typography,
} from '@mui/material';
import IcoBin from '../../icons/ico-bin';
import { useGetProductByIdQuery } from '../../storage/api/productsApi';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { buyActions } from '../../storage/slices/buy-slice';

interface BuyCardProps {
	id: string;
	count: number;
}

const BuyCard = ({ id, count }: BuyCardProps) => {
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

	return (
		<div>
			<Box
				display='flex'
				width='620px'
				alignItems='center'
				justifyContent='space-between'
				mb='20px'>
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
				<Box
					display='flex'
					width='109px'
					height='48px'
					alignItems='center'
					justifyContent='space-around'
					sx={{
						border: '1px solid rgb(207, 216, 220)',
						borderRadius: '100px',
					}}>
					<Button
						variant='text'
						disabled
						sx={{
							fontSize: '21px',
							fontWeight: '700',
							color: 'rgb(26, 26, 26)',
							padding: '0',
							minWidth: '24px',
						}}>
						-
					</Button>
					<Typography sx={{ fontSize: '21px', fontWeight: '700' }}>
						{count}
					</Typography>
					<Button
						variant='text'
						sx={{
							fontSize: '21px',
							fontWeight: '700',
							color: 'rgb(26, 26, 26)',
							padding: '0',
							minWidth: '24px',
						}}>
						+
					</Button>
				</Box>
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
