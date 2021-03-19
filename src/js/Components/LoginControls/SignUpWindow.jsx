import React, { Component } from 'react';
import { AuthentificationConsumer } from '../Authentification/AuthentificationContext.jsx';
import { ModalContextProvider, ModalContextConsumer } from '../ModalWindows/ModalWindowsContext.jsx';
import { Button, Input } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

class LoginWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    }
  }

  setLogin(e) {
    this.setState({login: e.target.value})
  }

  setPassword(e) {
    this.setState({password: e.target.value})
  }

  singUp(context, authContext) {
    console.log(this.state);
    authContext.onSignUp({email: this.state.login, password: this.state.password});
    context.update('SignUpWindow', { show: 0 });
  }

  render() {
    return <div className='modal-content'>
      <form className='form'>
      <Input className='input' size='large' type="text" id="email" name="email" prefix={<MailOutlined />} placeholder="Your e-mail" onChange={this.setLogin.bind(this)}></Input>
      <Input className='input' size='large' type="text" id="password" name="password" prefix={<LockOutlined />} placeholder="Password" onChange={this.setPassword.bind(this)}></Input>
      </form>
      <AuthentificationConsumer>{(authContext) =>
        <ModalContextConsumer>{(context) =>
          <Button type='primary' className='btn' onClick={this.singUp.bind(this, context, authContext)}>Sign Up</Button>}
        </ModalContextConsumer>}
      </AuthentificationConsumer>
    </div>
  }
}

export default LoginWindow;
