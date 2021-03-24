import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AuthentificationConsumer } from '../Authentification/AuthentificationContext.jsx';
import { ModalContextProvider, ModalContextConsumer } from '../ModalWindows/ModalWindowsContext.jsx';
import { Button, Input } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const login = async (email, password) => {
  const url = 'https://travel-app-be.herokuapp.com/login';
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
  }
}
function LoginWindow(props) {

  const { dispatch } = props;

  let [mail, setMail] = useState(props.userName);
  let [password, setPassword] = useState('');



  return <div className='modal-content'>
    <form className='form'>
      <Input className='input' size="large" type="text" prefix={<MailOutlined />} id="email" name="email" placeholder="Your e-mail" onChange={(e) => setMail(e.target.value)}></Input>
      <Input className='input' size="large" type="text" prefix={<LockOutlined />} id="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></Input>
    </form>
    <ModalContextConsumer>{(context) => <Button type='primary' className='btn' onClick={async () => {
      await login(mail, password);
      dispatch({ type: 'USER-NAME_CHANGE', payload: mail });
      context.update('LoginWindow', { show: 0 });
    }}>Login</Button>}
    </ModalContextConsumer>
  </div>;
}

LoginWindow.propTypes = {
  userName: PropTypes.string,
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  const props = {
    userName: state.userName,
  };
  return props;
};

export default connect(mapStateToProps)(LoginWindow);
