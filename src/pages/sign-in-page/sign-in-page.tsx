import { Container } from '@mui/material';
import SignInForm from '../../components/forms/sign-in-form/sign-in-form';
import { withProtection } from '../../HOCs/with-protection';

const SignInPage = withProtection(() => {
	return (
		<Container component='main'>
			<SignInForm />
		</Container>
	);
});

export default SignInPage;
