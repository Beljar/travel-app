import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import MainPage from './Components/MainPageComponent.jsx';
import CountryPage from './Components/CountryPageComponent.jsx';
import LoginWindow from './Components/LoginControls/LoginWindow.jsx';
import ModalContainer from './Components/ModalWindows/ModalContainer.jsx';
import { ModalContextProvider, ModalContextConsumer } from './Components/ModalWindows/ModalWindowsContext.jsx';
import { AuthentificationProvider } from './Components/Authentification/AuthentificationContext.jsx'
import '../sass/style.scss';
import 'antd/dist/antd.css';


function App() {

  return (
    <AuthentificationProvider>
      <ModalContextProvider>
        <ModalContextConsumer>
          {(context) => <ModalContainer {...context} />}
        </ModalContextConsumer>
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
      </ModalContextProvider>
    </AuthentificationProvider>
  );
}

ReactDom.render(<App />, document.querySelector('#main'));
