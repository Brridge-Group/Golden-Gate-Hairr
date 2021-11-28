import React, {  useState } from 'react'
import { withContext } from '../contexts/AppContext'
import ContentHeader from '../components/ContentHeader'
import '../stylesheets/Businesses.css'
import star from '../images/star.svg'
import { useLocation } from 'react-router-dom'


const BusinessDetails = props => {
  const { state } = useLocation()
  const business = state.business
  const [phone, setPhone] = useState(false)

  const handleClick = () => {
    setPhone(true)
  }

  return (
    <React.Fragment>
      <ContentHeader title='Business Details ' />
      <div className='card w-50 mx-auto'>
        <div className='card-body'>
          <ul className='products-list product-list-in-card'>
            <li className='item'>
              <figure className='indie-card'>
                <div className='pic-star-container'>
                  <img
                    src='https://via.placeholder.com/100'
                    alt='Placeholder Business Profile'
                    className='image-fluid'
                  />
                  <p className='bus-details--rating '>
                    <img
                      src={star}
                      alt='Star Icon'
                      style={{ width: '10%' }}
                    />
                    <img
                      src={star}
                      alt='Star Icon'
                      style={{ width: '10%' }}
                    />
                    <img
                      src={star}
                      alt='Star Icon'
                      style={{ width: '10%' }}
                    />
                    <img
                      src={star}
                      alt='Star Icon'
                      style={{ width: '10%' }}
                    />
                  </p>
                  {props.token ? (
                    <button className='btn btn-default'>Review</button>
                  ) : (
                    ''
                  )}
                </div>
                <div>
                  <h1 className='product title'>{business.businessName}</h1>
                  <div>
                    {business.address1} {business.city}, {business.state}{' '}
                    {business.zipCode}
                    <br />
                    email: {business.email}
                    <div className={phone ? 'visable-phone' : 'hidden-phone'}>
                      phone: {business.phone}
                    </div>
                  </div>
                  <div className='product-description'>
                    {business.description}
                  </div>
                  <button
                    onClick={handleClick}
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

export default withContext(BusinessDetails)
