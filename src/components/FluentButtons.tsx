import actions from '../shared/actions';
import { useRouter } from 'next/router';
import { m as motion } from 'framer-motion';
import { BsTranslate } from 'react-icons/bs';
import { useAppContext } from '../context/AppContext';
import { BiMoon, BiSun, BiUpArrowAlt } from 'react-icons/bi';
import { _fluentButtons as Container } from '@/styles/modules/_fluent-buttons';

export default function FluentButtons() {
  const router = useRouter();
  const isPortfolio = router.asPath.includes('blog') === false;
  const { state, dispatch, slidePageUp, colorScheme, changeColorScheme } =
    useAppContext();

  return (
    <Container>
      <div>
        {isPortfolio ? (
          <motion.button
            whileTap={{ scale: 0.7 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={() =>
              dispatch({
                type: actions.LANGUAGES_MODAL,
                payload: { ...state, isLanguagesModal: true }
              })
            }>
            <BsTranslate />
          </motion.button>
        ) : null}

        <motion.button
          whileTap={{ scale: 0.7 }}
          transition={{ type: 'spring', duration: 0.5 }}
          title='Change Theme'
          aria-label='Toogle theme'
          onClick={() =>
            colorScheme.scheme === 'light'
              ? changeColorScheme({ mode: 'manual', scheme: 'dark' })
              : changeColorScheme({ mode: 'manual', scheme: 'light' })
          }>
          {colorScheme.scheme === 'light' ? <BiSun /> : <BiMoon />}
        </motion.button>
        <motion.button
          title='Go to Top'
          onClick={slidePageUp}
          whileTap={{ scale: 0.7 }}
          transition={{ type: 'spring', duration: 0.5 }}>
          <BiUpArrowAlt />
        </motion.button>
      </div>
    </Container>
  );
}
