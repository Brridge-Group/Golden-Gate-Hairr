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
  const [filteredFeats, setFilteredFeats] = useState([])
  const [filteredServices, setFilteredServices] = useState([])

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

  //* Filter Business Features and Services
  // HandleChanges for the features and services checkboxes
  const onFeatChange = event => {
    const { name, checked, id } = event.target
    console.log('id', id, 'checked', checked)
    setFilteredFeats({ ...filteredFeats, [`${name} (${id})`]: checked })
  }
  // console.log('filteredFeats', filteredFeats)
  const onServiceChange = event => {
    const { name, checked, id } = event.target
    console.log('id', id, 'checked', checked)
    setFilteredServices({ ...filteredServices, [`${name} (${id})`]: checked })
  }
  // console.log('filteredServices', filteredServices)

  // Monitor changes to the filtered features and services arrays. If there are changes send the data to the SearchResults component
  useEffect(() => {
    if (props.onFeatChange) {
      //   props.onChange( filteredFeats)
      props.onFeatChange(filteredFeats)
      // console.log(filteredFeats)
    }
    if (props.onServiceChange) {
      props.onServiceChange(filteredServices)
      console.log(filteredServices)
    }
  }, [filteredFeats, filteredServices])

  return (
    <>
      {!props.loading ? (
        <>
          <div className='filters' style={{ margin: '10px' }}>
            <div className='form-group'>
              <label htmlFor='features' style={{ textTransform: 'var(--capitalize)' }}>
                Features
              </label>

              {props.featuresArr?.map((feature, id, index) => (
                <div className='form-check' style={{ textTransform: 'var(--capitalize)' }} key={`${feature}_` + index}>
                  <input className='form-check-input' type='checkbox' name={`feature-${feature[0]}`} id={feature[1]} defaultChecked={feature[2].isChecked} value={id} onChange={onFeatChange} />
                  <label className='form-check-label' htmlFor={feature[1]}>
                    {feature[0]}
                  </label>
                </div>
              ))}
            </div>
            <div className='form-group'>
              <label htmlFor='services' style={{ textTransform: 'var(--capitalize)' }}>
                Services
              </label>
              {props.servicesArr?.map((service, id, index) => (
                <div className='form-check' style={{ textTransform: 'var(--capitalize)' }} key={`${service}_` + index}>
                  <input className='form-check-input' type='checkbox' name={`service-${service[0]}`} id={service[1]} defaultChecked={service[2].isChecked} value={id} onChange={onServiceChange} />
                  <label className='form-check-label' htmlFor={service[1]}>
                    {service[0]}
                  </label>
                </div>
              ))}
            </div>
            <button onClick={props.handleFilterResults} style={{ textTransform: 'var(--capitalize)' }}>
              Filter Results
            </button>
            <button onClick={props.handleResetFilter} style={{ textTransform: 'var(--capitalize)' }}>
              Reset Filter
            </button>
          </div>
        </>
      ) : (
        isLoading && <LoadSpinner />
      )}
    </>
  )
}

export default withContext(Filters)
