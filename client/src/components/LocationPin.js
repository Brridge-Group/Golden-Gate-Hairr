import React from 'react'
import Geocode from 'react-geocode'
import Map from './Map'

const LocationPin = props => {
  console.log('in location pin', props)
  const address = props.address.toString()
  console.log(address)

  // const getLatLng = () => {
  //   // Geocode.fromAddress(this.props.address).then(
  //   Geocode.fromAddress(address).then(
  //     response => {
  //       const resp = response.results[0].geometry.location
  //       this.setState({
  //         coords: resp,
  //       })
  //       console.log(resp)
  //     },
  //     error => {
  //       console.error(error)
  //     }
  //   )
  // }
  const location = {
    lat: 40.73,
    lng: -73.93,
  }
  return <>{/* {getLatLng()} */}</>
}

export default LocationPin
