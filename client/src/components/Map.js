import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import axios from 'axios'

require('dotenv').config()

// const AnyReactComponent = ({ text }) => <div>{text}</div>

class Map extends Component {
  static defaultProps = {
    center: { lat: 40.73, lng: -73.93 },
    zoom: 11,
  }
  // state = {
  //   center: {},
  // }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={this.props.center}
          // center={this.state.center}
          defaultZoom={this.props.zoom}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
          onGoogleApiLoaded={this.initGeocoder}
          yesIWantToUseGoogleMapApiInternals
        >
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' /> */}
        </GoogleMapReact>
        {/* {this.geocode()} */}
      </div>
    )
  }
}

export default Map
