import React, { Component } from 'react'
import { connect } from 'react-redux'

import WeatherRow from './WeatherRow';

class WeatherTable extends Component {
  renderList = () => {
    return this.props.weatherList.map(data => {
      return <WeatherRow key={data.name} {...data} />
    })
  }

  render() {
    return (
      <div className="weather-table-container">
        <table className="weather-table">
          <tbody>
            <tr className="weather-table__heading">
              <th>Location</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
            { this.renderList() }
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps({ weatherList }) {
  return {
    weatherList
  }
}

export default connect(mapStateToProps)(WeatherTable)