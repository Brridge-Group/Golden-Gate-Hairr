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
            <ul className='products-list product-list-in-card'>
              <li className='item d-flex'>
                <figure className='col-4 col-md-2'>
                  <img
                    src='https://via.placeholder.com/100'
                    alt='Placeholder Business Profile'
                    className='image-fluid'
                  />
                  <p className='bus-details--rating '>
                    <img
                      src='star.svg'
                      alt='Star Icon'
                      className='pr-1 pl-1 col-3 col-md-3'
                    />
                    <img
                      src='star.svg'
                      alt='Star Icon'
                      className='pr-1 pl-1 col-3 col-md-3'
                    />
                    <img
                      src='star.svg'
                      alt='Star Icon'
                      className='pr-1 pl-1 col-3 col-md-3'
                    />
                    <img
                      src='star.svg'
                      alt='Star Icon'
                      className='pr-1 pl-1 col-3 col-md-3'
                    />
                  </p>
                  <button className='btn btn-default'>Review</button>
                </figure>
                <div className='product-info col-7 ml-4'>
                  <h1 className='product title'>Business Name</h1>
                  <span className='float-right col-md-auto me-md-auto'>
                    12 Main Street Toronto, ON L3K 5H7
                  </span>
                  <span className='product-description col-md-auto me-md-auto'>
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
