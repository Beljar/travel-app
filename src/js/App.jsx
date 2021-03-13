import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import LoginMenu from './Components/LoginControls/LoginMenu.jsx';
import LoginWindow from './Components/LoginControls/LoginWindow.jsx';
import ModalContainer from './Components/ModalWindows/ModalContainer.jsx';
import '../sass/style.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      modals: { LoginWindow: [LoginWindow, { show: 0 }] },
    };
  }

  modalControl(name, props) {
    console.log('modal control');
    this.setState((state) => {
      const { modals } = state;
      const oldProps = modals[name][1];
      const newProps = Object.assign(oldProps, props);
      modals[name][1] = newProps;
      return { modals };
    });
    console.log(this.state);
  }

  render() {
    return <Fragment>
      <ModalContainer content={this.state.modals} modalControl={this.modalControl.bind(this)}/>
      <LoginMenu modalControl={this.modalControl.bind(this)} />
      <div>Travel app is running</div>
    </Fragment>;
  }

}

ReactDom.render(<App />, document.querySelector('#main'));
