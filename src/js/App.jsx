import React from 'react';
import ReactDom from 'react-dom';
import 'antd/dist/antd.css';
import '../sass/style.scss'
import MainPage from './Components/MainPageComponent.jsx'
import CountryPage from './Components/CountryPageComponent.jsx'
import { BrowserRouter, Switch, Route } from 'react-router-dom' 
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route component={MainPage} path="/" />
        <Route component={CountryPage} path="/country" />
      </Switch>
    </BrowserRouter>
  )
}

ReactDom.render(<App />, document.querySelector('#main'));
