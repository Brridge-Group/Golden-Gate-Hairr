import { useEffect, useState } from 'react'
import { withContext } from '../contexts/AppContext'
import ContentHeader from '../components/ContentHeader'
import '../stylesheets/Businesses.css'

const BusinessDetails = props => {
  const [business, setBusiness] = useState('')
  const [phone, setPhone] = useState(false)

  useEffect(() => {
    setBusiness(props.history.location.business)
  }, [props.history.location.business])

  const handleClick = () => {
    setPhone(true)
  }

  return (
    <>
      {/*(Backlog) TODO: [ ] - ? Remove all ContentHeaders or modify and utilize across app  */}
      {/* <ContentHeader title='Business Details ' /> */}
      <section className='content'>
        <div className='card mx-auto'>
          <div className='card-body'>
            <div className='products-list product-list-in-card d-flex justify-content-around align-content-center'>
              <div className='md-10'>
                <figure className='bus-details--image'>
                  <div className='image--container'>
                    <img
                      src='https://via.placeholder.com/100'
                      alt='Placeholder Business Profile Image'
                      className='image-fluid'
                    />
                    <p className='bus-details--rating'>
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
                  </div>
                </figure>
                <div className='mx-auto d-flex flex-column'>
                  {props.token ? (
                    <button className='btn btn-default'>Review</button>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <div className='bus-details d-flex flex-column'>
                <div className='d-flex justify-content-between'>
                  <div className='bus-details--header'>
                    <h1 className='card-header border-bottom-0'>
                      {business.businessName}
                    </h1>
                    <div className='product-description'>
                      {business.description}
                    </div>

                    <br />
                  </div>
                  <div className='bus-details--info mt-3'>
                    <div className='bus-details--address small'>
                      <b>Address:</b>
                      <br />
                      {business.address1} {business.city}, {business.state}{' '}
                      {business.zipCode}
                    </div>
                    <div className='bus-details--email small'>
                      <b>Email:</b>
                      <br />
                      {business.email}
                    </div>
                  </div>
                </div>
                <div className='d-flex flex-column'>
                  <div className={phone ? 'visable-phone' : 'hidden-phone'}>
                    phone: {business.phone}
                  </div>
                  <button
                    onClick={handleClick}
                    className='btn btn-default'
                    style={{ width: '75%', marginTop: '10px', margin: 'auto' }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className='card w-50 mx-auto'>
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
                    style={{ marginTop: '10px' }}
                  >
                    Book Now
                  </button>
                </div>
              </figure>
            </li>
          </ul>
        </div>
      </div> */}
    </>
  )
}

export default withContext(BusinessDetails)
