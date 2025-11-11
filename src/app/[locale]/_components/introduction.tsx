'use client';

import { BubbleBackground } from '@/components/animations/animate-bubbles';
import { StatusIndicator } from '@/components/animations/animate-status';
import { AnimateText } from '@/components/animations/animate-text';
import { SocialIcons } from '@/components/social-icons';
import { cn } from '@/lib/utils';
import { useI18n } from '@/locales/client';
import { useTheme } from 'next-themes';

export const Introduction = () => {
  const translation = useI18n();
  const { theme } = useTheme();

  return (
    <BubbleBackground
      interactive={true}
      className='grid h-screen w-full grid-cols-1 place-content-center place-items-center'>
      <section
        id='home'
        className='z-50 flex w-full max-w-[1280px] flex-col gap-3 px-2 py-5 font-sans'>
        <div className='relative flex w-fit flex-col'>
          <h3 className='my-3 flex w-fit items-center gap-3 rounded-full border border-font/40 px-6 py-1 font-semibold'>
            <StatusIndicator activeColor='bg-green-500' size='md' />
            <AnimateText
              words={translation('intro.presentation')}
              textClassName={cn('leading-relaxed text-xl dark:text-white text-black')}
            />
          </h3>
          <div className='flex w-full gap-3'>
            <h1 className='my-4 w-full bg-clip-text font-sans text-4xl font-bold leading-10 text-transparent mobile-x:my-0 mobile-x:py-8 mobile-x:text-6xl lg:text-9xl'>
              <span className={'text-black dark:text-white'}>
                {translation('intro.title')}
              </span>
            </h1>
          </div>
        </div>

        <div className='flex w-full max-w-3xl flex-col gap-4 text-xl font-medium'>
          <AnimateText
            words={translation('intro.message-part-1')}
            duration={0.1}
            textClassName={cn('leading-relaxed dark:text-white text-black')}
          />
          <AnimateText
            words={translation('intro.message-part-2')}
            duration={0.1}
            textClassName={cn('leading-relaxed dark:text-white text-black')}
          />
        </div>

        <div className={'mt-6 self-start'}>
          <SocialIcons />
        </div>
      </section>
    </BubbleBackground>
  );
};
