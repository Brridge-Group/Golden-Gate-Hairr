// import React, { useState, useEffect } from 'react'
// import Businesses from './Businesses'

// const SearchResults = (props) => {
//   const [searchResults, setSearchResults] = useState([])
//   const [filterResults, setfilterResults] = useState([])
//   console.log('searchResults, search', props, props.seart)

//   useEffect(() => {
//     const fetchBusinesses = async () => {
//       try {
//         const response = await fetch('/api/businesses', { method: 'GET' })
//         const responseData = await response.json()
//         console.log('fetchBusinesses() resp data', responseData)

//         if (!response.ok) {
//           throw new Error(response.message)
//         }
//         setSearchResults(responseData.businesses)
//       } catch (error) {
//         return error
//       }
//     }
//     fetchBusinesses()
//   }, [])

//   // const targetBusiness = () => {
//   //   const busArr = []
//   //   return searchResults.filter((business) => {
//   //     if (business.city === searchTerm) {
//   //       busArr.push(business)
//   //     }
//   //     // if (!busArr.length) {
//   //     //   alert('no cities found')
//   //     // }
//   //     return setfilterResults(busArr)
//   //   })
//   // }
//   const filteredBusinesses = filterResults.map((business) => {
//     return <Businesses name={business.businessName} />
//   })
//   return <div></div>
// }

// export default SearchResults

// // {filteredBusinesses}
// // {filteredBusinesses.length > 0 && (
// //   <Redirect to={{ pathname: '/business-details' }} />
