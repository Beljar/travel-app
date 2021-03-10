import React from 'react';
import ReactDom from 'react-dom';
import '../sass/style.scss'
import MainPage from './Components/MainPageComponent.jsx'

function App() {
  return <MainPage />
}

ReactDom.render(<App />, document.querySelector('#main'));
