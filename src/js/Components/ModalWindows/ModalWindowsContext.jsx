import React, { Component } from "react";
import LoginWindow from '../LoginControls/LoginWindow.jsx';

const { Provider, Consumer } = React.createContext();

class ModalContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { LoginWindow: [LoginWindow, { show: 0 }] }
  }

  modalControl(name, props) {
    console.log('modal control');
    this.setState((state) => {
      const oldProps = state[name][1];
      const newProps = Object.assign(oldProps, props);
      state[name][1] = newProps;
      return state;
    })

  }
  render() {
    return <Provider value={{ content: this.state, update: this.modalControl.bind(this) }}>{this.props.children}</Provider>
  }
}

export { ModalContextProvider, Consumer as ModalContextConsumer };