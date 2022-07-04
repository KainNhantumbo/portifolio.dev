import {} from 'styled-components';
import type { ThemeObj } from './ThemeTypes';

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeObj {}
}
