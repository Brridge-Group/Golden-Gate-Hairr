import React from 'react'
import Map from './Map'

const LocationPin = () => {
  const location = {
    lat: 40.73,
    lng: -73.93,
  }
  return (
    <div>
      <Map location={location} locationPin={LocationPin} />
    </div>
  )
}

export default LocationPin
