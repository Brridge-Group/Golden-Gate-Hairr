import React, { useEffect, useState } from 'react'
import ContentHeader from '../components/ContentHeader'

const BusinessDetails = (props) => {
  const [indieBus, setIndieBus] = useState('')
  useEffect(() => {
    setIndieBus(props.history.location.business)
  }, [props.history.location.business])

  return (
    <React.Fragment>
      <ContentHeader title='Business Details ' />
      <div className='card w-50 mx-auto'>
        <div className='card-body'>
          <ul className='products-list product-list-in-card'>
            <li className='item'>
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
                  <h1 className='product title'>{indieBus.businessName}</h1>
                  <div>
                    {indieBus.address1} {indieBus.city}, {indieBus.state}{' '}
                    {indieBus.zipCode}
                    <br /> phone: {indieBus.phone} <br />
                    email: {indieBus.email}
                  </div>
                  <div className='product-description'>
                    {indieBus.description}
                  </div>
                  <button
                    className='btn btn-default'
                    style={{ marginTop: '10px' }}>
                    Book Now
                  </button>
                </div>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BusinessDetails
