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
import * as React from 'react';

const Header = () => {
  const MIN_WIDTH = 640;
  const { pathname, setPathname } = usePathname();

  const router = useRouter();
  const translation = useScopedI18n('header');
  const isPortfolio = usePath()?.includes('blog') ? false : true;
  const currentLocale = useCurrentLocale();
  const { isHeaderInView, handleToggleMenu } = useHeaderView(MIN_WIDTH);

  const [selectedPath, setSelectedPath] = React.useState<string | null>(null);

  const portfolioUrls: UrlList = React.useMemo(
    () => [
      { label: translation('anchors.about'), ref: '#about' },
      { label: translation('anchors.services'), ref: '#services' },
      { label: translation('anchors.works'), ref: '#works' },
      { label: translation('anchors.projects'), ref: '#projects' },
      { label: translation('anchors.contact'), ref: '#contact' },
      { label: translation('anchors.blog'), ref: '/en/blog' }
    ],
    [translation]
  );

  const blogUrls: UrlList = React.useMemo(
    () => [
      { label: 'Blog', ref: 'post', url: '/en/blog' },
      { label: 'About', ref: 'about', url: '/en/blog/about' },
      { label: 'Portfolio', ref: '/en', url: '/' }
    ],
    []
  );

  const urls = React.useMemo(
    () => (isPortfolio ? portfolioUrls : blogUrls),
    [isPortfolio, blogUrls, portfolioUrls]
  );

  return (
    <header className='w-full'>
      <div
        className={cn(
          'base-border fixed left-1/2 top-3 z-[5000] flex min-h-[50px] w-fit -translate-x-1/2 items-center justify-center gap-[5px] rounded-full bg-background/50 px-5 shadow-[0_0_25px_rgba(0,0,0,.1)] backdrop-blur-sm max-[640px]:min-w-[340px] max-[640px]:flex-col',
          isHeaderInView && 'rounded-3xl max-[640px]:pt-2'
        )}>
        <div className='flex w-full cursor-pointer flex-row items-center justify-between gap-2 px-4'>
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={handleToggleMenu}
            className='group hidden h-full w-fit cursor-pointer flex-col items-center justify-center gap-[6px] justify-self-end rounded-sm max-[640px]:flex'>
            <div
              className={`hamburger-line h-[2px] w-[25px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHeaderInView ? 'translate-y-[4px] rotate-45' : ''
              } group-hover:opacity-75`}
            />
            <div
              className={`hamburger-line h-[2px] w-[25px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHeaderInView ? '-translate-y-[4px] -rotate-45' : ''
              } group-hover:opacity-75`}
            />
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
          <AnimatePresence mode='wait'>
            <motion.section
              className='flex w-full flex-row flex-nowrap gap-3 px-2 max-[640px]:hidden max-[640px]:flex-col max-[640px]:p-4 min-[640px]:flex'
              animate={{ scale: isHeaderInView ? 1 : 5 }}
              exit={{ translateX: 150 }}
              style={{ display: isHeaderInView ? 'flex' : 'none' }}>
              {urls.map((item, index) => {
                const isActive = pathname.includes(item.ref) || pathname === item.url;

                return (
                  <a
                    key={index.toString()}
                    href={item.url || item.ref}
                    onClick={() => {
                      setPathname(`${currentLocale}#${item.ref}`);
                      setSelectedPath(item.ref);
                    }}
                    className={cn(
                      {
                        'base-border relative rounded-full px-2 after:bg-primary sm:rounded-none sm:border-none sm:text-primary':
                          isActive
                      },
                      'group list-none'
                    )}>
                    {selectedPath === item.ref && (
                      <motion.div
                        layoutId='hover-bg'
                        className='absolute inset-0 z-0 rounded-full bg-foreground'
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}

                    {isActive && (
                      <motion.div
                        layoutId='active-indicator'
                        className={cn(
                          'absolute z-20 rounded-full bg-primary',
                          // Mobile
                          'left-0 top-1/2 h-5 w-1 -translate-y-1/2',
                          // Desktop
                          'sm:bottom-0 sm:left-0 sm:right-0 sm:top-auto sm:mx-auto sm:h-1 sm:w-5 sm:translate-y-0'
                        )}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}

                    <div className='relative w-full p-1 max-[640px]:p-2 max-[640px]:px-4'>
                      <span className='w-full font-sans text-base font-medium transition-colors group-hover:text-primary'>
                        {item.label}
                      </span>
                    </div>
                  </a>
                );
              })}

              <div className='relative w-full p-[6px] max-[640px]:p-2 max-[640px]:px-4'>
                <div className='relative flex gap-2'>
                  <div className='mx-2 hidden h-5 w-px bg-font/20 min-[640px]:block' />
                  <LanguageSwitcher canRender={isPortfolio} />
                </div>
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

export default React.memo(Header);
