'use client';

import {
  ThemeToggleButton,
  useThemeTransition
} from '@/components/animations/animate-theme-effect';
import { useTheme } from 'next-themes';
import * as React from 'react';

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const { startTransition } = useThemeTransition();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = React.useCallback(() => {
    startTransition(() => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    });
  }, [setTheme, startTransition, theme]);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeToggleButton
      theme={theme === 'dark' ? 'light' : 'dark'}
      onClick={handleThemeToggle}
      variant='circle'
      start='center'
    />
  );
}
