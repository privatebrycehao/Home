import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';
import Resume from '../Resume';

const App = () => (
  <div className="app-wrapper">
    <Header />
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/resume">
        <Resume />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
    <Footer />
  </div>
);

export default App;
