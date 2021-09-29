import React, { useEffect, useState } from 'react'

// Custom Imports
import ContentHeader from '../../components/ContentHeader'

const B = (props) => {
  console.log(props)
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
          <ContentHeader title='Filter Business Page' />
          <div className='card w-50 mx-auto'>
            <div className='card-body'>
              <ul className='products-list product-list-in-card'>
                {fetchedBusinessUsers.map((business) => {
                  console.log(business._id)
                  return (
                    <>
                      <li className='item' key={business._id}>
                        <figure
                          className='indie-card'
                          style={{
                            display: 'flex',
                          }}>
                          <div
                            className='pic-star-container'
                            style={{
                              marginRight: '20px',
                              display: 'flex',
                              flexDirection: 'column',
                            }}>
                            <img
                              src='https://via.placeholder.com/100'
                              alt='Placeholder Business Profile'
                              className='image-fluid'
                            />
                            <p
                              className='bus-details--rating '
                              style={{
                                display: 'flex',
                                marginTop: '5px',
                                justifyContent: 'space-around',
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
                          </div>
                          <div>
                            <h1 className='product title'>
                              {business.businessName}
                            </h1>
                            <div>
                              {business.address1}, {business.address2}
                              {business.city}, {business.state}{' '}
                              {business.zipCode}
                            </div>
                            <div className='product-description c'>
                              {business.description}
                            </div>
                          </div>
                        </figure>
                      </li>
                    </>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>
      </React.Fragment>
    </>
  )
}

export default B
