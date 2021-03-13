import React, {useEffect, useState} from 'react';
import weater from './weater.scss';

export default function WeatherDisplay({city, lang}) {

  let [iconUrl, setIconUrl] = useState(null);
  let [weater, setWeater] = useState({
    temp: '',
    description: ''
  });

  useEffect(() => {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=afeeb4a567b04e8d0d647746c206cec1&lang=${lang}`;
    fetch(url)
    .then(res => res.json())
    .then(json => {

      const copy  = Object.assign({}, weater);
      copy['temp'] = Math.trunc(json.main.temp);
      copy['description'] = json.weather[0].description;
      setWeater(copy)

      let icon = json.weather[0].icon;
      setIconUrl(`http://openweathermap.org/img/w/${icon}.png`);
    });
  }, [city])

  return(
      <div className='weater'>
        <div className='weater-city'>Погода в {city}</div>
          <div><img src={iconUrl} alt={weater.description}/></div>
          <div>{weater.temp}&#176;, {weater.description}</div>
      </div>
  )
}