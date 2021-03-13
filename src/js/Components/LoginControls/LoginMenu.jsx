import React, { Component, Fragment } from 'react';
import { ModalContextProvider, ModalContextConsumer } from '../ModalWindows/ModalWindowsContext.jsx';
import { AuthentificationConsumer } from '../Authentification/AuthentificationContext.jsx';

class LoginMenu extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this.props);
    return <div className='login-menu'>
      <AuthentificationConsumer>{(authContext) => {
        console.log(`login:${authContext.login}`)
        if (authContext.login) {
          return <Fragment><div>Hello <b>{authContext.login}</b>!</div>
            <div className='link' onClick={() => authContext.onLogout()}>Log Out</div></Fragment>
        } else {
          return <ModalContextConsumer>{(context) => <Fragment>
            <div className='link' onClick={() => context.update('LoginWindow', { show: 1 })}>Log In</div>
            <div className='link' onClick={() => context.update('SignUpWindow', { show: 1 })}>Sing up</div>
          </Fragment>}
          </ModalContextConsumer>
        }
      }}
      </AuthentificationConsumer>
    </div>;
  }
}

export default LoginMenu;
