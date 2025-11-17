'use client';

import donutImage from '@/../public/assets/path36.png';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { useHeaderView } from '@/hooks/use-header-view';
import { usePathname } from '@/hooks/use-pathname';
import { cn } from '@/lib/utils';
import { useCurrentLocale, useScopedI18n } from '@/locales/client';
import { AnimatePresence, motion } from '@/providers/framer-provider';
import { constants } from '@/shared/constants';
import type { UrlList } from '@/types';
import Image from 'next/image';
import { usePathname as usePath, useRouter } from 'next/navigation';
import { useMemo } from 'react';

export const Header = () => {
  const MIN_WIDTH = 640;
  const { pathname, setPathname } = usePathname();

  const router = useRouter();
  const translation = useScopedI18n('header');
  const isPortfolio = usePath()?.includes('blog') ? false : true;
  const currentLocale = useCurrentLocale();
  const { isHeaderInView, handleToggleMenu } = useHeaderView(MIN_WIDTH);

  const portfolioUrls: UrlList = useMemo(
    () => [
      { label: translation('anchors.about'), ref: '#about' },
      { label: translation('anchors.services'), ref: '#services' },
      { label: translation('anchors.projects'), ref: '#projects' },
      { label: translation('anchors.contact'), ref: '#contact' },
      { label: translation('anchors.blog'), ref: '/en/blog' }
    ],
    [translation]
  );

  const blogUrls: UrlList = useMemo(
    () => [
      { label: 'Blog', ref: 'post', url: '/en/blog' },
      { label: 'About', ref: 'about', url: '/en/blog/about' },
      { label: 'Portfolio', ref: '/en', url: '/' }
    ],
    []
  );

  const urls = useMemo(
    () => (isPortfolio ? portfolioUrls : blogUrls),
    [isPortfolio, blogUrls, portfolioUrls]
  );
  const animationColor = '#e47131';
  const animationDuration = '5s';

  return (
    <header className='w-full'>
      <div
        className={cn(
          'base-border fixed left-1/2 top-3 z-[5000] flex min-h-[50px] w-fit -translate-x-1/2 items-center justify-center gap-[5px] overflow-hidden rounded-full bg-background/50 px-5 shadow-[0_0_25px_rgba(0,0,0,.1)] backdrop-blur-sm max-[640px]:min-w-[340px] max-[640px]:flex-col',
          isHeaderInView && 'rounded-3xl max-[640px]:pt-2'
        )}>
        <div
          className='animate-star-movement-top absolute left-[-250%] top-[-10px] z-0 h-[25%] w-[300%] rounded-full opacity-70'
          style={{
            background: `radial-gradient(circle, ${animationColor}, transparent 10%)`,
            animationDuration: animationDuration
          }}
        />
        <div
          className='animate-star-movement-bottom absolute bottom-[-11px] right-[-250%] z-0 h-[25%] w-[300%] rounded-full opacity-70'
          style={{
            background: `radial-gradient(circle, ${animationColor}, transparent 10%)`,
            animationDuration: animationDuration
          }}
        />

        <div className='flex w-full cursor-pointer flex-row justify-between gap-2 px-4'>
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={handleToggleMenu}
            className='group hidden w-fit cursor-pointer justify-self-end rounded-sm max-[640px]:block'>
            <svg
              className='pointer-events-none h-auto w-6'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              {/* Top line - rotates and moves down to form top of X */}
              <line
                x1='3'
                y1='6'
                x2='21'
                y2='6'
                style={{
                  transformOrigin: '12px 6px',
                  transform: isHeaderInView
                    ? 'rotate(45deg) translateY(6px) translateX(2px)'
                    : 'rotate(0deg)',
                  transition: 'transform 300ms ease-in-out'
                }}
              />
              {/* Middle line - fades out */}
              <line
                x1='3'
                y1='12'
                x2='21'
                y2='12'
                style={{
                  opacity: isHeaderInView ? 0 : 1,
                  transition: 'opacity 300ms ease-in-out'
                }}
              />
              {/* Bottom line - rotates and moves up to form bottom of X */}
              <line
                x1='3'
                y1='18'
                x2='21'
                y2='18'
                style={{
                  transformOrigin: '12px 18px',
                  transform: isHeaderInView
                    ? 'rotate(-45deg) translateY(-6px) translateX(2px)'
                    : 'rotate(0deg)',
                  transition: 'transform 300ms ease-in-out'
                }}
              />
            </svg>
          </motion.button>
          <div className='flex items-center gap-2'>
            <Image
              src={donutImage}
              width={25}
              height={25}
              alt='donut image'
              className='max-h-[18px] w-full max-w-[18px] object-cover'
            />
            <span
              onClick={() => router.push('/')}
              className='font-slab text-sm font-semibold uppercase text-primary'>
              {constants.title}
            </span>
            <div className='mx-2 hidden h-5 w-px bg-font/20 min-[640px]:block' />
          </div>
          <div className='min-[640px]:hidden'>
            <ThemeSwitcher />
          </div>
        </div>

        <nav className='max-[640px]:w-full' role='nav'>
          <AnimatePresence>
            <motion.section
              className='flex w-full flex-row flex-nowrap gap-2 px-2 max-[640px]:hidden max-[640px]:flex-col max-[640px]:p-4 min-[640px]:flex'
              animate={{ scale: isHeaderInView ? 1 : 5 }}
              exit={{ translateX: 150 }}
              style={{ display: isHeaderInView ? 'flex' : 'none' }}>
              {urls.map((item, index) => (
                <a
                  key={index.toString()}
                  href={item.url || item.ref}
                  onClick={() => setPathname(`${currentLocale}#${item.ref}`)}
                  className={cn(
                    {
                      'base-border relative rounded-md after:absolute after:bottom-[calc(50%_-_10px)] after:left-[-3px] after:h-[20px] after:w-[5px] after:rounded-md after:bg-primary sm:rounded-none sm:border-none sm:text-primary sm:after:bottom-[calc(50%_-_16px)] sm:after:left-[calc(50%_-_10px)] sm:after:h-[5px] sm:after:w-[20px]':
                        pathname.includes(item.ref)
                    },
                    'group list-none'
                  )}>
                  <div className='relative w-full p-1 max-[640px]:p-2 max-[640px]:px-4'>
                    <span className='w-full font-sans text-base font-medium transition-colors group-hover:text-primary'>
                      {item.label}
                    </span>
                  </div>
                </a>
              ))}

              <div className='relative w-full p-[6px] max-[640px]:p-2 max-[640px]:px-4'>
                <LanguageSwitcher canRender={isPortfolio} />
              </div>
            </motion.section>
          </AnimatePresence>
        </nav>

        <div className='hidden flex-row flex-nowrap items-center gap-2 min-[640px]:flex'>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
