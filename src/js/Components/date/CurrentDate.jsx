import React, {useEffect, useState} from 'react';
import moment from 'moment-timezone';
import 'moment/locale/pt-br';
import date from './date.scss';

export default function WeatherDisplay({timezone, lang}) {
  // console.log(timezone)
  // let date = new Date();

  const langs = {
    'ru': 'Местное время',
    'en': 'The local time',
    'bel': 'Мясцовае час',
  }

  let [date, setDate] = useState(null);
  let [monthBel, setMonthBel] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if(lang === 'bel') {
        lang = 'ru';
      } 
      moment.locale(lang);
      let date = moment().tz(timezone).format('MMMM Do YYYY | HH:mm:ss');

      setDate(date)
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if(date === null) return;
    if(lang !== 'bel') return;

    const months = {
      "январь": "студзень",
      "февраль": "люты",
      "март": "сакавик",
      "апрель": "красавик",
      "май": "май",
      "июнь": "чэрвень",
      "июль": "липень",
      "август": "жнивень",
      "сентябрь": "верасень",
      "октябрь": "кастрычник",
      "ноябрь": "листапад",
      "декабрь": "снежань",
    }

    let monthLength = date.split(' ')[0].length;

    let strB = date.slice(monthLength)
    let strA = date.slice(0, monthLength)
    let strC = months[strA]

    let result = strC + strB

    setMonthBel(result)
  })

  
  return (
    <div className='time'>
      <div> {langs[lang]}: {monthBel ? monthBel : date}</div>
    </div>
  )
}