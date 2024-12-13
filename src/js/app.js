'use strict';

import { fetchWeatherData } from './weather.js';
import { updateWeatherInfo } from './dom.js';

document.getElementById('getWeather').addEventListener('click', () => {
  const city = document.getElementById('city').value;

  if (city) {
    fetchWeatherData(city)
      .then((data) => {
        updateWeatherInfo(data);
        document.getElementById('weatherInfo').style.display = 'block';
      })
      .catch((error) => {
        alert('Ошибка при запросе!');
      });
  } else {
    alert('Пожулайста введите город латиницей!');
  }
});
