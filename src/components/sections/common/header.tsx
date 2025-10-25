'use client';

import donutImage from '@/../public/assets/path36.png';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { usePathname } from '@/hooks/use-pathname';
import { useCurrentLocale, useScopedI18n } from '@/locales/client';
import { AnimatePresence, motion } from '@/providers/framer-provider';
import { constants } from '@/shared/constants';
import type { UrlList } from '@/types';
import clsx from 'clsx';
import { MenuIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import { usePathname as usePath, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { useHeaderView } from '../../../hooks/use-header-view';

export const Header = () => {
  const MIN_WIDTH = 640;
  const { pathname, setPathname } = usePathname();

  const router = useRouter();
  const translation = useScopedI18n('header');
  const isPortfolio = usePath()?.includes('blog') ? false : true;
  const currentLocale = useCurrentLocale();
  const { isHeaderInView, scrollRangeValue, handleToggleMenu } = useHeaderView(MIN_WIDTH);

  const portfolioUrls: UrlList = useMemo(
    () => [
      { label: translation('anchors.about'), ref: '#about' },
      { label: translation('anchors.skills'), ref: '#skills' },
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

  return (
    <header className='w-full'>
      <motion.div
        className='base-border fixed left-[calc(50%_-_285px)] top-3 z-[5000] flex min-h-[50px] w-fit min-w-[550px] items-center justify-center gap-[5px] rounded-xl bg-background/50 px-5 shadow-[0_0_25px_rgba(0,0,0,.1)] backdrop-blur-sm max-[640px]:left-[calc(50%_-_170px)] max-[640px]:min-w-[340px] max-[640px]:flex-col'
        animate={{ translateY: scrollRangeValue > 100 ? '-65px' : '0px' }}
        transition={{ duration: 0.5 }}>
        <div className='flex cursor-pointer flex-row items-center gap-2 max-[640px]:absolute max-[640px]:left-[calc(50%_-_60px)] max-[640px]:top-3'>
          <Image
            src={donutImage}
            width={25}
            height={25}
            alt='donut image'
            className='max-h-[18px] w-full max-w-[18px] object-cover'
          />
          <span
            onClick={() => router.push('/')}
            className='font-sans text-sm font-semibold text-primary'>
            {constants.title}
          </span>
        </div>
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={handleToggleMenu}
          className='group hidden w-fit cursor-pointer justify-self-end rounded-sm max-[640px]:absolute max-[640px]:right-2 max-[640px]:top-3 max-[640px]:block'>
          {isHeaderInView ? (
            <XIcon className='pointer-events-none h-auto w-6 group-hover:stroke-error' />
          ) : (
            <MenuIcon className='pointer-events-none h-auto w-6 group-hover:stroke-primary' />
          )}
        </motion.button>

        <nav className='max-[640px]:w-full' role='main'>
          <AnimatePresence>
            <motion.section
              className='flex w-full flex-row flex-nowrap gap-2 px-2 max-[640px]:mt-8 max-[640px]:hidden max-[640px]:flex-col max-[640px]:p-5 min-[640px]:flex'
              animate={{ translateY: isHeaderInView ? 0 : -50 }}
              exit={{ translateX: 150 }}
              style={{ display: isHeaderInView ? 'flex' : 'none' }}>
              {urls.map((item, index) => (
                <a
                  key={index.toString()}
                  href={item.url || item.ref}
                  onClick={() => setPathname(`${currentLocale}#${item.ref}`)}
                  className={clsx(
                    {
                      'base-border relative rounded-md after:absolute after:bottom-[calc(50%_-_10px)] after:left-[-3px] after:h-[20px] after:w-[5px] after:rounded-md after:bg-primary sm:rounded-none sm:border-none sm:text-primary sm:after:bottom-[calc(50%_-_16px)] sm:after:left-[calc(50%_-_10px)] sm:after:h-[5px] sm:after:w-[20px]':
                        pathname.includes(item.ref)
                    },
                    'group list-none'
                  )}>
                  <div className='relative w-full p-1 max-[640px]:p-2 max-[640px]:px-4'>
                    <span className='w-full font-sans text-sm font-medium transition-colors group-hover:text-primary'>
                      {item.label}
                    </span>
                  </div>
                </a>
              ))}
            </motion.section>
          </AnimatePresence>
        </nav>

        <div className='flex flex-row flex-nowrap items-center gap-2'>
          <div className='mx-4 h-5 w-px bg-font/60' />

          <LanguageSwitcher canRender={isPortfolio} />
          <ThemeSwitcher />
        </div>
      </motion.div>
    </header>
  );
};
