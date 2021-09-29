import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import ContentHeader from '../components/ContentHeader'
import Businesses from './Businesses'
import { useHistory } from 'react-router-dom'

const Search = () => {
  const [allData, setAllData] = useState([])
  const [filteredData, setFilteredData] = useState(allData)
  const [redirect, setRedirect] = useState(false)

  const { push } = useHistory()

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
    let value = e.target.value
    const inputCase =
      value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    let result = []
    return Object.values(allData).map((data) => {
      result = data.filter((d) => {
        return d.city.search(inputCase) !== -1
      })
      // console.log('handle search', data, 'result', result)
      setFilteredData(result)
    })
  }

  const onButtonClick = () => {
    console.log('in onButtonclick, filteredData', filteredData)
    // setRedirect(true)
    // if (redirect)
    //   return (
    //     <Redirect
    //       to={{ pathname: '/business-details', filteredData: { filteredData } }}
    //     />
    //   )
    push({
      pathname: '/business-details',
    })
    // filteredData: { filteredData },
    // return filteredData.map((bus) => {
    //   console.log(bus)
    // return (
    //   <Businesses
    //     status={bus.status}
    //     key={bus._id}
    //     userId={bus.userId}
    //     name={bus.businessName}
    //     description={bus.description}
    //   />
    // )
    // })

    //somehow pass filteredata to businesses */
    // return <Businesses data={filteredData} />
  }

  console.log('line 54, before return', filteredData)
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
                onChange={(e) => handleSearch(e)}
                placeholder='city'
                style={{ marginLeft: 10, marginRight: 10 }}
              />

              <button
                style={{ border: 'none', background: 'none' }}
                onClick={onButtonClick}>
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
