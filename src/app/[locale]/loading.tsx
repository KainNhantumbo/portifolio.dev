import { AnimateSpinner } from '@/components/animations/animate-spinner';

export default function Loading() {
  return (
    <div className='z-[99999999999999] flex min-h-screen items-center justify-center bg-background'>
      <AnimateSpinner />
    </div>
  );
}
