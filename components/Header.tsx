'use client';

import donutImage from '@/public/assets/path36.png';
import clsx from 'clsx';
import { motion, AnimatePresence } from '@/providers/framer-provider';
import { Settings2Icon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname as usePath } from 'next/navigation';
import { useHeaderView } from '../hooks/useHeaderView';
import { _header as Container } from '../styles/modules/_header';
import { useCurrentLocale, useScopedI18n } from '@/locales/client';
import { usePathname } from '@/hooks/usePathname';
import { constants } from '@/shared/constants';
import { useMemo } from 'react';

export type UrlList = Array<{ ref: string; label: string; url?: string }>;

export default function Header() {
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
    <Container>
      <motion.div
        className='main-container base-border bg-background/50 shadow-[0_0_25px_rgba(0,0,0,.1)] backdrop-blur-sm rounded-xl'
        animate={{ translateY: scrollRangeValue > 100 ? '-65px' : '0px' }}
        transition={{ duration: 0.5 }}>
        <div className='donut-container'>
          <Image src={donutImage} width={25} height={25} alt='donut image' />
          <h2 onClick={() => router.push('/')}>
            <span className='font-sans text-primary'>{constants.title}</span>
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
              className='w-full flex flex-row flex-nowrap px-2 gap-2 max-[640px]:p-5 max-[640px]:flex-col max-[640px]:hidden max-[640px]:mt-7 min-[640px]:flex'
              animate={{ translateY: isHeaderInView ? 0 : -50 }}
              exit={{ translateX: 150 }}
              style={{ display: isHeaderInView ? 'flex' : 'none' }}>
              {urls.map((item, index) => (
                <Link
                  key={index.toString()}
                  href={item.url || item.ref}
                  onClick={() => setPathname(`${currentLocale}#${item.ref}`)}
                  locale={'en'}
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
                </Link>
              ))}
            </motion.section>
          </AnimatePresence>
        </nav>
      </motion.div>
    </Container>
  );
}
