import { useEffect, useState } from 'react'

// // Style Imports
// import './businessDetails.css'

// Custom Imports
import ContentHeader from '../components/ContentHeader'

const BusinessDetails = () => {
  const [fetchedBusinessUsers, setFetchedBusinessUsers] = useState([])
  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch('/api/items', { method: 'GET' })
        const responseData = await response.json()
        console.log(responseData)

        if (!response.ok) {
          throw new Error(response.message)
        }
        // setFetchedBusinessUsers(responseData.businesses)
      } catch (error) {
        return error
      }
    }

    fetchBusinesses()
  }, [])

  return (
    <>
      <section className='content-wrapper bus-details'>
        <header className='bus-details--header'>
          <ContentHeader title='Business Details Page' />
        </header>
        <div className='card'>
          <div className='card-body'>
            <ul className='products-list product-list-in-card pl-2 pr-2'>
              <li className='item'>
                <figure className='product-img m-1'>
                  <img
                    src='https://via.placeholder.com/100'
                    alt='Placeholder Business Profile'
                    className='image-fluid'
                  />
                  <p className='bus-details--rating'>
                    <img src='star.svg' alt='Star Icon' />
                    <img src='star.svg' alt='Star Icon' />
                    <img src='star.svg' alt='Star Icon' />
                    <img src='star.svg' alt='Star Icon' />
                  </p>
                  <button className='btn btn-default'>Review</button>
                </figure>
                <div className='product-info'>
                  <h1 className='product title'>Business Name</h1>
                  <span className='float-right'>
                    12 Main Street Toronto, ON L3K 5H7
                  </span>
                  <span className='product-description'>
                    The business description goes here.
                  </span>
                </div>
              </li>
            </ul>
            <div className='text-center'>
              <button className='btn btn-default'>Book Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BusinessDetails
