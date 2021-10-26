import React, { useState } from 'react'
import ContentHeader from '../components/ContentHeader'
import { useHistory } from 'react-router-dom'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const history = useHistory()

  const handleSearch = (e) => {
    let value = e.target.value
    const inputCase =
      value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    setSearchTerm(inputCase)
  }

  const buttonOnClick = () => {
    console.log('button', searchTerm)
    history.push(`/search/${searchTerm}`)
  }

  return (
    <React.Fragment>
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
              onChange={(e) => handleSearch(e)}
              placeholder='city'
              style={{ marginLeft: 10, marginRight: 10 }}
            />

            <button
              style={{ border: 'none', background: 'none' }}
              onClick={buttonOnClick}>
              <i className='fas fa-search'></i>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Search
