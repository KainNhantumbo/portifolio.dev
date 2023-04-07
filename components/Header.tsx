import Image from 'next/image';
import Link from 'next/link';
import author from '../assets/author.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { urls } from '../data/app-data';
import { FC, useState, useEffect } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { HeaderContainer as Container } from '../styles/components/header';
import { HiX } from 'react-icons/hi';

const Header: FC = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [deltaY, setDeltaY] = useState<number>(-100);
  const minWidth: number = 640;

  function toggleMenu(): void {
    setIsMenu(!isMenu);
  }

  function changeWidth(): void {
    window.innerWidth > minWidth ? setIsMenu(true) : setIsMenu(false);
  }

  // controls the wheel events
  function hideMenu(e: WheelEvent): void {
    setDeltaY(e.deltaY);
  }

  useEffect(() => {
    changeWidth();
    window.addEventListener('resize', changeWidth);
    window.addEventListener('wheel', hideMenu);
    return () => {
      window.removeEventListener('resize', changeWidth);
      window.removeEventListener('wheel', hideMenu);
    };
  }, []);

  useEffect(() => {
    for (let item of urls) {
      if (router.asPath !== '/' && router.asPath.includes(item.ref)) {
        location.assign(router.asPath);
      }
    }
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
              style={{ borderRadius: 20 }}
              alt={'author photo'}
            />
          </div>
          <span>My Workspace</span>
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
              {urls.map((item, index) => (
                <Link key={index.toString()} href={item.ref}>
                  <motion.li
                    className={
                      router.asPath.includes(item.ref) ? 'active' : 'inative'
                    }
                    whileTap={{ scale: deltaY <= minWidth ? 0.9 : 0.7 }}
                    whileHover={{ scale: 1.05, y: 1 }}>
                    <span>{item.label}</span>
                  </motion.li>
                </Link>
              ))}
              <a
                href={'https://publish-it-programming.vercel.app'}
                target={'_blank'}
                rel={'noreferrer noopener'}>
                <motion.li whileTap={{ scale: 0.8 }}>
                  <span>Blog</span>
                </motion.li>
              </a>
            </motion.ul>
          </AnimatePresence>
        </nav>
      </motion.div>
    </Container>
  );
};

export default Header;
