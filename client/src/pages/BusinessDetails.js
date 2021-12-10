import { useState } from 'react'
import { withContext } from '../contexts/AppContext'
import '../stylesheets/Businesses.css'
import star from '../images/star.svg'
import { Redirect } from 'react-router'
import { useLocation, useHistory } from 'react-router-dom'

const BusinessDetails = props => {
  console.log('busdetails, props', props)
  const history = useHistory()
  const { state } = useLocation()
  console.log(
    'busdetails, history, location',
    // history,
    // history.location.state,
    history.location.state.business,
    history.location.state.business.city

    // history.goBack
  )

  const business = state.business
  const [phone, setPhone] = useState(false)
  const [hidden, setHidden] = useState(false)

  const deleteNameSpace = business.businessName.replace(/\s+/g, '')

  const handleClick = () => {
    setPhone(true)
    setHidden(true)
  }

  const reviewRoute = () => {
    history.push(`/${deleteNameSpace.toLowerCase()}/review`, {
      business: business,
    })
  }

  return (
    <>
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
                    <img src={star} alt='Star Icon' style={{ width: '10%' }} />
                    <img src={star} alt='Star Icon' style={{ width: '10%' }} />
                    <img src={star} alt='Star Icon' style={{ width: '10%' }} />
                    <img src={star} alt='Star Icon' style={{ width: '10%' }} />
                  </p>
                  {props.token ? (
                    <button className='btn btn-default' onClick={reviewRoute}>
                      Review
                    </button>
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
                  </div>
                  <div className='product-description'>
                    {business.description}
                  </div>
                  <div
                    className={phone ? 'phone visable-phone' : 'hidden-phone'}
                  >
                    phone: {business.phone}
                  </div>
                  {!hidden && (
                    <button className='btn btn-default' onClick={handleClick}>
                      {' '}
                      Book Now
                    </button>
                  )}
                </div>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default withContext(BusinessDetails)
