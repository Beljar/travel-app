import React, { useState } from 'react';
import './sidebar.scss';
import Trigger from '../trigger/trigger.jsx';
import MapLeaflet from '../map/MapLeaflet.jsx';
import Weater from '../weater/WeatherDisplay.jsx';
import CurrentDate from '../date/CurrentDate.jsx';
import ExchangeRatesWidget from '../exchange-rates-widget/exchange-rates-widget.jsx';

export default function Sidebar({ countryData }) {
  const [classes, setClasses] = useState(['sidebar', 'opened']);

  const toggle = () => {
    setClasses(() =>
      classes.includes('opened')
        ? classes.filter((cls) => cls !== 'opened')
        : [...classes, 'opened']
    );
  };

  return (
    <aside className={classes.join(' ')}>
      <Trigger onClick={toggle} />
      <MapLeaflet latLong={countryData.capitalLocation.coordinates} />
      <Weater lang={countryData.currentLang} city={countryData.capital} />
      <CurrentDate timezone={countryData.timezone} lang={countryData.currentLang} />
      <ExchangeRatesWidget from={countryData.currency} value={1} />
    </aside>
  );
}
