import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  FC
} from 'react';
import { Theme, ColorScheme } from '../types';
import { GlobalStyles } from '../styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { dark_default, light_default } from '../styles/themes';

interface IContext {
  slidePageUp: () => void;
  colorScheme: ColorScheme;
  changeColorScheme: ({ mode, scheme }: ColorScheme) => void;
}

interface IProps {
  children: ReactNode;
}

const context = createContext<IContext>({
  slidePageUp: () => {},
  colorScheme: { mode: 'auto', scheme: 'light' },
  changeColorScheme: () => {}
});

const AppContext: FC<IProps> = ({ children }) => {
  const THEME_STORAGE_KEY: string = 'THEME_SETTINGS';
  const [currentTheme, setCurrentTheme] = useState<Theme>(light_default);
  const [colorScheme, setColorScheme] = useState<ColorScheme>({
    mode: 'auto',
    scheme: 'light'
  });

  // slides the page to the top
  const slidePageUp = () => {
    return window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });
  };

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
  }, []);

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
      <context.Provider value={{ slidePageUp, colorScheme, changeColorScheme }}>
        {children}
      </context.Provider>
    </ThemeProvider>
  );
};

export default AppContext;

export const useAppContext = (): IContext => useContext(context);
