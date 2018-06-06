import { combineReducers } from 'redux'

import weatherListReducer from './weatherListReducer'

export default combineReducers({
  weatherList: weatherListReducer
})