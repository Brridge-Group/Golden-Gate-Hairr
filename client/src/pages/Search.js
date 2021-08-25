import React, { useState, useEffect } from 'react'
import Business from './Business'
import ContentHeader from '../components/ContentHeader'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    let mounted = true
    getResults().then((resp) => {
      if (mounted) {
        setSearchResults(resp)
      }
    })
    return () => (mounted = false)
  }, [searchResults])
  // }, [])

  const getResults = () => {
    console.log(searchTerm)
    // don't know the real name for cities (routes) just made it up
    return fetch('api/cities/searchTerm').then((resp) => resp.json())
  }
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }
  //real business page not set up yet - placeholder file in pages folder
  const results = searchResults.map((result) => {
    return <Business name={result.name} />
  })

  return (
    <React.Fragment>
      <div className='content-wrapper'>
        <ContentHeader title='Search' />
        <div className='card w-50 mx-auto'>
          <div className='card-header'>
            <h5 className='m-0' style={{ color: 'white ' }}>
              Search
            </h5>
          </div>
          <div className='card-body' style={{ height: 200 }}>
            <div
              style={{ marginTop: 50, textAlign: 'center' }}
              className='form-group'>
              <label htmlFor='search'>
                <h6 className='m-0'>I'm looking for a hair stylist in </h6>
              </label>
              <input
                type='text'
                value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
                onChange={handleChange}
                placeholder='city'
                style={{ marginLeft: 10, marginRight: 10 }}
              />
              <button
                style={{ border: 'none', background: 'none' }}
                disabled={searchTerm === null}
                onClick={() => getResults(searchTerm)}>
                <i className='fas fa-search'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {results}
    </React.Fragment>
  )
}

export default Search
