import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render = () => (
    <Html>
      <Head>
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin={'anonymous'}
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
