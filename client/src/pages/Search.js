import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import ContentHeader from '../components/ContentHeader'
import Businesses from './Businesses'
import { useHistory } from 'react-router-dom'

const Search = () => {
  const [allData, setAllData] = useState([])
  const [filteredData, setFilteredData] = useState(allData)
  const history = useHistory()

  useEffect(() => {
    console.log('in fetchBus')
    const fetchBusinesses = async () => {
      try {
        const response = await fetch('/api/businesses', { method: 'GET' })
        const responseData = await response.json()

        if (!response.ok) {
          throw new Error(response.message)
        }

        setAllData(responseData)
        setFilteredData(responseData)
        console.log('in fetch line 65', responseData.businesses)
      } catch (error) {
        return error
      }
    }
    fetchBusinesses()
  }, [])

  const handleSearch = (e) => {
    console.log('in handleSearch')
    let value = e.target.value
    const inputCase =
      value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    let result = []
    return Object.values(allData).map((data) => {
      result = data.filter((d) => {
        return d.city.search(inputCase) != -1
      })
      console.log('data 41', data, 'result', result)
      setFilteredData(result)
    })
  }
  const onButtonClick = () => {
    console.log('in onButtonclick')
    history.push('/business-details')
    setFilteredData(filteredData)
  }

  console.log('line 48', filteredData)
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
              // onSubmit={handleSubmit}
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
                onClick={onButtonClick}>
                {/* // type='submit'> */}
                <i className='fas fa-search'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Search
