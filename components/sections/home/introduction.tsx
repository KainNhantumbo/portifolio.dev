'use client';

import { BubbleBackground } from '@/components/animations/animate-bubbles';
import { useI18n } from '@/locales/client';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import { AnimateText } from '../../animations/animate-text';

export const Introduction = () => {
  const translation = useI18n();

  const socialAnchors = [
    {
      name: translation('footer.anchors.github'),
      icon: GithubIcon,
      link: 'https://github.com/KainNhantumbo'
    },
    {
      name: translation('footer.anchors.linkedIn'),
      icon: LinkedinIcon,
      link: 'https://www.linkedin.com/in/kain-nhantumbo/?locale=en_US'
    }
  ];

  return (
    <BubbleBackground
      interactive={true}
      className='grid h-screen w-full grid-cols-1 place-content-center place-items-center'>
      <section
        id='home'
        className='z-50 flex w-full max-w-[1280px] flex-col gap-3 px-2 py-5 font-sans'>
        <div className='relative flex w-fit flex-col'>
          <h3 className='p-0 text-sm font-semibold'>
            <AnimateText words={translation('intro.presentation')} />
          </h3>
          <div className='flex w-full gap-3'>
            <h1 className='my-4 w-full bg-clip-text font-sans text-4xl font-bold leading-10 text-transparent mobile-x:my-0 mobile-x:py-8 mobile-x:text-6xl lg:text-9xl'>
              <span className='text-white bg-blend-multiply'>
                {translation('intro.title')}
              </span>
            </h1>
          </div>
        </div>

        <div className='flex w-full max-w-3xl flex-col gap-4 text-xl font-medium'>
          <AnimateText
            words={translation('intro.message-part-1')}
            duration={0.1}
            textClassName={'text-[#fff] leading-relaxed'}
          />
          <AnimateText
            words={translation('intro.message-part-2')}
            duration={0.1}
            textClassName={'text-[#fff] leading-relaxed'}
          />
        </div>
      </section>
    </BubbleBackground>
  );
};
