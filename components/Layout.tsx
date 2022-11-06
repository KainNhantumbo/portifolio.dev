import { FC, ReactNode } from 'react';
import { BiSun, BiUpArrowAlt } from 'react-icons/bi';
import { useAppContext } from '../context/AppContext';
import { AppContainer as Container } from '../styles/app';
import { motion } from 'framer-motion';
import HeadPage from './Head';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};
const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
  const { themeSwitcher, slidePageUp } = useAppContext();
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
              <BiSun />
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
