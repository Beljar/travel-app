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
    this.state = {
      login
    }
  }

  async login(email, password) {

    const url = 'http://localhost:3000/login';
    const fParams = {
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ email, password }),
      method: "POST"
    }
    const res = await fetch(url, fParams);
    console.log(res);
    if (res.status === 200) {
      const json = await res.json();
      console.log(json);
      document.cookie = `user = ${email}; `;
      this.setState({ login: email });
    }
  }

  logout() {
    document.cookie = `user = ${this.state.login}; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    this.setState({ login: null });
  }

  onSignUp({ email, password }) {
    const url = 'http://localhost:3000/users';
    const fParams = {
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ email, password }),
      method: "POST"
    }
    console.log(fParams.body);
    fetch(url, fParams);
  }

  render() {
    return <Provider value={{ login: this.state.login, onLogin: this.login.bind(this), onLogout: this.logout.bind(this), onSignUp: this.onSignUp.bind(this) }}>{this.props.children}</Provider>
  }
}

export { AuthentificationProvider, Consumer as AuthentificationConsumer }