import React, { useState, useEffect } from 'react'
import BusinessesFiltered from './BusinessesFiltered'
import { useParams } from 'react-router'

const SearchResults = (props) => {
  const citySearch = useParams().city
  console.log('in businesses props', citySearch)

  const [allData, setAllData] = useState()

  useEffect(() => {
    console.log('in fetchBus', citySearch)
    const fetchBusinesses = async () => {
      try {
        console.log('in try, citySearch', citySearch)

        const response = await fetch(`/api/businesses`, {
          // const response = await fetch(`/api/businesses/city/${citySearch}`, {
          method: 'GET',
        })
        console.log('search results data', response)
        const responseData = await response.json()
        console.log('search results responseData', responseData)

        if (!response.ok) {
          throw new Error(response.message)
        }
        // setAllData(responseData.businesses)
        console.log('in fetch line 65', responseData.businesses)

        console.log('before function call', responseData)
        const cityArr = []
        responseData.businesses.filter((business) => {
          if (business.city === citySearch) {
            cityArr.push(business)
          }
          // setAllData(cityArr)
          console.log(cityArr)
          setAllData(cityArr)
        })
      } catch (error) {
        return error
      }
    }
    fetchBusinesses()
  }, [])

  // const busFilter = allData.map((business) => {
  //   return (
  //     <BusinessesFiltered
  //       name={business.businessName}
  //       description={business.description}
  //       address={business.address1}
  //       state={business.state}
  //       zipcode={business.zipcode}
  //       city={business.city}
  //       key={business._id}
  //       business={business}
  //     />
  //   )
  // })

  return (
    <React.Fragment>
      howdy
      {/* {allData} */}
      {/* {busFilter} */}
    </React.Fragment>
  )
}

export default SearchResults
