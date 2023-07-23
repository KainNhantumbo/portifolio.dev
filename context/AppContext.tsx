import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  FC,
} from 'react';
import { ITheme as ThemeType } from '../@types';
import { GlobalStyles } from '../styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/themes';

interface IContext {
  themeSwitcher: () => void;
  slidePageUp: () => void;
  darkmode: boolean;
}

interface IProps {
  children: ReactNode;
}

interface ITheme {
  darkMode: boolean;
}

const context = createContext<IContext>({
  themeSwitcher: () => {},
  slidePageUp: () => {},
  darkmode: false,
});

const AppContext: FC<IProps> = ({ children }): JSX.Element => {
  const THEME_STORAGE_KEY: string = 'THEME_SETTINGS';
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(lightTheme);
  const [themeSettings, setThemeSettings] = useState<ITheme>({
    darkMode: false,
  });

  const themeSwitcher = (): void => {
    if (!themeSettings.darkMode) {
      setCurrentTheme(darkTheme);
      setThemeSettings({ darkMode: true });
      localStorage.setItem(
        THEME_STORAGE_KEY,
        JSON.stringify({ darkMode: true })
      );
    } else {
      setCurrentTheme(lightTheme);
      setThemeSettings({ darkMode: false });
      localStorage.setItem(
        THEME_STORAGE_KEY,
        JSON.stringify({ darkMode: false })
      );
    }
  };

  // slides the page to the top
  const slidePageUp = (): void => {
    return window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect((): void => {
    const themeConfig: any = JSON.parse(
      localStorage.getItem(THEME_STORAGE_KEY) || `{"darkMode": true}`
    );
    setThemeSettings(themeConfig);
    themeConfig.darkMode
      ? setCurrentTheme(darkTheme)
      : setCurrentTheme(lightTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <context.Provider
        value={{
          themeSwitcher,
          slidePageUp,
          darkmode: themeSettings.darkMode,
        }}>
        {children}
      </context.Provider>
    </ThemeProvider>
  );
};

export default AppContext;

export const useAppContext = (): IContext => useContext(context);
