import React, { ReactNode, useState, useEffect } from 'react';
import { createContext, useContext } from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { dark, primary } from '../themes/themes';
interface AppContextProps {
	themeSwitcher: () => void;
	slidePageUp: () => void;
}
interface Props {
	children: ReactNode;
}
interface ThemeSettings {
	dark_mode: boolean;
}

const context = createContext<AppContextProps>({
	themeSwitcher: () => {},
	slidePageUp: () => {},
});
const AppContext: React.FC<Props> = ({ children }) => {
	const [themeSettings, setThemeSettings] = useState<ThemeSettings>({
		dark_mode: false,
	});
	const [mode, setMode] = useState(primary);

	const themePrefers = (): void => {
		let key: string = 'UminoSettings';
		let theme_data: any = JSON.parse(
			localStorage.getItem(key) || `{"dark_mode": true}`
		);

		if (!theme_data.dark_mode || theme_data.dark_mode === undefined) {
			theme_data.dark_mode = false;
			localStorage.setItem(key, JSON.stringify(theme_data));
			setThemeSettings(theme_data);
			setMode(primary);
			return;
		}
		setThemeSettings(theme_data);
		themeSwitcher();
	};

	const themeSwitcher = (): void => {
		if (themeSettings.dark_mode === false) {
			setMode(dark);
			setThemeSettings({ dark_mode: true });
			localStorage.setItem(
				'UminoSettings',
				JSON.stringify({ dark_mode: true })
			);
			return;
		}
		setMode(primary);
		setThemeSettings({ dark_mode: false });
		localStorage.setItem('UminoSettings', JSON.stringify({ dark_mode: false }));
	};

	// slides the page to the top
	const slidePageUp = (): void => {
		window.scrollTo({
			left: 0,
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		themePrefers();
	}, []);

	return (
		<ThemeProvider theme={mode}>
			<GlobalStyles />
			<context.Provider
				value={{
					themeSwitcher,
					slidePageUp,
				}}
			>
				{children}
			</context.Provider>
		</ThemeProvider>
	);
};

export const useAppContext = (): AppContextProps => {
	const contextValues = useContext(context);
	return contextValues;
};

export default AppContext;
