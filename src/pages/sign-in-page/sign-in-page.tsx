import { Container } from '@mui/material';
import SignInForm from '../../components/forms/sign-in-form/sign-in-form';

function SignInPage() {
	return (
		<Container component='main' sx={{ height: 'calc(100vh - 192px - 96px)' }}>
			<SignInForm />
		</Container>
	);
}

export default SignInPage;
