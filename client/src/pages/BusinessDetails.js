import React, { useEffect, useState } from 'react'

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
      <React.Fragment>
        <section className='content-wrapper'>
          <ContentHeader title='Business Details Page' />
          <div className='card w-50 mx-auto'>
            <div className='card-body'>
              <ul className='products-list product-list-in-card'>
                <li className='item'>
                  {fetchedBusinessUsers.map((business) => {
                    return (
                      <>
                        <figure className=''>
                          <img
                            src='https://via.placeholder.com/100'
                            alt='Placeholder Business Profile'
                            className='image-fluid'
                          />
                          <p
                            className='bus-details--rating '
                            style={{
                              display: 'flex',
                              justifyContent: 'space-evenly',
                              marginTop: '5px',
                              maxWidth: '22%',
                            }}>
                            <img
                              src='star.svg'
                              alt='Star Icon'
                              style={{ width: '10%' }}
                            />
                            <img
                              src='star.svg'
                              alt='Star Icon'
                              style={{ width: '10%' }}
                            />
                            <img
                              src='star.svg'
                              alt='Star Icon'
                              style={{ width: '10%' }}
                            />
                            <img
                              src='star.svg'
                              alt='Star Icon'
                              style={{ width: '10%' }}
                            />
                          </p>
                          <button className='btn btn-default'>Review</button>
                        </figure>

                        <h1 className='product title'>
                          {business.businessName}
                        </h1>
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
                </li>
              </ul>
            </div>
          </div>
        </section>
      </React.Fragment>
    </>
  )
}

export default BusinessDetails
