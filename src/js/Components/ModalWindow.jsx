import React, { Component } from 'react';

class ModalWindow extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('modal update');
    console.log(props);
    return {
      show: props.show,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
    };
  }

  render() {
    const ModalComponent = this.props.component;
    console.log('modal render');
    console.log(ModalComponent);
    return <div className={(this.state.show) ? 'shader' : 'hidden'}>
      <div className='modal'>
        <div onClick={this.props.close}>close</div>
        <ModalComponent />
        </div>
        </div>;
  }
}

export default ModalWindow;
