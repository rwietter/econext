import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home/Home';
import CollectPoint from './pages/CollectPoint/CollectPoint';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact component={Home} path="/" />
      <Route component={CollectPoint} path="/create-collect-point" />
    </BrowserRouter>
  );
};
export default Routes;
