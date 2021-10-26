import React, { useState } from 'react'
import ContentHeader from '../components/ContentHeader'
import { useHistory } from 'react-router-dom'
import { Redirect } from 'react-router'

const BusinessesFiltered = (props) => {
  console.log('in bus filtered', props, props.business)
  const [redirect, setRedirect] = useState(false)

  const history = useHistory()

  const star =
    'https://raw.githubusercontent.com/Brridge-Group/Golden-Gate-Hairr/6e0316ba1b16f06902c1558650c0c04f3ba5c42b/client/public/star.svg'

  const doSetRedirect = () => {
    setRedirect(true)
  }
  const renderRedirect = () => {
    console.log('in render redirect, props.business', props.business)
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
      <ContentHeader title='Filter Business Page' style={{ color: 'none' }} />
      <div className='card w-50 mx-auto'>
        <div className='card-body'>
          <ul className='products-list product-list-in-card'>
            <li className='item'>
              <figure
                className='indie-card'
                style={{
                  display: 'flex',
                  overflow: 'hidden',
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
                    <img src={star} alt='Star Icon' style={{ width: '10%' }} />
                    <img src={star} alt='Star Icon' style={{ width: '10%' }} />
                    <img src={star} alt='Star Icon' style={{ width: '10%' }} />
                    <img src={star} alt='Star Icon' style={{ width: '10%' }} />
                  </p>
                  {renderRedirect()}
                  <button className='btn btn-default' onClick={doSetRedirect}>
                    Review
                  </button>
                </div>
                <div className='product-container' style={{ width: '72%' }}>
                  <h1 className='product title'>{props.name}</h1>
                  <div>
                    {props.address} {props.city}, {props.state} {props.zipCode}
                  </div>
                  <div
                    className='product-description c'
                    style={{ whiteSpace: 'wrap' }}>
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
