import React, { useEffect } from 'react'
import ContentHeader from '../components/ContentHeader'
import { useHistory } from 'react-router-dom'

const BusinessDetails = (props) => {
  console.log('in deets', props)
  // console.log('in bus filter', props, props.name)

  const history = useHistory()
  // const data = history.location.state.data
  useEffect(() => {
    console.log('in use effect', props.history.location.business)
  }, [])

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
                {/* <div>
                  <h1 className='product title'>{props.name}</h1>
                  <div>
                    {props.address} {props.city}, {props.state} {props.zipCode}
                  </div>
                  <div className='product-description c'>
                    {props.description}
                  </div>
                </div> */}
                {/* <p>{JSON.stringify(data)}</p> */}
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BusinessDetails
