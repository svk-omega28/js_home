'use strict';

export function fetchWeatherData(city) {
  return new Promise((resolve, reject) => {
    const apiKey = '5d066958a60d315387d9492393935c19';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        if (data.cod === '404') {
          reject('Город не найден!');
        } else {
          resolve(data);
        }
      } else {
        reject('Ошибка в запросе!');
      }
    };

    xhr.onerror = function () {
      reject('Ошибка в запросе!');
    };

    xhr.send();
  });
}
