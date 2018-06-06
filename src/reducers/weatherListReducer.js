import {
  ADD_LOCATION_FULFILLED
} from '../actions'

export default function weatherListReducer(state = [], action) {
  switch (action.type) {
    case ADD_LOCATION_FULFILLED:{
      const [name, weatherData] = action.payload

      return [
        ...state,
        {
          name,
          coords: transformCoords(weatherData.data.city.coord),
          humidities: extractHumidities(weatherData.data.list),
          pressures: extractPressures(weatherData.data.list),
          temperatures: extractTemps(weatherData.data.list)
        }
      ]
    }
    default:
      return state
  }
}

function transformCoords(coords) {
  return {
    lat: coords.lat,
    lng: coords.lon
  }
}

function extractHumidities(list) {
  return list.map(entry => entry.humidity)
}

function extractPressures(list) {
  return list.map(entry => entry.pressure)
}

function extractTemps(list) {
  return list.map(entry => entry.temp.max)
}