import React, { Component } from 'react';
import { AuthentificationConsumer } from '../Authentification/AuthentificationContext.jsx';
import { ModalContextProvider, ModalContextConsumer } from '../ModalWindows/ModalWindowsContext.jsx';

class LoginWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    }
  }

  setLogin(e) {
    console.log(e.target.value);
    this.setState({login: e.target.value})
  }

  render() {
    return <div className=''>
      <form className='form'>
        <input type="text" id="email" name="email" placeholder="Your e-mail" onChange={this.setLogin.bind(this)}></input>
        <input type="text" id="password" name="password" placeholder="Password"></input>
      </form>
      <AuthentificationConsumer>{(authContext) =>
        <ModalContextConsumer>{(context) =>
          <div className='btn' onClick={() => {
            authContext.onLogin(this.state.login, this.state.password);
            context.update('LoginWindow', { show: 0 });
            }}>Login</div>}
        </ModalContextConsumer>}
      </AuthentificationConsumer>
    </div>
  }
}

export default LoginWindow;
