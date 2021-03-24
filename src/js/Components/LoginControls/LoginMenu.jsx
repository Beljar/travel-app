import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ModalContextConsumer } from '../ModalWindows/ModalWindowsContext.jsx';

function LoginMenu(props) {
  const { dispatch } = props;
  return <div className='login-menu'>
    {(props.userName) ? <Fragment>
      <div>Hello <b>{props.userName}</b>!</div>
      <div className='link' onClick={() => dispatch({type: 'USER-NAME_CHANGE', payload: null})}>Log Out</div></Fragment>
      : <ModalContextConsumer>{(context) => <Fragment>
        <div className='link' onClick={() => context.update('LoginWindow', { show: 1 })}>Log In</div>
        <div className='link' onClick={() => context.update('SignUpWindow', { show: 1 })}>Sing up</div>
      </Fragment>}
      </ModalContextConsumer>
    }
  </div>;
}

LoginMenu.propTypes = {
  userName: PropTypes.string,
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  const props = {
    userName: state.userName,
  };
  return props;
};

export default connect(mapStateToProps)(LoginMenu);
