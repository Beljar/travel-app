import React from 'react';
import ReactDom from 'react-dom';
import 'antd/dist/antd.css';
import CountryPage from './Components/CountryPageComponent.jsx';

function App() {
  return <CountryPage />;
}

ReactDom.render(<App />, document.querySelector('#main'));
