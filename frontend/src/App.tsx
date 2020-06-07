import React from 'react';
import { ThemeProvider } from 'styled-components';
import { UseDarkMode } from './components/useDarkMode/useDarkMode';

import Routes from './routes';
import GlobalStyle from './style/global';
import { lightTheme, darkTheme } from './style/styles';

function App() {
  const [theme, toggleTheme, componentMounted] = UseDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <div className="App">
          <GlobalStyle />
          <Routes theme={theme} toggleTheme={toggleTheme} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
