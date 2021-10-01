import React, { useState, useEffect } from 'react'

import ContentHeader from '../components/ContentHeader'
import BusinessesFiltered from './BusinessesFiltered'
import BusinessDetails from './BusinessDetails'

import { useHistory } from 'react-router-dom'

const SearchResults = (props) => {
  console.log('in businesses props', props)
  const history = useHistory()

  let result = []
  const [filteredData, setFilteredData] = useState([])
  const [allData, setAllData] = useState([])

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
        console.log('in fetch line 65', responseData.businesses)
      } catch (error) {
        return error
      }
    }
    fetchBusinesses()
  }, [])

  const sendBusiness = () => {
    console.log('in sendBusiness', allData)
    return Object.values(allData).map((data) => {
      return (result = data.filter((d) => {
        return d.city.search(props.term) !== -1
      }))
    })
  }

  const dontSendBusiness = () => {
    console.log('in dont sendBusiness')
  }
  props.isMounted ? sendBusiness() : dontSendBusiness()

  const busFilter = result.map((business) => {
    return (
      <BusinessesFiltered
        name={business.businessName}
        description={business.description}
        address={business.address1}
        state={business.state}
        zipcode={business.zipcode}
        city={business.city}
        key={business._id}
        business={business}
      />
    )
  })

  return <React.Fragment>{busFilter}</React.Fragment>
}

export default SearchResults
