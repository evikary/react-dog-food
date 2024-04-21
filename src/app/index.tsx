import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import HomePage from '../pages/home/home-page';
import '../styles.css';

export const App = () => {
	return (
		<>
			<Header />
			<HomePage />
			<Footer />
		</>
	);
};
