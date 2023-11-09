import Link from 'next/link';
import Image from 'next/image';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import donutImage from '../../public/assets/path36.png';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { m as motion, AnimatePresence } from 'framer-motion';
import { _header as Container } from '../styles/modules/_header';

type NavAnchors = { ref: string; label: string };

export default function Header() {
  const minWidth: number = 640;
  const router = useRouter();
  const isPortfolio = router.asPath.includes('blog') === false;
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [deltaY, setDeltaY] = useState<number>(-100);
  const { t: translation } = useTranslation();

  // stores navigation bar ref urls and name
  const portfolioUrls: NavAnchors[] = [
    { label: translation('header.anchors.about'), ref: '#about' },
    { label: translation('header.anchors.skills'), ref: '#skills' },
    { label: translation('header.anchors.projects'), ref: '#projects' },
    { label: translation('header.anchors.contact'), ref: '#contact' },
    { label: translation('header.anchors.blog'), ref: '/blog' }
  ];

  const blogUrls: NavAnchors[] = [
    { label: 'Home', ref: '/blog' },
    { label: 'Portfolio', ref: '/' }
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
              {isPortfolio
                ? portfolioUrls.map((item, index) => (
                    <motion.li
                      key={index.toString()}
                      className={classnames({
                        active: router.asPath.includes(item.ref)
                      })}
                      whileTap={{ scale: deltaY <= minWidth ? 0.9 : 1 }}
                      whileHover={{ scale: 1.01, y: 1 }}>
                      <Link
                        href={item.ref}
                        locale={item.ref === '/blog' ? 'en' : router.locale}>
                        <span>{item.label}</span>
                      </Link>
                    </motion.li>
                  ))
                : null}
              {!isPortfolio
                ? blogUrls.map((item, index) => (
                    <motion.li
                      key={index.toString()}
                      whileTap={{ scale: deltaY <= minWidth ? 0.9 : 1 }}
                      whileHover={{ scale: 1.01, y: 1 }}>
                      <Link href={item.ref}>
                        <span>{item.label}</span>
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
