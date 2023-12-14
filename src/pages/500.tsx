<<<<<<<< HEAD:app/error.tsx
'use client';

import Package from '../package.json';
import { useEffect } from 'react';
========
import Package from '../../package.json';
import { useRouter } from 'next/router';
>>>>>>>> parent of 06d8e11 (refactor: removed react-icons. Moved source from /src to /(root)):src/pages/500.tsx
import { _errorPage as Container } from '../styles/_error-page';

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
