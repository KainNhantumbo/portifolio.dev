import Link from 'next/link';
import Image from 'next/image';
import { HiX } from 'react-icons/hi';
import { FaBars } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { FC, useState, useEffect } from 'react';
import author from '../public/assets/author.jpg';
import { NextRouter, useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { _header as Container } from '../styles/components/header';

type TNavbarAnchors = {
  ref: string;
  label: string;
};

const Header: FC = (): JSX.Element => {
  const minWidth: number = 640;
  const router: NextRouter = useRouter();
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [deltaY, setDeltaY] = useState<number>(-100);
  const { t: translation } = useTranslation();

  // stores navigation bar ref urls and name
  const headerAnchors: TNavbarAnchors[] = [
    { label: translation('header.anchors.home'), ref: '#home' },
    { label: translation('header.anchors.about'), ref: '#about' },
    { label: translation('header.anchors.skills'), ref: '#skills' },
    { label: translation('header.anchors.projects'), ref: '#projects' },
    { label: translation('header.anchors.contact'), ref: '#contact' },
  ];

  const toggleMenu = (): void => setIsMenu(!isMenu);

  const changeWidth = (): void =>
    window.innerWidth > minWidth ? setIsMenu(true) : setIsMenu(false);

  // controls the header visibility by the wheel events
  const hideMenu = (e: WheelEvent): void => setDeltaY(e.deltaY);

  useEffect((): (() => void) => {
    changeWidth();
    window.addEventListener('resize', changeWidth);
    window.addEventListener('wheel', hideMenu);
    for (const anchor of headerAnchors) {
      if (router.asPath !== '/' && router.asPath.includes(anchor.ref)) {
        location.assign(router.asPath);
      }
    }
    return (): void => {
      window.removeEventListener('resize', changeWidth);
      window.removeEventListener('wheel', hideMenu);
    };
  }, []);

  return (
    <Container>
      <motion.div
        className='main-container'
        animate={{ translateY: deltaY == 100 ? -65 : 0 }}
        transition={{ duration: 0.5 }}>
        <motion.h2 className='brand' onClick={() => router.push('/')}>
          <div className='image'>
            <Image
              src={author}
              width={40}
              height={40}
              placeholder={'blur'}
              alt={'author photo image'}
              aria-placeholder={'author photo image'}
            />
          </div>
          <span>{translation('header.title')}</span>
        </motion.h2>
        <motion.button whileTap={{ scale: 0.8 }} onClick={toggleMenu}>
          {isMenu ? <HiX /> : <FaBars />}
        </motion.button>
        <nav className='navbar'>
          <AnimatePresence>
            <motion.ul
              animate={{ translateY: isMenu ? 0 : -50 }}
              exit={{ translateX: 150 }}
              style={{ display: isMenu ? 'flex' : 'none' }}>
              {headerAnchors.map((item, index) => (
                <motion.li
                  key={index.toString()}
                  className={router.asPath.includes(item.ref) ? 'active' : ''}
                  whileTap={{ scale: deltaY <= minWidth ? 0.9 : 0.7 }}
                  whileHover={{ scale: 1.05, y: 1 }}>
                  <Link href={item.ref}>
                    <span>{item.label}</span>
                  </Link>
                </motion.li>
              ))}

              <motion.li whileTap={{ scale: deltaY <= minWidth ? 0.9 : 0.7 }}>
                <a
                  href={'https://publish-it-programming.vercel.app'}
                  target={'_blank'}
                  rel={'noreferrer noopener'}>
                  <span>{translation('header.anchors.blog')}</span>
                </a>
              </motion.li>
            </motion.ul>
          </AnimatePresence>
        </nav>
      </motion.div>
    </Container>
  );
};

export default Header;
