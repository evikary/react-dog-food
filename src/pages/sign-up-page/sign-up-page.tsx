import { Container } from '@mui/material';
import SignUpForm from '../../components/forms/sign-up-form/sign-up-form';
import { withProtection } from '../../HOCs/with-protection';

const SignUpPage = withProtection(() => {
	return (
		<Container component='main'>
			<SignUpForm />
		</Container>
	);
});

export default SignUpPage;
