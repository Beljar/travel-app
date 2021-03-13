import React, { Component, Fragment } from 'react';

class LoginMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <Fragment>
      <div onClick={() => this.props.modalControl('LoginWindow', { show: 1 })}>Login</div>
      <div>Sing up</div>
    </Fragment>;
  }
}

export default LoginMenu;
