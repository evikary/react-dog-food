import { AppBar, Badge, Box, IconButton, Toolbar } from '@mui/material';
import Logo from './logo/logo';
import SearchElements from '../search/searh';
import { FavoriteBorder } from '@mui/icons-material';
import icoDog from '../../images/dog.png';
import icoBuy from '../../images/buy.png';
import { Link } from 'react-router-dom';

function Header() {
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
					<IconButton size='large' color='inherit'>
						<Badge badgeContent={12} color='success'>
							<FavoriteBorder sx={{ color: 'rgb(26, 26, 26)' }} />
						</Badge>
					</IconButton>
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
