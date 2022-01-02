import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import axios from 'axios'
import Geocode from 'react-geocode'

require('dotenv').config()

// const AnyReactComponent = ({ text }) => <div>{text}</div>

class Map extends Component {
  static defaultProps = {
    center: { lat: 40.73, lng: -73.93 },
    zoom: 11,
  }

  // GET request using axios inside useEffect React hook
  // geocode = () => {
  //   const location = '22 west 25th street, new york, ny'
  //   axios
  //     .get('https://maps.googleapis.com/maps/api/geocode.json', {
  //       params: {
  //         address: location,
  //         key: process.env.REACT_APP_GEO_KEY,
  //       },
  //       withCredentials: false,
  //       headers: { 'Access-Control-Allow-Origin': true },
  //     })
  //     .then(function (resp) {
  //       console.log(resp)
  //     })
  //     .catch(function (error) {
  //       console.log(error)
  //     })
  // }

  // empty dependency array means this effect will only run once (like componentDidMount in classes)

  // geocode = () => {
  //   const location = '22 west 25th street, new york, ny'
  //   axios
  //     .get('https://maps.googleapis.com/maps/api/geocode.json', {
  //       params: {
  //         address: location,
  //         key: process.env.REACT_APP_GEO_KEY,
  //       },
  //       headers: { 'Access-Control-Allow-Origin': '*' },
  //     })
  //     .then(function (resp) {
  //       console.log(resp)
  //     })
  //     .catch(function (error) {
  //       console.log(error)
  //     })
  // }
  initGeocoder = ({ maps }) => {
    const Geocoder = new maps.Geocoder()
  }
  Geocode.setApiKey(REACT_APP_GEO_KEY );


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
