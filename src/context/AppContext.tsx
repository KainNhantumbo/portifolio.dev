'use client';

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  Dispatch,
  useReducer,
  useMemo
} from 'react';
import { Theme, ColorScheme, State, Action } from '../types';
import { GlobalStyles } from '../styles/_global-styles';
import { ThemeProvider } from 'styled-components';
import { dark_default, light_default } from '../styles/themes';
import { initialState, reducer } from '../shared/reducer';
import { useTranslation } from '@/providers/translation';
import { useRouter } from 'next/navigation';

type Props = { children: ReactNode };

type Context = {
  state: State;
  dispatch: Dispatch<Action>;
  slidePageUp: () => void;
  colorScheme: ColorScheme;
  changeColorScheme: ({ mode, scheme }: ColorScheme) => void;
};

const context = createContext<Context>({
  state: initialState,
  dispatch: () => {},
  slidePageUp: () => {},
  colorScheme: { mode: 'auto', scheme: 'light' },
  changeColorScheme: () => {}
});

export default function AppContext({ children }: Props) {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentTheme, setCurrentTheme] = useState<Theme>(light_default);
  const [colorScheme, setColorScheme] = useState<ColorScheme>({
    mode: 'auto',
    scheme: 'light'
  });

  // slides the page to the top
  const slidePageUp = () =>
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });

  const translate = useMemo(() => () => i18n.changeLanguage('en'), [i18n]);

  const setDarkColorScheme = ({ mode, scheme }: ColorScheme): void => {
    setCurrentTheme(dark_default);
    setColorScheme({ mode, scheme });
    localStorage.setItem('color-scheme', JSON.stringify({ mode, scheme }));
  };

  const setLightColorScheme = ({ mode, scheme }: ColorScheme): void => {
    setCurrentTheme(light_default);
    setColorScheme({ mode, scheme });

    localStorage.setItem('color-scheme', JSON.stringify({ mode, scheme }));
  };

  const changeColorScheme = ({ mode, scheme }: ColorScheme): void => {
    switch (mode) {
      case 'auto':
        window
          .matchMedia('(prefers-color-scheme: dark)')
          .addEventListener('change', (e) => {
            if (e.matches) {
              setDarkColorScheme({ mode, scheme: 'dark' });
            } else {
              setLightColorScheme({ mode, scheme: 'light' });
            }
          });

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          setDarkColorScheme({ mode, scheme: 'dark' });
        } else {
          setLightColorScheme({ mode, scheme: 'light' });
        }
        break;
      case 'manual':
        if (scheme === 'dark') {
          setDarkColorScheme({ mode, scheme });
        }

        if (scheme === 'light') {
          setLightColorScheme({ mode, scheme });
        }
        break;
      default:
        setLightColorScheme({ mode: 'auto', scheme: 'light' });
    }
  };

  useEffect((): void => {
    const colorScheme: ColorScheme = JSON.parse(
      localStorage.getItem('color-scheme') ||
        `{"mode": "auto", "scheme": "light"}`
    );
    setColorScheme(colorScheme);
    translate();
    console.log('Translation trigger')
  }, [translate]);

  useEffect((): void => {
    if (colorScheme.scheme === 'dark') {
      setCurrentTheme(dark_default);
    } else if (colorScheme.scheme === 'light') {
      setCurrentTheme(light_default);
    }
  }, [colorScheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <context.Provider
        value={{
          slidePageUp,
          state,
          dispatch,
          colorScheme,
          changeColorScheme
        }}>
        {children}
      </context.Provider>
    </ThemeProvider>
  );
}

export function useAppContext(): Context {
  return useContext(context);
}
