import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Geocode from 'react-geocode'

require('dotenv').config()

const Marker = () => (
  <div>
    <i className='fas fa-map-marker-alt fa-2x'></i>
  </div>
)
class Map extends Component {
  static defaultProps = {
    center: { lat: 40.73, lng: -73.93 },
    zoom: 10,
  }
  constructor(props) {
    super(props)
    Geocode.setApiKey(process.env.REACT_APP_GEO_KEY)
    this.state = {
      coords: {},
    }
  }

  getLatLng = () => {
    // Geocode.fromAddress(this.props.address).then(
    Geocode.fromAddress('3601 concho, dallas, tx').then(
      response => {
        const resp = response.results[0].geometry.location
        // console.log(resp, response.results[0].geometry.location)
        this.setState({
          coords: resp,
        })
      },
      error => {
        console.error(error)
      }
    )
  }

  render() {
    // Object.values(example)[0]
    // console.log('in map, this.props', this.props, this.props.address)

    return (
      <div style={{ height: '100%', width: '100%' }}>
        {/* <div style={{ height: '100vh', width: '100%' }}> */}

        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={this.props.center}
          center={this.state.coords}
          defaultZoom={this.props.zoom}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
          // onGoogleApiLoaded={this.initGeocoder}
          // yesIWantToUseGoogleMapApiInternals
        >
          <Marker lat={Object.values(this.state.coords)[0]} lng={Object.values(this.state.coords)[1]} />
        </GoogleMapReact>
        {this.getLatLng()}
        {/* {this.geocode()} */}
      </div>
    )
  }
}

export default Map
