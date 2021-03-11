import React, { Component } from 'react';
import ModalWindow from './ModalWindow.jsx';

class ModalContainer extends Component {
  constructor(props) {
    super(props);
  }

  close(name) {
    console.log(`close ${name}`);
  }

  render() {
    return <div className='modal-container'>
      {Object.entries(this.props.content).map((entry, idx) => {
        const [name, modal] = entry;
        console.log(modal);
        return <ModalWindow key={idx} component={modal[0]} {...modal[1]} close={() => this.props.modalControl(name, { show: 0 })} />
      })}
    </div>
  }
}

export default ModalContainer;
