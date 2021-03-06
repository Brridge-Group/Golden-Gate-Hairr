import { useState, useEffect } from 'react'
import BusinessCard from '../components/BusinessCard'
import Filters from '../components/Filters'

import { useParams } from 'react-router'

const SearchResults = () => {
  const citySearch = useParams().city
  const cityCapitalize =
    citySearch.charAt(0).toUpperCase() + citySearch.slice(1).toLowerCase()

  const busFilter = []
  const [filterResults, setfilterResults] = useState([])

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch('/api/businesses', { method: 'GET' })

        const responseData = await response.json()
        if (!response.ok) {
          throw new Error(response.message)
        }
        responseData.businesses.filter(business => {
          if (business.city.toLowerCase() === citySearch) {
            busFilter.push(business)
          }
        })
        setfilterResults(busFilter)
      } catch (error) {
        return error
      }
    }
    fetchBusinesses()
  }, [])

  return (
    <>
      <div className='business-wrapper'>
        <h5>Hairstylists located in {cityCapitalize}</h5>
        <div className='business-container'>
          <div className='business-features-placeholder'>
            <Filters filterResults={filterResults} />
          </div>
          <div className='filtered-businesses'>
            {filterResults.map(business => {
              return (
                <BusinessCard
                  name={business.businessName}
                  description={business.description}
                  address={business.address1}
                  state={business.state}
                  zipcode={business.zipcode}
                  city={business.city}
                  key={business._id}
                  id={business._id}
                  business={business}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchResults
