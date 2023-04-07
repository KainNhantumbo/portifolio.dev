import HeadPage from './Head';
import Header from './Header';
import Footer from './Footer';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { ILayoutProps } from '../types/interfaces';
import { useAppContext } from '../context/AppContext';
import { BiMoon, BiSun, BiUpArrowAlt } from 'react-icons/bi';
import { AppContainer as Container } from '../styles/app';

const Layout: FC<ILayoutProps> = ({ children }): JSX.Element => {
  const { themeSwitcher, slidePageUp, darkmode } = useAppContext();
  return (
    <>
      <HeadPage />
      <Header />
      <Container>
        <section className='fluent-buttons'>
          <div>
            <motion.button
              whileTap={{ scale: 0.7 }}
              transition={{ type: 'spring', duration: 0.5 }}
              title='Change Theme'
              onClick={themeSwitcher}>
              {darkmode ? <BiSun /> : <BiMoon />}
            </motion.button>
            <motion.button
              title='Go to Top'
              onClick={slidePageUp}
              whileTap={{ scale: 0.7 }}
              transition={{ type: 'spring', duration: 0.5 }}>
              <BiUpArrowAlt />
            </motion.button>
          </div>
        </section>
      </Container>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
