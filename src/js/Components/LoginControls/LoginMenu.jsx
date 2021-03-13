import React, { Component, Fragment } from 'react';
import { ModalContextProvider, ModalContextConsumer } from '../ModalWindows/ModalWindowsContext.jsx';
import { AuthentificationConsumer } from '../Authentification/AuthentificationContext.jsx';

class LoginMenu extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this.props);
    return <AuthentificationConsumer>{(authContext) => {
      console.log(`login:${authContext.login}`)
      if (authContext.login) {
        return <Fragment><div>Hello {authContext.login}!</div>
        <div onClick={() => authContext.onLogout()}>Log Out</div></Fragment>
      } else {
        return <ModalContextConsumer>{(context) => <Fragment>
          <div onClick={() => context.update('LoginWindow', { show: 1 })}>Log In</div>
          <div>Sing up</div>
        </Fragment>}
        </ModalContextConsumer>
      }
    }}
    </AuthentificationConsumer>;
  }
}

export default LoginMenu;
