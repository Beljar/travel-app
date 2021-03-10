import React from 'react';
import ReactDom from 'react-dom';
import MainPageComponent from './Components/MainPageComponent.jsx';

function App() {
  return (
    <>
      <div>Travel app is running</div>
      <MainPageComponent />
    </>
  ) 
}

ReactDom.render(<App />, document.querySelector('#main'));
