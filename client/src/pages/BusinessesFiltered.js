import React, { useState } from 'react'
import ContentHeader from '../components/ContentHeader'
import { Redirect } from 'react-router'
import '../stylesheets/Businesses.css'

const BusinessesFiltered = (props) => {
  const [redirect, setRedirect] = useState(false)

  const star =
    'https://raw.githubusercontent.com/Brridge-Group/Golden-Gate-Hairr/6e0316ba1b16f06902c1558650c0c04f3ba5c42b/client/public/star.svg'

  const doSetRedirect = () => {
    setRedirect(true)
  }
  const renderRedirect = () => {
    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: '/business-details',
            business: props.business,
          }}
        />
      )
    }
  }

  return (
    <React.Fragment>
      <div className='card-body filtered'>
        {renderRedirect()}
        <div onClick={doSetRedirect} style={{ cursor: 'pointer' }}>
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
                </div>
                <div className='product-container' style={{ width: '72%' }}>
                  <h1 className='product title'>{props.name}</h1>
                  <div>
                    {props.address} {props.city}, {props.state} {props.zipCode}
                  </div>
                  <div className='product-description '>
                    {props.description}
                  </div>
                </div>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BusinessesFiltered
