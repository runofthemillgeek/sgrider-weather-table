import React from 'react'
import { connect } from 'react-redux'

import { fetchWeather } from '../actions'
import { getCoordinates } from '../utils'

const SearchBar = ({ onSearchSubmit }) => {
  return (
    <div className="searchbar-container">
      <input
        className="searchbar"
        type="text"
        placeholder="eg. Baltimore, USA"
        onKeyUp={({target, key}) => { 
          if (key === 'Enter') {
            onSearchSubmit(target.value)
            target.value = '';
          }
        }}/>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchSubmit: searchEntry => {
      console.log(searchEntry)

      getCoordinates(searchEntry)
        .then(({name = null, coords = null} = null) => {
          if (coords != null) dispatch(fetchWeather(name, coords))
        })
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)