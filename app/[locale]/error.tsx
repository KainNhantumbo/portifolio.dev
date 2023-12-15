'use client';

import Package from '../../package.json';
import { useEffect } from 'react';
import { _errorPage as Container } from '../../styles/_error-page';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container>
      <section className='logo-container'>
        <div className='logo'>
          <span>{Package.website_name}</span>
        </div>
      </section>
      <section className='content-container'>
        <h1>500</h1>
        <h2>Ooops! That's an error: internal server error...</h2>
        <p>Sorry, but looks like something wrong happened on the server.</p>
        <button onClick={reset}>Retry</button>
      </section>
    </Container>
  );
}
