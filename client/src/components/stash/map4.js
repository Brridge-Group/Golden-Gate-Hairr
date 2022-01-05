import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Geocode from 'react-geocode'

require('dotenv').config()

// const AnyReactComponent = ({ text }) => <div>{text}</div>
class Map extends Component {
  static defaultProps = {
    center: { lat: 40.73, lng: -73.93 },
    zoom: 11,
  }
  constructor(props) {
    super(props)
    Geocode.setApiKey(process.env.REACT_APP_GEO_KEY)
  }
  state = {
    center: {
      lat: 0,
      lng: 0,
    },
  }
  getLatLng = () => {
    Geocode.fromAddress(this.props.address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location
        console.log(lat, lng, this.state.center, response.results[0].geometry.location)
      },
      error => {
        console.error(error)
      }
    )
  }

  render() {
    console.log('in map, this.props', this.props, this.props.address)

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={this.props.center}
          center={this.getLatLng()}
          defaultZoom={this.props.zoom}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
          // onGoogleApiLoaded={this.initGeocoder}
          // yesIWantToUseGoogleMapApiInternals
        >
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' /> */}
        </GoogleMapReact>
        {/* {this.geocode()} */}
      </div>
    )
  }
}

export default Map
