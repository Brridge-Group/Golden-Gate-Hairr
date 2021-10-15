import React, { useState, useEffect } from 'react'
import BusinessesFiltered from './BusinessesFiltered'
import { useParams } from 'react-router'

const SearchResults = () => {
  const citySearch = useParams().city
  console.log('in businesses props', citySearch)

  let result = []
  let busFilter = []
  const [allData, setAllData] = useState([])
  const [filterResults, setfilterResults] = useState([])
  // const [products, setProducts] = useState([])

  useEffect(() => {
    console.log('in fetchBus')
    const fetchBusinesses = async () => {
      try {
        const response = await fetch('/api/businesses', { method: 'GET' })
        // const response = await fetch(`/api/businesses/city/${citySearch}`, {
        //   method: 'GET',
        // })
        const responseData = await response.json()
        if (!response.ok) {
          throw new Error(response.message)
        }
        responseData.businesses.filter((business) => {
          if (business.city === citySearch) {
            console.log('yes')
            busFilter.push(business)
          }
        })
        setfilterResults(busFilter)
      } catch (error) {
        return error
      }
    }
    fetchBusinesses()
    console.log('line 38', allData)
  }, [])
  console.log(allData, 'fifi', filterResults)

  return (
    <React.Fragment>
      {filterResults.map((business) => {
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
      })}
    </React.Fragment>
  )
}

export default SearchResults
