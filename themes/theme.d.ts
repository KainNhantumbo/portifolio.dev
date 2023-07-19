import {} from 'styled-components';
import type { ThemeObj } from '../@types/ThemeTypes';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeObj {}
}
