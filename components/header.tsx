'use client';

import { usePathname } from '@/hooks/use-pathname';
import { useCurrentLocale, useScopedI18n } from '@/locales/client';
import { AnimatePresence, motion } from '@/providers/framer-provider';
import donutImage from '@/public/assets/path36.png';
import { constants } from '@/shared/constants';
import type { UrlList } from '@/types';
import clsx from 'clsx';
import { Settings2Icon, XIcon } from 'lucide-react';
import Image from 'next/image';
import { usePathname as usePath, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { useHeaderView } from '../hooks/use-header-view';

export const Header = () => {
  const MIN_WIDTH = 640;
  const { pathname, setPathname } = usePathname();

  const router = useRouter();
  const translation = useScopedI18n('header');
  const isPortfolio = usePath()?.includes('blog') ? false : true;
  const currentLocale = useCurrentLocale();
  const { isHeaderInView, scrollRangeValue, handleToggleMenu } =
    useHeaderView(MIN_WIDTH);

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
    <section className='w-full'>
      <motion.div
        className='w-fit fixed top-3 min-w-[550px] left-[calc(50%_-_285px)] min-h-[50px] px-5 flex justify-center items-center gap-[5px] z-[5000] base-border bg-background/50 shadow-[0_0_25px_rgba(0,0,0,.1)] backdrop-blur-sm rounded-xl max-[640px]:flex-col max-[640px]:min-w-[340px] max-[640px]:left-[calc(50%_-_170px)] '
        animate={{ translateY: scrollRangeValue > 100 ? '-65px' : '0px' }}
        transition={{ duration: 0.5 }}>
        <div className='cursor-pointer flex flex-row items-center gap-2 max-[640px]:absolute max-[640px]:top-3 max-[640px]:left-[calc(50%_-_60px)]'>
          <Image
            src={donutImage}
            width={25}
            height={25}
            alt='donut image'
            className='w-full max-w-[18px] max-h-[18px] object-cover'
          />
          <h2 onClick={() => router.push('/')}>
            <span className='font-sans text-primary text-sm font-semibold'>
              {constants.title}
            </span>
          </h2>
        </div>
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={handleToggleMenu}
          className='rounded-sm w-fit cursor-pointer justify-self-end hidden max-[640px]:block max-[640px]:absolute max-[640px]:top-3 max-[640px]:right-2 group'>
          {isHeaderInView ? (
            <XIcon className='w-6 h-auto pointer-events-none group-hover:stroke-error' />
          ) : (
            <Settings2Icon className='w-6 h-auto pointer-events-none group-hover:stroke-primary' />
          )}
        </motion.button>
        <nav className='max-[640px]:w-full' role='main'>
          <AnimatePresence>
            <motion.section
              className='w-full flex flex-row flex-nowrap px-2 gap-2 max-[640px]:p-5 max-[640px]:flex-col max-[640px]:hidden max-[640px]:mt-8 min-[640px]:flex'
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
                      'relative base-border rounded-md  sm:rounded-none sm:border-none after:absolute sm:after:bottom-[calc(50%_-_16px)] after:left-[-3px] after:bottom-[calc(50%_-_10px)] after:w-[5px] after:h-[20px] sm:after:left-[calc(50%_-_10px)] sm:after:w-[20px] sm:after:h-[5px] after:rounded-md after:bg-primary sm:text-primary':
                        pathname.includes(item.ref)
                    },
                    'list-none group'
                  )}>
                  <div className='w-full relative p-1 max-[640px]:p-2 max-[640px]:px-4 '>
                    <span className='w-full group-hover:text-primary transition-colors font-sans text-sm font-medium'>
                      {item.label}
                    </span>
                  </div>
                </a>
              ))}
            </motion.section>
          </AnimatePresence>
        </nav>
      </motion.div>
    </section>
  );
};
