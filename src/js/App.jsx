import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import MainPage from './Components/MainPageComponent.jsx';
import CountryPage from './Components/CountryPageComponent.jsx';
import LoginWindow from './Components/LoginControls/LoginWindow.jsx';
import ModalContainer from './Components/ModalWindows/ModalContainer.jsx';
import { ModalContextProvider, ModalContextConsumer } from './Components/ModalWindows/ModalWindowsContext.jsx';
import { AuthentificationProvider } from './Components/Authentification/AuthentificationContext.jsx';
import { Provider } from 'react-redux';
import store from './utils/store.jsx';
import '../sass/style.scss';
import 'antd/dist/antd.css';


function App() {

  return (
    <Provider store={store}>
      <AuthentificationProvider>
        <ModalContextProvider>
          <ModalContextConsumer>
            {(context) => <ModalContainer {...context} />}
          </ModalContextConsumer>
          <HashRouter>
            <ScrollToTop />
            <Switch>
              <Route component={MainPage} path='/' exact />
              <Route path='/country/:id'>
                <CountryPage />
              </Route>
            </Switch>
          </HashRouter>
        </ModalContextProvider>
      </AuthentificationProvider>
    </Provider>
  );
}

ReactDom.render(<App />, document.querySelector('#main'));
