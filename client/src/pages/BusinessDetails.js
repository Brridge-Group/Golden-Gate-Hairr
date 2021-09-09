import { useEffect, useState } from 'react'

// Custom Imports
import ContentHeader from '../components/ContentHeader'

const BusinessDetails = () => {
  const [fetchedBusinessUsers, setFetchedBusinessUsers] = useState([])
  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch('/api/businesses', { method: 'GET' })
        const responseData = await response.json()
        console.log('fetchBusinesses() resp data', responseData)

        if (!response.ok) {
          throw new Error(response.message)
        }
        setFetchedBusinessUsers(responseData.businesses)
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
                      className='pr-1 pl-1 col-3 col-md-3 col-xl-2'
                    />
                    <img
                      src='star.svg'
                      alt='Star Icon'
                      className='pr-1 pl-1 col-3 col-md-3 col-xl-2'
                    />
                    <img
                      src='star.svg'
                      alt='Star Icon'
                      className='pr-1 pl-1 col-3 col-md-3 col-xl-2'
                    />
                    <img
                      src='star.svg'
                      alt='Star Icon'
                      className='pr-1 pl-1 col-3 col-md-3 col-xl-2'
                    />
                  </p>
                  <button className='btn btn-default'>Review</button>
                </figure>
                <div className='product-info col-7 ml-4 col-md-9'>
                  {fetchedBusinessUsers.map(business => {
                    return (
                      <>
                        <h1 className='product title'>{business.name}</h1>
                        <span className='float-right col-md-auto me-md-auto'>
                          {business.address1}, {business.address2}
                          {business.city}, {business.state} {business.zipCode}
                        </span>
                        <span className='product-description col-md-auto me-md-auto'>
                          {business.description}
                        </span>
                      </>
                    )
                  })}
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
