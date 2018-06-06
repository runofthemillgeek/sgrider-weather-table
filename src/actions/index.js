import axios from 'axios';

import * as config from '../config'

export const ADD_LOCATION = 'ADD_LOCATION';
export const ADD_LOCATION_FULFILLED = 'ADD_LOCATION_FULFILLED';

export const fetchWeather = (name, coords) => {
  return {
    name,
    type: ADD_LOCATION,
    payload: Promise.all([Promise.resolve(name), axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${coords.lat}&lon=${coords.lng}&appid=${config.WEATHER_API_KEY}`)])
  }
}