import { Button, Paper } from '@mui/material';

function SortProduct() {
	return (
		<Paper
			elevation={2}
			sx={{
				display: 'flex',
				columnGap: '16px',
				mt: '50px',
				mb: '40px',
				padding: '12px 16px',
			}}>
			<Button
				variant='text'
				size='small'
				sx={{
					fontSize: '14px',
					fontWeight: '400',
					lineHeight: '20px',
					color: 'rgb(26, 26, 26)',
				}}>
				Популярные
			</Button>
			<Button
				variant='text'
				size='small'
				sx={{
					fontSize: '14px',
					fontWeight: '400',
					lineHeight: '20px',
					color: 'rgb(123, 142, 152)',
				}}>
				Новинки
			</Button>
			<Button
				variant='text'
				size='small'
				sx={{
					fontSize: '14px',
					fontWeight: '400',
					lineHeight: '20px',
					color: 'rgb(123, 142, 152)',
				}}>
				Сначала дешёвые
			</Button>
			<Button
				variant='text'
				size='small'
				sx={{
					fontSize: '14px',
					fontWeight: '400',
					lineHeight: '20px',
					color: 'rgb(123, 142, 152)',
				}}>
				Сначала дорогие
			</Button>
			<Button
				variant='text'
				size='small'
				sx={{
					fontSize: '14px',
					fontWeight: '400',
					lineHeight: '20px',
					color: 'rgb(123, 142, 152)',
				}}>
				По рейтингу
			</Button>
			<Button
				variant='text'
				size='small'
				sx={{
					fontSize: '14px',
					fontWeight: '400',
					lineHeight: '20px',
					color: 'rgb(123, 142, 152)',
				}}>
				По скидке
			</Button>
		</Paper>
	);
}

export default SortProduct;
