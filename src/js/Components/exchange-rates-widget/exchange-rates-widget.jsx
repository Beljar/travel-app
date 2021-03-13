import React from 'react';
import CurrencyConverter from 'react-currency-conv';
import { List } from 'antd';
import './exchange-rates-widget.scss';

export default function ExchangeRatesWidget({ from, value }) {
  const usd = <CurrencyConverter from={from} to={'USD'} value={value} precision={2} />;
  const eur = <CurrencyConverter from={from} to={'EUR'} value={value} precision={2} />;
  const rub = <CurrencyConverter from={from} to={'RUB'} value={value} precision={2} />;

  const data = [
    <div key='usd' className='exchange-rates-widget-item'>
      <div className='exchange-rates-widget-value'>{usd}</div>
      <div className='exchange-rates-widget-name'>USD</div>
    </div>,
    <div key='eur' className='exchange-rates-widget-item'>
      <div className='exchange-rates-widget-value'>{eur}</div>
      <div className='exchange-rates-widget-name'>EUR</div>
    </div>,
    <div key='rub' className='exchange-rates-widget-item'>
      <div className='exchange-rates-widget-value'>{rub}</div>
      <div className='exchange-rates-widget-name'>RUB</div>
    </div>,
  ];
  return (
    <List
      className='exchange-rates-widget'
      size='small'
      header={
        <div>
          {value} {from}
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  );
}
