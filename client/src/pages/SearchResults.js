import { useState, useEffect } from 'react'
import BusinessCard from '../components/BusinessCard'
import Filters from '../components/Filters'

import { useParams } from 'react-router'

const SearchResults = () => {
  const citySearch = useParams().city
  const cityCapitalize = citySearch.charAt(0).toUpperCase() + citySearch.slice(1).toLowerCase()

  const busFilter = []
  const [filterResults, setFilterResults] = useState([])
  console.log(filterResults)
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
        setFilterResults(busFilter)
      } catch (error) {
        return error
      }
    }
    fetchBusinesses()
  }, [])

  //* Filter Business Features and Services
  const [filteredFeats, setFilteredFeats] = useState([])
  const [filteredServices, setFilteredServices] = useState([])

  // Listen for the features' and services' checkbox changes and capture that data from the `Filters` child component
  const onFeatChange = data => {
    setFilteredFeats(data)
  }

  const onServiceChange = data => {
    setFilteredServices(data)
  }

  let tempFilterResults = []
  let tempBizFeatsServices = []
  let tempFilteredFeatsServices = []
  const handleFilterResults = () => {
    // console.log('hi')
    filterResults.map(business => {
      tempBizFeatsServices.push(business.features)
      tempBizFeatsServices.push(business.services)
      tempFilteredFeatsServices.push(filteredFeats)
      tempFilteredFeatsServices.push(filteredServices)
      // console.log('business', tempBizFeatsServices)
      // console.log('filter', tempFilteredFeatsServices)
      tempBizFeatsServices.flat().map(bizArrEl => {
        tempFilteredFeatsServices.find(filteredEl => {
          // console.log(filteredEl)
          // console.log(bizFeature)
          Object.keys(filteredEl).find(key => {
            console.log('key', key)
            // console.log('bizArrEl', bizArrEl)
            // console.log('filteredEl', filteredEl)
            // console.log('match', business)
            console.log('tempFilterResults', tempFilterResults)
            if (key.includes(bizArrEl)) {
              console.log('match', business)
              tempFilterResults.push(business)
              let uniqueTempFilterResults = [...new Set(tempFilterResults)]
              setFilterResults(uniqueTempFilterResults)
            } else {
              return null
            }
          })

          // business.services.map(bizService => {
          //   Object.keys(filteredServices).find(filteredService => {
          //     console.log(filteredService)
          //     console.log(bizService)
          //     if (filteredService.includes(bizService)) {
          //       console.log('filteredService', filteredService)
          //       console.log('bizService', bizService)
          //       console.log(business)
          //       tempFilterResults.push(business)
          //       setFilterResults({ tempFilterResults, tempFilterResults })
          //       console.log(tempFilterResults)
          //     } else {
          //       return null
          //     }
          //   })
        })
      })
    })
  }

  const handleResetFilter = () => {
    window.location.reload(true)
    // setFilterResults(busFilter) // FIXME: resets to an empty array
  }

  return (
    <>
      <div className='business-wrapper'>
        <h5>Business located in {cityCapitalize}</h5>
        <div className='business-container'>
          <div className='business-features-placeholder'>
            <Filters filterResults={filterResults} onFeatChange={onFeatChange} onServiceChange={onServiceChange} handleFilterResults={handleFilterResults} handleResetFilter={handleResetFilter} />
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
