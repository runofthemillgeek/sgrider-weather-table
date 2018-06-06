import React from 'react'

import Chart from './Chart'
import GoogleMap from './GoogleMap'

import * as config from '../config'

const WeatherRow = ({ name, humidities, pressures, temperatures }) => {
  return (
    <tr className="weather-row">
      <td><GoogleMap apiKey={config.GOOGLE_KEY} place={name} /></td>
      <td><Chart color="red" data={temperatures} /></td>
      <td><Chart color="blue" data={pressures} /></td>
      <td><Chart color="green" data={humidities} /></td>
    </tr>
  )
}

export default WeatherRow