import { AppBar, Badge, Box, IconButton, Toolbar } from '@mui/material';
import Logo from './logo/logo';
import SearchElements from '../search/searh';
import { Favorite } from '@mui/icons-material';
import icoDog from '../../images/dog.png';
import icoBuy from '../../images/buy.png';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { userSelector } from '../../storage/slices/user-slice';
import { useGetUserQuery } from '../../storage/api/productsApi';
import { buySelector } from '../../storage/slices/buy-slice';
import { countProducts } from '../../utils/products';
import { path } from '../../app/routes';

function Header() {
	const { data } = useGetUserQuery();
	const buyData = useAppSelector(buySelector.cards);
	const currentUser = useAppSelector(userSelector.user);

	return (
		<AppBar
			position='static'
			sx={{
				background: 'rgb(255, 228, 77)',
				padding: '12px',
			}}>
			<Toolbar sx={{ width: '992px', margin: '0 auto' }}>
				<Link to={path.home}>
					<Logo />
				</Link>
				<SearchElements />
				<Box sx={{ flexGrow: 1 }} />
				<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
					<Link to={path.favorites}>
						<IconButton size='large' color='inherit'>
							<Badge
								badgeContent={currentUser && data?.likes && data.likes.length}
								color='success'>
								<Favorite sx={{ color: 'rgb(26, 26, 26)' }} />
							</Badge>
						</IconButton>
					</Link>
					<Link to={path.basket}>
						<IconButton size='large' color='inherit'>
							<Badge
								badgeContent={currentUser && countProducts(buyData)}
								color='success'>
								<img src={icoBuy} alt='icoBuy' />
							</Badge>
						</IconButton>
					</Link>
					<Link to={path.profile}>
						<IconButton
							size='large'
							edge='end'
							aria-label='account of current user'
							aria-haspopup='true'
							color='inherit'>
							<img src={icoDog} alt='icoDog' />
						</IconButton>
					</Link>
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
