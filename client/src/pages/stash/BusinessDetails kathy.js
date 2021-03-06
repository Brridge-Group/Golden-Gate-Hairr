// React Components
import { useEffect, useState } from 'react'

// Custom Imports
import { withContext } from '../contexts/AppContext'
import LoadSpinner from '../components/LoadSpinner'
import '../stylesheets/Businesses.css'
import star from '../images/star.svg'
import { useLocation, useHistory } from 'react-router-dom'

const BusinessDetails = props => {
  const history = useHistory()
  const { state } = useLocation()
  const business = state.business
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

      let businessCopy = await props.history.location.business
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

          <section>
            <div className='card mx-auto'>
              <div className='card-body'>
                <div className='products-list product-list-in-card d-flex justify-content-around align-content-center'>
                  <div className='m-3'>
                    <figure className='bus-details--image'>
                      <div className='image--container'>
                        <img src='https://via.placeholder.com/100' alt='Placeholder Business Profile Image' className='image-fluid' />
                        <p className='bus-details--rating'>
                          <img src={star} alt='Star Icon' style={{ width: '10%' }} />
                          <img src={star} alt='Star Icon' style={{ width: '10%' }} />
                          <img src={star} alt='Star Icon' style={{ width: '10%' }} />
                          <img src={star} alt='Star Icon' style={{ width: '10%' }} />
                        </p>
                      </div>
                    </figure>
                    <div className='mx-auto d-flex flex-column'>
                      {props.token ? (
                        <button className='btn btn-default' onClick={reviewRoute}>
                          Review
                        </button>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                  <div className='bus-details d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                      <div className='bus-details--header'>
                        <h1 className='card-header border-bottom-0'>{business.businessName}</h1>
                        <div className='product-description'>{business.description}</div>

                        <br />
                      </div>
                      <div className='bus-details--info mt-3'>
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
                      </div>
                    </div>
                    <div className='d-flex justify-content-around'>
                      <div className='bus-details--features-list w-50'>
                        <p className='card-header border-bottom-0'>
                          <b>Features</b>
                        </p>
                        {bizFeatsArr.map(feat => (
                          <div className='bus-details--features' style={{ textTransform: 'capitalize' }} key={feat.id}>
                            <ul>
                              <li>
                                <b>{feat.name}</b>
                                <br />
                                <span className='small'>{feat.description}</span>
                              </li>
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className='bus-details--services-list w-50'>
                        <p className='card-header border-bottom-0'>
                          <b>Services</b>
                        </p>
                        {bizServiceArr.map(service => (
                          <div className='bus-details--service-name' style={{ textTransform: 'capitalize' }} key={service.id}>
                            <ul>
                              <li>
                                <b>{service.name}</b>
                                <br />
                                <span className='small' style={{ textTransform: '' }}>
                                  {service.description}
                                </span>
                              </li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className='d-flex flex-column'>
                      <div className={phone ? 'visable-phone' : 'hidden-phone'}>phone: {business.phone}</div>
                      <button
                        onClick={handleClick}
                        className='btn btn-default'
                        // style={{
                        //   width: '75%',
                        //   marginTop: '10px',
                        //   margin: 'auto',
                        // }}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
