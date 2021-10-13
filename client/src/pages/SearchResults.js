import React, { useState, useEffect } from 'react'
import BusinessesFiltered from './BusinessesFiltered'
import { useParams } from 'react-router'

const SearchResults = (props) => {
  const city = useParams().city
  console.log('in businesses props', city)

  let result = []
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
    // console.log('in dont sendBusiness')
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
