import type { NextPage } from 'next';
import HeadPage from '../components/Head';
import { HomeContainer as Container } from '../styles/home';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';

const Home: NextPage = () => {
	return (
		<>
			<HeadPage />
			<Header />
			<PageLayout />
			<Container></Container>
			<Footer />
		</>
	);
};

export default Home;
