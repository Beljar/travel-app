import React, { Component, useContext } from 'react';
import ModalWindow from './ModalWindow.jsx';


function ModalContainer(props) {

  console.log(props)

    return <div className='modal-container'>
      {Object.entries(props.content).map((entry, idx) => {
        const [name, modal] = entry;
        return <ModalWindow key={idx} component={modal[0]} {...modal[1]} close={() => props.update(name, { show: 0 })}/>}
      )}
    </div> 
}

export default ModalContainer;
