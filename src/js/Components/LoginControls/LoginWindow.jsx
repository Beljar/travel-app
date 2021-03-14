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

  render() {
    return <div className='modal-content'>
      <form className='form'>
        <Input className='input' size="large" type="text" prefix={<MailOutlined />} id="email" name="email" placeholder="Your e-mail" onChange={this.setLogin.bind(this)}></Input>
        <Input className='input' size="large" type="text" prefix={<LockOutlined />} id="password" name="password" placeholder="Password"></Input>
      </form>
      <AuthentificationConsumer>{(authContext) =>
        <ModalContextConsumer>{(context) =>
          <Button type='primary' className='btn' onClick={() => {
            authContext.onLogin(this.state.login, this.state.password);
            context.update('LoginWindow', { show: 0 });
            }}>Login</Button>}
        </ModalContextConsumer>}
      </AuthentificationConsumer>
    </div>
  }
}

export default LoginWindow;
