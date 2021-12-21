import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
require('dotenv').config()

// const AnyReactComponent = ({ text }) => <div>{text}</div>

class Map extends Component {
  static defaultProps = {
    center: { lat: 40.73, lng: -73.93 },
    zoom: 11,
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
        >
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' /> */}
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map
