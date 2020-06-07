import React from 'react';

import { ToggleContainer } from './styles';
import MoonIcon from '../../static/toogleTheme/moon.svg';
import SunIcon from '../../static/toogleTheme/sun.svg';

function ToggleMode({ theme, toggleTheme }) {
  const isLight = theme === 'light';
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <img src={SunIcon} width="224" height="224" alt="Sun free icon" title="Sun free icon" />
      <img src={MoonIcon} width="224" height="224" alt="Moon free icon" title="Moon free icon" />
    </ToggleContainer>
  );
}

export default ToggleMode;
