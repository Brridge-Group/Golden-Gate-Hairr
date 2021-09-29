import React, { useState, useEffect } from 'react'

import ContentHeader from '../components/ContentHeader'
import Search from './Search'
import BusinessesFiltered from './BusinessesFiltered'

const SearchResults = (props) => {
  console.log('in businesses props', props)

  const [allData, setAllData] = useState([])
  const [filteredData, setFilteredData] = useState(allData)

  // const { push } = useHistory()

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

  // const handleSearch = (e) => {
  //   let value = e.target.value
  //   setSearchTerm(value)
  // }
  // const handleSearch = (e) => {
  //   let value = e.target.value
  //   const inputCase =
  //     value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
  //   let result = []
  //   return Object.values(allData).map((data) => {
  //     result = data.filter((d) => {
  //       return d.city.search(inputCase) !== -1
  //     })
  //     console.log('handle search', data, 'result', result)
  //     setFilteredData(result)
  //   })
  // }
  const onButtonClick = () => {}
  // const onButtonClick = () => {
  //   console.log('in onButtonclick, filteredData', filteredData)
  // setRedirect(true)
  // if (redirect)
  //   return (
  //     <Redirect
  //       to={{ pathname: '/business-details', filteredData: { filteredData } }}
  //     />
  //   )
  // push({
  //   pathname: '/business-details',
  // })
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
  // }
  return (
    <React.Fragment>
      <div className='content-wrapper'>
        {/* <Search handleSearch={handleSearch} searchTerm={searchTerm} /> */}
      </div>
      <BusinessesFiltered />
    </React.Fragment>
  )
}

export default SearchResults
