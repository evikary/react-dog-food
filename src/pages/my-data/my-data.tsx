import { Container, Typography } from '@mui/material';
import ButtonBack from '../../components/button/back-button';
import UpdatedUserForm from '../../components/forms/updated-user-form/updated-user-form';

function MyDataPage() {
	return (
		<Container
			component='main'
			sx={{
				height: 'calc(100vh - 192px - 96px)',
			}}>
			<ButtonBack />
			<Typography sx={{ fontSize: '28px', fontWeight: '800', mb: '20px' }}>
				Мои данные
			</Typography>
			<UpdatedUserForm />
		</Container>
	);
}

export default MyDataPage;
