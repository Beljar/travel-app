import React, { Component } from 'react';
import {ModalsContext} from './ModalWindowsContext.jsx';

function ModalWindow (props) {
    const ModalComponent = props.component;
    return <div className={(props.show) ? 'shader' : 'hidden'}>
      <div className='modal'>
        <div onClick={props.close} className='modal__close'>X</div>
        <ModalComponent />
        </div>
        </div>;
  
}

export default ModalWindow;
