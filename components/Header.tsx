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

type NavAnchors = { ref: string; label: string };

export default function Header() {
  const MIN_WIDTH = 640;
  const {pathname, setPathname} = usePathname();

  const router = useRouter();
  const translation = useScopedI18n('header');
  const isPortfolio = usePath()?.includes('blog') ? false : true;
  const currentLocale = useCurrentLocale();
  const { isHeaderInView, scrollRangeValue, handleToggleMenu } =
    useHeaderView(MIN_WIDTH);

  const portfolioUrls: NavAnchors[] = [
    { label: translation('anchors.about'), ref: '#about' },
    { label: translation('anchors.skills'), ref: '#skills' },
    { label: translation('anchors.projects'), ref: '#projects' },
    { label: translation('anchors.contact'), ref: '#contact' },
    { label: translation('anchors.blog'), ref: '/en/blog' }
  ];

  const blogUrls = [
    { label: 'Blog', ref: 'post', url: '/en/blog' },
    { label: 'About', ref: 'about', url: '/en/blog/about' },
    { label: 'Portfolio', ref: '/en', url: '/' }
  ];

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
        <motion.button whileTap={{ scale: 0.8 }} onClick={handleToggleMenu}>
          {isHeaderInView ? <XIcon /> : <Settings2Icon />}
        </motion.button>
        <nav className='navbar' role='main'>
          <AnimatePresence>
            <motion.ul
              animate={{ translateY: isHeaderInView ? 0 : -50 }}
              exit={{ translateX: 150 }}
              style={{ display: isHeaderInView ? 'flex' : 'none' }}>
              {isPortfolio
                ? portfolioUrls.map((item, index) => (
                    <motion.li
                      key={index.toString()}
                      className={clsx(
                        {
                          'base-border rounded-md  sm:rounded-none sm:border-none after:absolute sm:after:bottom-[calc(50%_-_16px)] after:left-[-3px] after:bottom-[calc(50%_-_10px)] after:w-[5px] after:h-[20px] sm:after:left-[calc(50%_-_10px)] sm:after:w-[20px] sm:after:h-[5px] after:rounded-md after:bg-primary sm:text-primary':
                            pathname.includes(item.ref)
                        },
                        'list-none group'
                      )}
                      whileTap={{
                        scale: scrollRangeValue <= MIN_WIDTH ? 0.95 : 1
                      }}
                      whileHover={{ scale: 1.01, y: 1 }}>
                      <Link
                        href={item.ref}
                        locale={'en'}
                        onClick={() =>
                          setPathname(`${currentLocale}#${item.ref}`)
                        }
                        className='font-sans text-sm '>
                        <span className='group-hover:text-primary transition-colors'>
                          {item.label}
                        </span>
                      </Link>
                    </motion.li>
                  ))
                : null}
              {!isPortfolio
                ? blogUrls.map((item, index) => (
                    <motion.li
                      key={index}
                      className={clsx(
                        {
                          'base-border rounded-md  sm:rounded-none sm:border-none after:absolute sm:after:bottom-[calc(50%_-_16px)] after:left-[-3px] after:bottom-[calc(50%_-_10px)] after:w-[5px] after:h-[20px] sm:after:left-[calc(50%_-_10px)] sm:after:w-[20px] sm:after:h-[5px] after:rounded-md after:bg-primary sm:text-primary':
                            pathname.includes(item.ref)
                        },
                        'list-none group'
                      )}
                      whileTap={{
                        scale: scrollRangeValue <= MIN_WIDTH ? 0.95 : 1
                      }}
                      whileHover={{ scale: 1.01, y: 1 }}>
                      <Link
                        href={item.url}
                        locale={'en'}
                        onClick={() =>
                          setPathname(`${currentLocale}#${item.ref}`)
                        }
                        className='font-sans text-sm'>
                        <span className='group-hover:text-primary transition-colors'>
                          {item.label}
                        </span>
                      </Link>
                    </motion.li>
                  ))
                : null}
            </motion.ul>
          </AnimatePresence>
        </nav>
      </motion.div>
    </Container>
  );
}
