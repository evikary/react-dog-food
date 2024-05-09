import { Container } from '@mui/material';
import SignUpForm from '../../components/forms/sign-up-form/sign-up-form';

function SignUpPage() {
	return (
		<Container component='main' sx={{ height: 'calc(100vh - 192px - 96px)' }}>
			<SignUpForm />
		</Container>
	);
}

export default SignUpPage;
