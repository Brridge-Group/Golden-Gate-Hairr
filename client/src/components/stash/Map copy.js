import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import axios from 'axios'
require('dotenv').config()

// const AnyReactComponent = ({ text }) => <div>{text}</div>

const Map = () =>{
  const defaultProps = {
    center: { lat: 40.73, lng: -73.93 },
    zoom: 11,
  }


//   useEffect(() => {
//     // GET request using axios inside useEffect React hook
//     geocode = () => {
//     const location = '22 west 25th street, new york, ny'
//     axios
//       .get('https://maps.googleapis.com/maps/api/geocode.json', {
//         withCredentials: true,
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         params: {
//           address: location,
//           key: process.env.REACT_APP_GEO_KEY,
//         },
//       })
//       .then(function (resp) {
//         console.log(resp)
//       })
//       .catch(function (error) {
//         console.log(error)
//       })
//     }
//     geocode()
//     // axios.get('https://api.npms.io/v2/search?q=react')
//     //     .then(response => setTotalReactPackages(response.data.total));

// // empty dependency array means this effect will only run once (like componentDidMount in classes)
// }, []);

useEffect(() => {
  const geocodefetchData = async () => {
    const location = '22 west 25th street, new york, ny'

    try {
      const {data: response} = await axios.get('https://maps.googleapis.com/maps/api/geocode.json', {
        withCredentials: true,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        params: {
          address: location,
          key: process.env.REACT_APP_GEO_KEY,
        },
<<<<<<< HEAD
        withCredentials: false,
        headers: { 'Access-Control-Allow-Origin': true },
      })
      .then(function (resp) {
        console.log(resp)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

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
=======
      })
      setData(response);
    } catch (error) {
      console.error(error.message);
    }
    // setLoading(false);
  }

  geocodefetchData();
}, []);
>>>>>>> hair-49-google-map

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
<<<<<<< HEAD
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
=======
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
>>>>>>> hair-49-google-map
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
        >
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' /> */}
        </GoogleMapReact>
<<<<<<< HEAD
        {this.geocode()}
=======
        {/* {this.geocode()} */}
>>>>>>> hair-49-google-map
      </div>
    )
  }
}

export default Map
