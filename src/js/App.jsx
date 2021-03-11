import React from 'react';
import ReactDom from 'react-dom';
import 'antd/dist/antd.css';
import CountryPage from './Components/CountryPageComponent.jsx';

function App() {
  return <CountryPage countryId='6046207c9310a86fa8ef83c2' lang='en' />;
}

ReactDom.render(<App />, document.querySelector('#main'));
