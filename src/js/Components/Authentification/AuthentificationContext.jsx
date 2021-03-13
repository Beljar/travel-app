import { OmitProps } from 'antd/lib/transfer/ListBody';
import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

class AuthentificationProvider extends Component {
  constructor(props) {
    super(props);
    let loginCookie = document.cookie.split('; ').find((str) => str.startsWith('user='));
    let login = null;
    if (loginCookie) {
      login = loginCookie.split('=')[1];
    }
    console.log('auth');
    console.log(login);
    this.state = {
      login
    }
    console.log(this.state);
  }

  login(login, password) {
    console.log(login);
    document.cookie = `user = ${login}; `;
    this.setState({login});
    console.log(this.state);
  }

  logout() {
    document.cookie = `user = ${this.state.login}; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    this.setState({login: null});
  }

  render() {
    return <Provider value={{login: this.state.login, onLogin: this.login.bind(this), onLogout: this.logout.bind(this), onSignUp: () => {}}}>{this.props.children}</Provider>
  }
}

export { AuthentificationProvider, Consumer as AuthentificationConsumer}