import React, { Component } from 'react';

class LoginWindow extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return <div className=''>
      <form className='form'>
      <input type="text" id="email" name="email" placeholder="Your e-mail"></input>
      <input type="text" id="password" name="password" placeholder="Password"></input>
      </form>
      <div className='btn'>Login</div>
    </div>
  }
}

export default LoginWindow;
