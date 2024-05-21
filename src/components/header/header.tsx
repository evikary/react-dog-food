import { AppBar, Badge, Box, IconButton, Toolbar } from '@mui/material';
import Logo from './logo/logo';
import SearchElements from '../search/searh';
import { Favorite } from '@mui/icons-material';
import icoDog from '../../images/dog.png';
import icoBuy from '../../images/buy.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {
	ProductsContext,
	ProductsContextInterface,
} from '../../context/product-context';
import { UserContext } from '../../context/user-context';
import { favoritesProducts } from '../../utils/products';

function Header() {
	const { products } = useContext(ProductsContext) as ProductsContextInterface;
	const currentUser = useContext(UserContext);

	return (
		<AppBar
			position='static'
			sx={{
				background: 'rgb(255, 228, 77)',
				padding: '12px',
			}}>
			<Toolbar sx={{ width: '992px', margin: '0 auto' }}>
				<Link to={'/'}>
					<Logo />
				</Link>
				<SearchElements />
				<Box sx={{ flexGrow: 1 }} />
				<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
					<Link to={'/favorites'}>
						<IconButton size='large' color='inherit'>
							<Badge
								badgeContent={
									currentUser &&
									favoritesProducts(products, currentUser.id).length
								}
								color='success'>
								<Favorite sx={{ color: 'rgb(26, 26, 26)' }} />
							</Badge>
						</IconButton>
					</Link>
					<IconButton size='large' color='inherit'>
						<img src={icoBuy} alt='icoBuy' />
					</IconButton>
					<Link to={'/profile'}>
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
