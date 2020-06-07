import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home/Home';
import CollectPoint from './pages/CollectPoint/CollectPoint';

type Toggle = {
  theme: any;
  toggleTheme: any;
};

const Routes: React.FC<Toggle> = ({ theme, toggleTheme }) => {
  return (
    <BrowserRouter>
      <Route exact render={(props) => <Home theme={theme} toggleTheme={toggleTheme} />} path="/" />
      <Route component={CollectPoint} path="/create-collect-point" />
    </BrowserRouter>
  );
};
export default Routes;
