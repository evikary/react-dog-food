import { Box, Container, Link, Typography } from '@mui/material';
import Logo from '../logo/logo';
import telegram from '../../images/telegram.png';
import viber from '../../images/viber.png';
import instagram from '../../images/logo-instagram.png';
import whatsapp from '../../images/logo-whatsapp.png';
import vk from '../../images/logo-vk.png';
import s from './footer.module.css';

function Footer() {
	return (
		<Box
			component='footer'
			sx={{ py: '40px', background: 'rgb(255, 228, 77)' }}>
			<Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Box
					component='div'
					sx={{ display: 'flex', flexDirection: 'column', rowGap: '46px' }}>
					<Logo />
					<Link
						href='#'
						underline='hover'
						sx={{ fontSize: '9px', color: 'rgb(26, 26, 26)' }}>
						© «Интернет-магазин DogFood.ru»
					</Link>
				</Box>
				<Box
					component='div'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}>
					<Link
						href='#'
						underline='hover'
						sx={{
							fontSize: '12px',
							fontWeight: '600',
							color: 'rgb(26, 26, 26)',
						}}>
						Каталог
					</Link>
					<Link
						href='#'
						underline='hover'
						sx={{
							fontSize: '12px',
							fontWeight: '600',
							color: 'rgb(26, 26, 26)',
						}}>
						Акции
					</Link>
					<Link
						href='#'
						underline='hover'
						sx={{
							fontSize: '12px',
							fontWeight: '600',
							color: 'rgb(26, 26, 26)',
						}}>
						Новости
					</Link>
					<Link
						href='#'
						underline='hover'
						sx={{
							fontSize: '12px',
							fontWeight: '600',
							color: 'rgb(26, 26, 26)',
						}}>
						Отзывы
					</Link>
				</Box>
				<Box
					component='div'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}>
					<Link
						href='#'
						underline='hover'
						sx={{
							fontSize: '12px',
							fontWeight: '600',
							color: 'rgb(26, 26, 26)',
						}}>
						Оплата и доставка
					</Link>
					<Link
						href='#'
						underline='hover'
						sx={{
							fontSize: '12px',
							fontWeight: '600',
							color: 'rgb(26, 26, 26)',
						}}>
						Часто спрашивают
					</Link>
					<Link
						href='#'
						underline='hover'
						sx={{
							fontSize: '12px',
							fontWeight: '600',
							color: 'rgb(26, 26, 26)',
						}}>
						Обратная связь
					</Link>
					<Link
						href='#'
						underline='hover'
						sx={{
							fontSize: '12px',
							fontWeight: '600',
							color: 'rgb(26, 26, 26)',
						}}>
						Контакты
					</Link>
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
						<Link
							href='#'
							underline='hover'
							sx={{
								fontSize: '12px',
								fontWeight: '400',
								color: 'rgb(26, 26, 26)',
							}}>
							dogfood.ru@gmail.com
						</Link>
					</Box>
					<Box
						component='div'
						sx={{
							display: 'flex',
							columnGap: '12px',
						}}>
						<Link href='#'>
							<img src={telegram} alt='telegram' className={s.social} />
						</Link>
						<Link href='#'>
							<img src={whatsapp} alt='whatsapp' className={s.social} />
						</Link>
						<Link href='#'>
							<img src={viber} alt='viber' className={s.social} />
						</Link>
						<Link href='#'>
							<img src={instagram} alt='instagram' className={s.social} />
						</Link>
						<Link href='#'>
							<img src={vk} alt='vk' className={s.social} />
						</Link>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}

export default Footer;
