import React, { useState, useEffect } from 'react'
import BusinessesFiltered from './BusinessesFiltered'
import Filters from '../components/Filters'

import { useParams } from 'react-router'

const SearchResults = () => {
  const citySearch = useParams().city

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
        responseData.businesses.filter((business) => {
          if (business.city === citySearch) {
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
    <React.Fragment>
      <div className='business-wrapper'>
        <h5>Hairstylists located in {citySearch}</h5>
        <div className='business-container'>
          <div className='business-features-placeholder'>
            <Filters />
          </div>
          <div className='filtered-businesses'>
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
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SearchResults
