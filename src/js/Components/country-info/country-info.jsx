import React from 'react';
import { Divider, Typography } from 'antd';
import './country-info.scss';

const { Title } = Typography;

export default function CountryInfo({ country, capital, imgUrl, description }) {
  return (
    <div className='country-info'>
      <Divider>
        <Title className='title'>{country}</Title>
        <Title className='subtitle' level={2}>
          {capital}
        </Title>
      </Divider>
      <img alt={country} src={imgUrl} />
      <p className='descr'>{description}</p>
    </div>
  );
}
