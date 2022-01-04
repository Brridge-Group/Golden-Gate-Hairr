import React, { useState } from 'react'
import Geocoder from 'react-geocoder-autocomplete'
import './styles.scss'

export default function App() {
  const [response, setResponse] = useState()
  const [error, setError] = useState()

  const getResponse = value => {
    console.log(value)
    setResponse(value)
  }

  return (
    <div className='App'>
      <h2>
        <a href='https://github.com/kmwhelan93/react-geocoder-autocomplete' target='_blank'>
          React Geocoder Autocomplete
        </a>
      </h2>

      <div className='Geocoder'>
        <Geocoder
          accessToken='pk.eyJ1Ijoic2x1dHNrZTIyIiwiYSI6ImNqeGw1Ym80dDAybHczdG8xaTB3aW4xMGsifQ.jCW4Xo_5khsO7VFWQz4YoQ'
          onSelect={value => getResponse(value)}
          // onSuggest=optional function
          // source=optional string, default 'mapbox.places'
          // endpoint=optional string, default 'http://api.tiles.mapbox.com'
          inputClass='geosearch'
          inputPlaceholder='Search for a place'
          resultClass='potential-result'
          resultsClass='potential-results'
          // showLoader=optional string, default ''
          // inputPosition=optional string, default 'top', can be 'bottom'
          // resultFocusClass=optional string, default 'strong'
          // proximity=optional string, default '',
          // bbox=optional string, default '',
          // types=optional string, default '',
          // focusOnMount=optional bool, default true
        />
      </div>

      {response && (
        <>
          <h3>
            <pre>{JSON.stringify(response.place_name)}</pre>
          </h3>
          <p>
            Coordinates: <pre>{JSON.stringify(response.center)}</pre>
          </p>
        </>
      )}
    </div>
  )
}
