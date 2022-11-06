import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AppContext from '../context/AppContext';
import { AppContainer as Container } from '../styles/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppContext>
			<Container>
				<Component {...pageProps} />
			</Container>
		</AppContext>
	);
}

export default MyApp;
