import React from 'react'
import { Provider } from 'react-redux'

import store from '../store'

import Header from './Header'
import SearchBar from './SearchBar'
import WeatherTable from './WeatherTable'

import '../styles.css'

const Main = () => {
  return (
    <Provider store={store}>
      <main>
        <Header />
        <SearchBar />
        <WeatherTable />
      </main>
    </Provider>
  )
}

export default Main;