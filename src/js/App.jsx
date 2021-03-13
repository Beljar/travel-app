import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import '../sass/style.scss';
import MainPage from './Components/MainPageComponent.jsx';
import CountryPage from './Components/CountryPageComponent.jsx';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route component={MainPage} path='/' exact />
        <Route
          render={() => <CountryPage countryId='6046207c9310a86fa8ef83c2' lang='en' />}
          path='/country'
        />
      </Switch>
    </BrowserRouter>
  );
}

ReactDom.render(<App />, document.querySelector('#main'));
