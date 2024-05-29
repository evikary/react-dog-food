import { Box, Container, Link as LinkMiu, Typography } from '@mui/material';
import Logo from '../header/logo/logo';
import telegram from '../../images/telegram.png';
import viber from '../../images/viber.png';
import instagram from '../../images/logo-instagram.png';
import whatsapp from '../../images/logo-whatsapp.png';
import vk from '../../images/logo-vk.png';
import s from './footer.module.css';
import { Link } from 'react-router-dom';
import { path } from '../../app/routes';

function Footer() {
	return (
		<Box
			component='footer'
			sx={{ py: '40px', background: 'rgb(255, 228, 77)' }}>
			<Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Box
					component='div'
					sx={{ display: 'flex', flexDirection: 'column', rowGap: '46px' }}>
					<Link to={path.home}>
						<Logo />
					</Link>
					<LinkMiu
						href='#'
						underline='hover'
						sx={{ fontSize: '9px', color: 'rgb(26, 26, 26)' }}>
						© «Интернет-магазин DogFood.ru»
					</LinkMiu>
				</Box>
				<Box
					component='div'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}>
					<LinkMiu
						component={Link}
						to={path.products}
						underline='hover'
						sx={{
							fontSize: '12px',
							fontWeight: '600',
							color: 'rgb(26, 26, 26)',
						}}>
						Каталог
					</LinkMiu>
					<LinkMiu
						href='#'
						underline='hover'
						sx={{
							fontSize: '12px',
							fontWeight: '600',
							color: 'rgb(26, 26, 26)',
						}}>
						Акции
					</LinkMiu>
					<LinkMiu
						href='#'
						underline='hover'
						sx={{
							fontSize: '12px',
							fontWeight: '600',
							color: 'rgb(26, 26, 26)',
						}}>
						Новости
					</LinkMiu>
					<LinkMiu
						href='#'
						underline='hover'
						sx={{
							fontSize: '12px',
							fontWeight: '600',
							color: 'rgb(26, 26, 26)',
						}}>
						Отзывы
					</LinkMiu>
				</Box>
				<Box
					component='div'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}>
					<LinkMiu
						href='#'
						underline='hover'
						sx={{
							fontSize: '12px',
							fontWeight: '600',
							color: 'rgb(26, 26, 26)',
						}}>
						Оплата и доставка
					</LinkMiu>
					<LinkMiu
						href='#'
						underline='hover'
						sx={{
							fontSize: '12px',
							fontWeight: '600',
							color: 'rgb(26, 26, 26)',
						}}>
						Часто спрашивают
					</LinkMiu>
					<LinkMiu
						href='#'
						underline='hover'
						sx={{
							fontSize: '12px',
							fontWeight: '600',
							color: 'rgb(26, 26, 26)',
						}}>
						Обратная связь
					</LinkMiu>
					<LinkMiu
						href='#'
						underline='hover'
						sx={{
							fontSize: '12px',
							fontWeight: '600',
							color: 'rgb(26, 26, 26)',
						}}>
						Контакты
					</LinkMiu>
				</Box>
				<Box
					component='div'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}>
					<Typography
						component='p'
						sx={{ fontSize: '16px', fontWeight: '700', lineHeight: '20px' }}>
						Мы на связи
					</Typography>
					<Box
						component='div'
						sx={{
							display: 'flex',
							flexDirection: 'column',
						}}>
						<Typography
							component='p'
							sx={{ fontSize: '16px', fontWeight: '700', lineHeight: '20px' }}>
							8 (999) 00-00-00
						</Typography>
						<LinkMiu
							href='#'
							underline='hover'
							sx={{
								fontSize: '12px',
								fontWeight: '400',
								color: 'rgb(26, 26, 26)',
							}}>
							dogfood.ru@gmail.com
						</LinkMiu>
					</Box>
					<Box
						component='div'
						sx={{
							display: 'flex',
							columnGap: '12px',
						}}>
						<LinkMiu href='#'>
							<img src={telegram} alt='telegram' className={s.social} />
						</LinkMiu>
						<LinkMiu href='#'>
							<img src={whatsapp} alt='whatsapp' className={s.social} />
						</LinkMiu>
						<LinkMiu href='#'>
							<img src={viber} alt='viber' className={s.social} />
						</LinkMiu>
						<LinkMiu href='#'>
							<img src={instagram} alt='instagram' className={s.social} />
						</LinkMiu>
						<LinkMiu href='#'>
							<img src={vk} alt='vk' className={s.social} />
						</LinkMiu>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}

export default Footer;
