import { FC, ReactNode, useState, useEffect } from 'react';
import { createContext, useContext } from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { dark, primary } from '../themes/themes';
import { ThemeObj } from '../types/ThemeTypes';
interface IContext {
  themeSwitcher: () => void;
  slidePageUp: () => void;
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
});

const AppContext: FC<IProps> = ({ children }) => {
  const [themeSettings, setThemeSettings] = useState<ITheme>({
    darkMode: false,
  });
  const [currentTheme, setCurrentTheme] = useState<ThemeObj>(primary);
  const THEME_STORAGE_KEY: string = 'THEME_SETTINGS';

  const themeSwitcher = (): void => {
    if (themeSettings.darkMode === false) {
      setCurrentTheme(dark);
      setThemeSettings({ darkMode: true });
      localStorage.setItem(
        THEME_STORAGE_KEY,
        JSON.stringify({ darkMode: true })
      );
    } else {
      setCurrentTheme(primary);
      setThemeSettings({ darkMode: false });
      localStorage.setItem(
        THEME_STORAGE_KEY,
        JSON.stringify({ darkMode: false })
      );
    }
  };

  // slides the page to the top
  const slidePageUp = (): void =>
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });

  useEffect(() => {
    const themeConfig: any = JSON.parse(
      localStorage.getItem(THEME_STORAGE_KEY) || `{"darkMode": true}`
    );
    setThemeSettings(themeConfig);
    themeConfig.darkMode ? setCurrentTheme(dark) : setCurrentTheme(primary);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <context.Provider
        value={{
          themeSwitcher,
          slidePageUp,
        }}>
        {children}
      </context.Provider>
    </ThemeProvider>
  );
};

export default AppContext;
export const useAppContext = (): IContext => useContext(context);
