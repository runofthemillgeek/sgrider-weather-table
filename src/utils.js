import axios from 'axios'

import * as config from './config'

export function getCoordinates(location) {
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${config.GOOGLE_KEY}`)
              .then(resp => {
                if (resp && resp.data && resp.data.results) {
                  const [locData] = resp.data.results

                  const {
                    formatted_address: name,
                    geometry: {
                      location: coords
                    }
                  } = locData

                  return { name, coords }
                }

                return null
              })
}