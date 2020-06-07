import { useEffect, useState } from 'react';

function UseDarkMode() {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  const setThemeMode = (status) => {
    window.localStorage.setItem('theme', status);
    setTheme(status);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setThemeMode('dark');
    } else {
      setThemeMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme
      ? setThemeMode('dark')
      : localTheme
      ? setTheme(localTheme)
      : setThemeMode('light');
    setComponentMounted(true);
  }, []);
  return [theme, toggleTheme, componentMounted];
}
export { UseDarkMode };
