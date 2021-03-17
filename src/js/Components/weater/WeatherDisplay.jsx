import React, {useEffect, useState} from 'react';
import weater from './weater.scss';

export default function WeatherDisplay({city, lang}) {

  let [iconUrl, setIconUrl] = useState(null);
  let [weater, setWeater] = useState({
    temp: '',
    description: ''
  });

  const dataCountry = {
    'сакрамента': 'сакраменто',
    'мадрыд': 'мадрид',
    'парыж': 'париж',
    'лондан': 'лондон',
    'італія': 'италия',
    'нарвегія': 'норвегия',
    'германія': 'германия',
    'канада': 'канада',
  }

  const startText = {
    'ru': 'погода в',
    'en': 'weather in',
    'bel': 'надвор\'е ў',
  }

  useEffect(() => {
    let copyCity;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Сакраменто&units=metric&appid=afeeb4a567b04e8d0d647746c206cec1&lang=${lang}`;

    if(lang === 'bel'){
      copyCity = dataCountry[city.toLowerCase()]
      if(copyCity === undefined) return;
      url = `https://api.openweathermap.org/data/2.5/weather?q=${copyCity.slice(0, 1).toUpperCase() + copyCity.slice(1)}&units=metric&appid=afeeb4a567b04e8d0d647746c206cec1&lang=ru`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=afeeb4a567b04e8d0d647746c206cec1&lang=${lang}`;
    }

    fetch(url)
    .then(res => res.json())
    .then(json => {
      try{
        const copy  = Object.assign({}, weater);
        copy['temp'] = Math.trunc(json.main.temp);
        copy['description'] = json.weather[0].description;
        setWeater(copy)
  
        let icon = json.weather[0].icon;
        setIconUrl(`http://openweathermap.org/img/w/${icon}.png`);
      }catch(err){}
    });
  }, [city])

  return(
      <div className='weater'>
        <div className='weater-city'>{startText[lang]} {city}</div>
          <div><img src={iconUrl} alt={weater.description}/></div>
          <div>{weater.temp}&#176;, {weater.description}</div>
      </div>
  )
}