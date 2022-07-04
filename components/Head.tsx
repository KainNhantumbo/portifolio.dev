import Head from 'next/head';

export default function HeadPage() {
	return (
		<Head>
			<meta name='author' content='Kain Nhantumbo' />
			<meta name='description' content='Kain Nhantumbo portifolio website' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link
				rel='preconnect'
				href='https://fonts.gstatic.com'
				crossOrigin={'true'}
			/>
			<link
				href='https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap'
				rel='stylesheet'
			/>
			<title>Kain Nhantumbo Portifolio</title>
		</Head>
	);
}
