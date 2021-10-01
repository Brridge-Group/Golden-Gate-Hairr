import React from 'react'
import ContentHeader from '../components/ContentHeader'
import BusinessDetails from './BusinessDetails'

const BusinessesFiltered = (props) => {
  console.log('in bus filter', props, props.business)
  props.business.map((bus) => {
    console.log('in indieBus', bus.businessName)
    return <BusinessDetails name={bus.businessName} />
  })
  const sayHi = () => {
    console.log('hi')
  }

  return (
    <React.Fragment>
      {/* {indieBusiness} */}
      <ContentHeader title='Filter Business Page' />
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
                  <button onClick={sayHi}>Review</button>
                </div>
                <div>
                  <h1 className='product title'>{props.name}</h1>
                  <div>
                    {props.address} {props.city}, {props.state} {props.zipCode}
                  </div>
                  <div className='product-description c'>
                    {props.description}
                  </div>
                </div>
              </figure>
            </li>
          </ul>
        </div>
      </div>
      <BusinessDetails business={props.business} />
    </React.Fragment>
  )
}

export default BusinessesFiltered
