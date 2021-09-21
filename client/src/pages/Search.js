import React, { useState, useEffect } from 'react'
import ContentHeader from '../components/ContentHeader'
// import Businesses from './Businesses'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [filterResults, setfilterResults] = useState([])

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch('/api/businesses', { method: 'GET' })
        const responseData = await response.json()
        console.log('fetchBusinesses() resp data', responseData)

        if (!response.ok) {
          throw new Error(response.message)
        }
        setSearchResults(responseData.businesses)
      } catch (error) {
        return error
      }
    }
    fetchBusinesses()
  }, [])

  const targetBusiness = () => {
    const busArr = []
    return searchResults.filter((business) => {
      if (business.city === searchTerm) {
        busArr.push(business)
      } else {
        console.log('no')
      }
      return setfilterResults(busArr)
    })
  }

  const handleChange = (e) => {
    const input = e.target.value
    const inputCase =
      input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
    setSearchTerm(inputCase)
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
              <button
                style={{ border: 'none', background: 'none' }}
                onClick={() => targetBusiness(searchTerm)}>
                <i className='fas fa-search'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Businesses business={filterResults} /> */}
    </React.Fragment>
  )
}

export default Search
