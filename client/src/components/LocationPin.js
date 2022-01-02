import React from 'react'
import Geocode from 'react-geocode'
import Map from './Map'

// Geocode.fromAddress('Eiffel Tower').then(
//   response => {
//     const { lat, lng } = response.results[0].geometry.location
//     console.log(lat, lng)
//   },
//   error => {
//     console.error(error)
//   }
// )
// address, *apiKey, *language, *region

const LocationPin = () => {
  const location = {
    lat: 40.73,
    lng: -73.93,
  }
  return <Map location={location} locationPin={LocationPin} />
}

export default LocationPin
