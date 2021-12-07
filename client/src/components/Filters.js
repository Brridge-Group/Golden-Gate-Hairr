// React Components
import { useState, useEffect } from 'react'

// Custom Imports
import { withContext } from '../contexts/AppContext'
import LoadSpinner from './LoadSpinner'
import '../stylesheets/LoadSpinner.css'

const Filters = props => {
  // // (Backlog) TODO: [ ] - ? Remove the useEffect below set to save full features and services data object from context to component state
  // // Initialize state for features and services pull from context
  // const [features, setFeatures] = useState([])
  // const [services, setServices] = useState([])
  // useEffect(() => {
  //   setFeatures(props.feats)
  //   setServices(props.services)
  // }, [props.features, props.services])

  // console.log('features', features)
  // console.log('services', services)

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

  return (
    <>
      {!props.loading ? (
        <>
          <div className='filters' style={{ margin: '10px' }}>
            <div className='form-group'>
              <label htmlFor='features'>Features</label>

              {props.featuresArr?.map((feature, index) => (
                <div
                  className='form-check'
                  style={{ textTransform: 'capitalize' }}
                  key={`${feature}_` + index}
                >
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name={`feature-${feature[0]}`}
                    id={feature[1]}
                    defaultChecked={feature[2].isChecked}
                  />
                  <label className='form-check-label' htmlFor={feature[1]}>
                    {feature[0]}
                  </label>
                </div>
              ))}
            </div>
            <div className='form-group'>
              <label htmlFor='services'>Services</label>
              {props.servicesArr?.map((service, index) => (
                <div
                  className='form-check'
                  style={{ textTransform: 'capitalize' }}
                  key={`${service}_` + index}
                >
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name={`service-${service[0]}`}
                    id={service[1]}
                    defaultChecked={service[2].isChecked}
                  />
                  <label className='form-check-label' htmlFor={service[1]}>
                    {service[0]}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        isLoading && <LoadSpinner />
      )}
    </>
  )
}

export default withContext(Filters)
