import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import logger from 'redux-logger'

import rootReducer from './reducers'

export default createStore(rootReducer, applyMiddleware(promiseMiddleware(), logger))