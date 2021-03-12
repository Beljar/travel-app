import React from 'react';
import './trigger.scss';

export default function Trigger({ onClick }) {
  return (
    <div className='trigger' onClick={onClick}>
      <i className='fas fa-bars' />
    </div>
  );
}
