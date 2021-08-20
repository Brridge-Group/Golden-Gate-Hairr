import React, { useState } from 'react'
import SearchResults from './SearchResults'

import ContentHeader from '../components/ContentHeader'

const city = ['Toronto', 'Wichita']

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }
  const handleFilter = () => {
    city.filter((city) => city.includes(searchTerm))
    setSearchResults(searchResults)
  }
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
                onChange={handleChange}
                placeholder='city'
                style={{ marginLeft: 10, marginRight: 10 }}
              />
              <i onClick={handleFilter} class='fas fa-search'></i>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Search
