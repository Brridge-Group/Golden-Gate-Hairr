// import React, { Component } from 'react'
// import GoogleMapReact from 'google-map-react'

// require('dotenv').config()

// const Marker = () => (
//   <div>
//     <i className='fas fa-map-marker-alt fa-2x'></i>
//   </div>
// )
// class MapToo extends Component {
//   static defaultProps = {
//     center: { lat: 40.73, lng: -73.93 },
//     zoom: 10,
//   }
//   constructor(props) {
//     super(props)
//     this.state = {
//       coords: {},
//     }
//   }

//   render() {
//     this.getLatLng()
//     return (
//       // <div style={{ height: '100%', width: '100%' }}>
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
//           defaultCenter={this.props.center}
//           center={this.state.coords}
//           defaultZoom={this.props.zoom}
//           onChildMouseEnter={this.onChildMouseEnter}
//           onChildMouseLeave={this.onChildMouseLeave}
//         >
//           <Marker lat={Object.values(this.state.coords)[0]} lng={Object.values(this.state.coords)[1]} />
//         </GoogleMapReact>
//         {/* {this.getLatLng()} */}
//       </div>
//     )
//   }
// }

// export default MapToo
