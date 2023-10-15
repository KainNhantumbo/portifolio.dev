import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NextRouter, useRouter } from 'next/router';
import donutImage from '../../public/assets/path36.png';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { m as motion, AnimatePresence } from 'framer-motion';
import { _header as Container } from '../styles/components/header';

type NavAnchors = { ref: string; label: string };

export default function Header() {
  const minWidth: number = 640;
  const router: NextRouter = useRouter();
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [deltaY, setDeltaY] = useState<number>(-100);
  const { t: translation } = useTranslation();

  // stores navigation bar ref urls and name
  const headerAnchors: NavAnchors[] = [
    { label: translation('header.anchors.about'), ref: '#about' },
    { label: translation('header.anchors.skills'), ref: '#skills' },
    { label: translation('header.anchors.projects'), ref: '#projects' },
    { label: translation('header.anchors.contact'), ref: '#contact' },
    { label: translation('header.anchors.blog'), ref: '/blog' },
  ];

  const toggleMenu = () => setIsMenu(!isMenu);

  const changeWidth = () =>
    window.innerWidth > minWidth ? setIsMenu(true) : setIsMenu(false);

  // controls the header visibility by the wheel events
  const hideMenu = (e: WheelEvent) => setDeltaY(e.deltaY);

  useEffect((): (() => void) => {
    changeWidth();
    window.addEventListener('resize', changeWidth);
    window.addEventListener('wheel', hideMenu);
    for (const anchor of headerAnchors) {
      if (router.asPath !== '/' && router.asPath.includes(anchor.ref)) {
        location.assign(router.asPath);
      }
    }
    return () => {
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
        <div className='donut-container'>
          <Image src={donutImage} width={25} height={25} alt='donut image' />
          <h2 onClick={() => router.push('/')}>
            <span>Codenut.dev</span>
          </h2>
        </div>
        <motion.button whileTap={{ scale: 0.8 }} onClick={toggleMenu}>
          {isMenu ? <RiCloseLine /> : <RiMenuLine />}
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
                  whileTap={{ scale: deltaY <= minWidth ? 0.9 : 1 }}
                  whileHover={{ scale: 1.01, y: 1 }}>
                  <Link href={item.ref}>
                    <span>{item.label}</span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </nav>
      </motion.div>
    </Container>
  );
}