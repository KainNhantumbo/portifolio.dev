import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { FC, useState, useEffect } from 'react';
import { RiMenuLine, RiCloseLine, RiPlantLine } from 'react-icons/ri';
import { NextRouter, useRouter } from 'next/router';
import { m as motion, AnimatePresence } from 'framer-motion';
import { _header as Container } from '../styles/components/header';

type TNavbarAnchors = {
  ref: string;
  label: string;
};

const Header: FC = () => {
  const minWidth: number = 640;
  const router: NextRouter = useRouter();
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [deltaY, setDeltaY] = useState<number>(-100);
  const { t: translation } = useTranslation();

  // stores navigation bar ref urls and name
  const headerAnchors: TNavbarAnchors[] = [
    { label: translation('header.anchors.about'), ref: '#about' },
    { label: translation('header.anchors.skills'), ref: '#skills' },
    { label: translation('header.anchors.projects'), ref: '#projects' },
    { label: translation('header.anchors.contact'), ref: '#contact' }
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
        <h2 onClick={() => router.push('/')}>
          <RiPlantLine />
          <span>Kain.dev</span>
        </h2>
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
