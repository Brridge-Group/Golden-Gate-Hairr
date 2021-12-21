import React from 'react'
import GoogleMapReact from 'google-map-react'
import '../stylesheets/Map.css'
import { Map, GoogleApiWrapper } from 'google-maps-react'

const Map = () => {
  const defaultProps = {
    center: { lat: 40.73, lng: -73.93 },
    zoom: 11,
  }
  //the center coordinates are NYC. I chose 12 as the zoom because it didn’t seem too far away or too close. The higher the number you choose, the more you zoom in on the map.

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  }
  // const loader = new Loader({
  //   apiKey: '',
  //   id: '__googleMapsScriptId',
  // })

  console.log(process.env.API_KEY, env.API_KEY)
  return (
    <>
      <div>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.API_KEY,
          }}
          defaultCenter={defaultProps.center}
          center={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          className='google-map'
          style={{ position: 'absolute', width: '75%', height: '300px', left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto' }}
          // yesIWantToUseGoogleMapApiInternals
          // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        />
      </div>
    </>
  )
}

export default Map
