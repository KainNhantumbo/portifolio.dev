import Image from 'next/image';
import Link from 'next/link';
import author from '../assets/author.jpg';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { navbarData } from '../data/app-data';
import { FC, useState, useEffect } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { HeaderContainer as Container } from '../styles/components/header';

const Header: FC = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [deltaY, setDeltaY] = useState<number>(-100);

  const toggleMenu = (): void => setIsMenu(!isMenu);

  const changeWidth = (): void =>
    window.innerWidth > 600 ? setIsMenu(true) : setIsMenu(false);

  // controls the wheel events
  const hideMenu = (e: WheelEvent): void => setDeltaY(e.deltaY);

  useEffect(() => {
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
        className='core'
        animate={{ translateY: deltaY == 100 ? -65 : 0 }}
        transition={{ duration: 0.5 }}>
        <motion.h2 className='brand' onClick={() => router.push('#')}>
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
        <motion.button
          whileTap={{ scale: 0.5 }}
          className='menu-btn'
          onClick={toggleMenu}>
          <FaBars />
        </motion.button>
        <nav className='navbar'>
          <motion.ul
            animate={{ translateY: isMenu ? 0 : -50 }}
            style={{ display: isMenu ? 'flex' : 'none' }}>
            {navbarData.map((item, index) => (
              <Link key={index.toString()} href={item.ref}>
                <motion.li
                  whileTap={{ scale: 0.7 }}
                  whileHover={{ scale: 1.05, y: 1 }}>
                  <span>{item.label}</span>
                </motion.li>
              </Link>
            ))}
          </motion.ul>
        </nav>
      </motion.div>
    </Container>
  );
};

export default Header;
