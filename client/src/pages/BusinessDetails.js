// React Components
import { useEffect, useState } from 'react'

// Custom Imports
import { withContext } from '../contexts/AppContext'
import LoadSpinner from '../components/LoadSpinner'
import '../stylesheets/Businesses.css'
import star from '../images/star.svg'
import { useLocation, useHistory } from 'react-router-dom'
import Map from '../components/Map'

const BusinessDetails = props => {
  const history = useHistory()
  //am using this to pull in content but
  const { state } = useLocation()
  const business = state.business
  //could also use const business = history.location.state.business

  const [phone, setPhone] = useState(false)
  const [hidden, setHidden] = useState(false)

  const deleteNameSpace = business.businessName.replace(/\s+/g, '')

  const handleClick = () => {
    setPhone(true)
    setHidden(true)
  }

  // Initialize state for features and services whole data obj from context
  const [features, setFeatures] = useState([])
  const [services, setServices] = useState([])

  useEffect(() => {
    setFeatures(props.feats)
    setServices(props.services)
    // console.log('features', features)
    // console.log('services', services)
  }, [props.features, props.services])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const fetchFeatsServices = async () => {
      await props.fetchFeatures()
      await props.fetchServices()
    }
    fetchFeatsServices()
    return function clean() {
      setIsLoading(false)
    }
  }, [])

  // Initialize state for features and services  array from context
  const [bizFeatsArr, setBizFeatsArr] = useState([])
  const [bizServiceArr, setBizServiceArr] = useState([])

  useEffect(() => {
    setIsLoading(true)
    const fetchDetails = async () => {
      setIsLoading(true)
      const dbFeats = await props.feats // Full features' data obj from context
      const dbServices = await props.services // Full services' data obj from context

      let businessCopy = await business
      // let businessCopy = await props.history.location.state.business

      let tempBizFeatsArr = [] //rename ? temp?
      let tempBizServiceArr = [] //rename ? temp?

      // Map through the business' features array and compare the id string while mapping through the features whole data obj and using the find method to search for a matching id. If one is found push the containing object to an array and return that array.
      businessCopy?.features.map(bizFeat => {
        // console.log('bizFeat', bizFeat)
        dbFeats?.features.find(feat => {
          if (feat.id === bizFeat) {
            tempBizFeatsArr.push(feat)
          }
        })
      })

      setBizFeatsArr(tempBizFeatsArr)
      // console.log('bizFeatsArr', bizFeatsArr)

      // Map through the business' services array and compare the id string while mapping through the services whole data obj and using the find method to search for a matching id. If a match is found push the containing object to an array and return that array.
      businessCopy?.services.map(bizService => {
        // console.log(bizService)
        dbServices?.services.find(service => {
          if (service.id === bizService) {
            tempBizServiceArr.push(service)
          }
        })
      })

      setBizServiceArr(tempBizServiceArr)
      // console.log('bizServiceArr', bizServiceArr)
    }
    fetchDetails()
    return function clean() {
      setIsLoading(false)
    }
  }, [business])

  const reviewRoute = () => {
    history.push(`/${deleteNameSpace.toLowerCase()}/review`, {
      business: business,
    })
  }

  return (
    <>
      {!props.loading ? (
        <>
          {/* (Backlog) TODO: [ ] - ? Remove all ContentHeaders or modify and utilize across app   */}
          <section className='business-wrapper'>
            <div className='business-container details'>
              <div className='business-features-placeholder'>
                <b style={{ textTransform: 'uppercase', lineHeight: '2' }}>Features</b>
                {bizFeatsArr.map(feat => (
                  <div className='bus-details--features' style={{ textTransform: 'capitalize' }} key={feat.id}>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                      <li style={{ lineHeight: '1.25' }}>
                        <b>{feat.name}</b>
                        <br />
                        <span className='small'>{feat.description}</span>
                      </li>
                    </ul>
                  </div>
                ))}
                <br />
                <b style={{ textTransform: 'uppercase', lineHeight: '2' }}>Services</b>
                {bizServiceArr.map(service => (
                  <div className='bus-details--service-name' style={{ textTransform: 'capitalize' }} key={service.id}>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                      <li style={{ lineHeight: '1.25' }}>
                        <b>{service.name}</b>
                        <br />
                        <span className='small' style={{ textTransform: '', lineHeight: '.75' }}>
                          {service.description}
                        </span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
              {/* <div className='card mx-auto'> */}
              <div className='card-body '>
                <div className='products-list product-list-in-card '>
                  <figure className='indie-card'>
                    <div className='pic-star-container'>
                      <img src='https://via.placeholder.com/100' alt='Placeholder Business Profile Image' className='image-fluid' />
                      <p className='bus-details--rating'>
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
                      <div className='map'>
                        <Map />
                      </div>
                    </div>
                    <div className='product-container' style={{ width: '72%' }}>
                      <h1 className='product title'>{business.businessName}</h1>
                      <div className='product-description'>{business.description}</div>
                      <br />
                      <div className='bus-details--address small'>
                        <b>Address:</b>
                        <br />
                        {business.address1} {business.city}, {business.state} {business.zipCode}
                      </div>
                      <div className='bus-details--email small'>
                        <b>Email:</b>
                        <br />
                        {business.email}
                      </div>
                      <div className={phone ? 'visable-phone' : 'hidden-phone'}>phone: {business.phone}</div>
                      {!hidden && (
                        <button className='btn btn-default' onClick={handleClick} style={{ width: '100px' }}>
                          {' '}
                          Book Now
                        </button>
                      )}
                    </div>
                  </figure>
                </div>
              </div>
              {/* </div> */}
            </div>
            <div className='large-map' style={{ marginTop: '30px' }}>
              <Map address={[business.address1, business.city, business.state, business.zipCode].toString()} />
            </div>
          </section>
        </>
      ) : (
        isLoading && <LoadSpinner />
      )}
    </>
  )
}

export default withContext(BusinessDetails)
