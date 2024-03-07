'use client';

import { useEffect } from 'react';
import { constants } from '@/shared/constants';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className='grid h-[100vh] w-full place-content-center place-items-center'>
      <section className='logo-container'>
        <div className='font-sans-display text-3xl'>
          <span>{constants.title}</span>
        </div>
      </section>
      <section className='flex flex-col items-center gap-5'>
        <h1 className='text-center font-sans-display text-6xl font-bold leading-tight text-error'>
          Something went wrong!
        </h1>

        <button
          className='mt-5 rounded-3xl border-[2px] border-solid border-font p-3 px-5 font-sans font-medium transition-colors hover:border-primary hover:text-primary '
          onClick={reset}>
          Try again
        </button>
      </section>
    </main>
  );
}
