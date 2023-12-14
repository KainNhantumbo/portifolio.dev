<<<<<<< HEAD:components/FluentButtons.tsx
'use client';

import {
  ArrowUpIcon,
  LanguagesIcon,
  MoonStarIcon,
  SunMediumIcon
} from 'lucide-react';
import { _fluentButtons as Container } from '../styles/modules/_fluent-buttons';
import { motion } from '@/providers/framer';
import { usePathname } from 'next/navigation';
import { useAppContext } from '../context/AppContext';
=======
>>>>>>> parent of 06d8e11 (refactor: removed react-icons. Moved source from /src to /(root)):src/components/FluentButtons.tsx
import actions from '../shared/actions';
import { useRouter } from 'next/router';
import { m as motion } from 'framer-motion';
import { BsTranslate } from 'react-icons/bs';
import { RiTranslate, RiTranslate2 } from 'react-icons/ri';
import { useAppContext } from '../context/AppContext';
import { BiMoon, BiSun, BiUpArrowAlt } from 'react-icons/bi';
import { _fluentButtons as Container } from '@/styles/modules/_fluent-buttons';

export default function FluentButtons() {
  const pathname = usePathname();
  const isPortfolio = pathname?.includes('blog') === false;
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
            <RiTranslate2 />
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
