// React Components
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Custom Imports
import { withContext } from '../contexts/AppContext'
import LoadSpinner from '../components/LoadSpinner'
import '../stylesheets/LoadSpinner.css'

// 3rd Party Imports
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const BusinessProfile = props => {
  const history = useHistory()

  const [mobile, setmobile] = useState('')

  // // (Backlog) TODO: [ ] - ? Remove the useEffect below set to save full features and services data object from context to component state
  // const [features, setFeatures] = useState([])
  // const [services, setServices] = useState([])

  // useEffect(() => {
  //   setFeatures(props.feats.features)
  //   setServices(props.services.services)
  // }, [props.feats, props.services])
  // console.log('services bus profile state', services)
  // console.log('features bus profile state', features)

  // Initialize state objects for form checkboxes
  const [isChecked, setIsChecked] = useState(false)
  const [isFeatsChecked, setIsFeatsChecked] = useState([])
  const [isServicesChecked, setIsServicesChecked] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch Services and Features

  // (Backlog) TODO: [ ] - ? Determine to use first word in string of name of checkbox, i.e. MakeUp Application === makeup
  useEffect(() => {
    setLoading(true)
    const getFeaturesServices = async () => {
      setLoading(true)
      await props.fetchFeatures()
      await props.fetchServices()
    }
    getFeaturesServices()
    console.log('Biz UserId', props.user._id)
    return function clean() {
      setLoading(false)
    }
  }, [])

  // Initialize business profile form state object
  const [businessProfileForm, setBusinessProfileForm] = useState({
    businessName: '',
    description: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
  })

  // (Backlog) TODO: Error Handling UI
  const [_error, set_Error] = useState(null)

  const onFormChange = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value

    setBusinessProfileForm({
      ...businessProfileForm,
      [event.target.name]: value,
    })
    // console.log('e', { [event.target.name]: value })

    // (Backlog) TODO: Save to database. Currently sending, but not being saved.
    if (event.target.type === 'checkbox') {
      setIsChecked({
        ...isChecked,
        [event.target.name]: value,
      })

      if (event.target.name.includes('service')) {
        setIsServicesChecked({
          ...isServicesChecked,
          [event.target.id]: value,
        })
      }

      if (event.target.name.includes('feature')) {
        setIsFeatsChecked({
          ...isFeatsChecked,
          [event.target.id]: value,
        })
      }
    }
    // console.log('BizOnFormChange', businessProfileForm)
  }

  const saveNewBusiness = async () => {
    // Save to the businesses collection database all features and services set to true.
    let savedFormFeats = Object.entries(isFeatsChecked)
      .map(key => {
        if (key[1] === true) {
          return [key[0]]
        }
      })
      .filter(el => {
        if (el !== undefined) {
        }
        return el
      })

    let savedFormServices = Object.entries(isServicesChecked)
      .map(key => {
        if (key[1] === true) {
          return [key[0]]
        }
      })
      .filter(el => {
        if (el !== undefined) {
        }
        return el
      })

    let newBusiness = {
      ...businessProfileForm,
      features: savedFormFeats,
      services: savedFormServices,
      userId: props.user._id,
      phone: mobile,
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...newBusiness }),
    }

    try {
      const response = await fetch('/api/businesses', requestOptions)
      if (!response.ok) {
        throw new Error('New business profile not saved! Please resubmit.')
      }
      const json = await response.json()
      alert('Profile creation successful. Thank you!!')
    } catch (error) {
      console.error('Profile not created.', error.message)
      set_Error(error.message)
    }
  }

  const profileSubmitHandler = event => {
    event?.preventDefault()
    saveNewBusiness().then(history.push('/'))
  }

  return (
    <>
      {!props.loading ? (
        <>
          <section className='content-wrapper bus-profile ml-0'>
            <div className='card card-primary w-75 mx-auto'>
              <div className='card-header' style={{ textTransform: 'var(--capitalize)' }}>
                New Business Profile
              </div>
              {/* <-- Form Start --> */}
              <form onSubmit={profileSubmitHandler}>
                <span
                  className='d-flex justify-content-center align-self-center mx-auto'
                  style={{
                    color: 'red',
                    fontSize: '1.5rem',
                    textAlign: 'center',
                    width: '20rem',
                  }}
                >
                  {_error}
                </span>
                <div className='card-body'>
                  <fieldset>
                    <div className='form-group'>
                      <label htmlFor='businessName' style={{ textTransform: 'var(--capitalize)' }}>
                        Business Name
                      </label>
                      <input
                        id='businessName'
                        name='businessName'
                        type='text'
                        className='form-control'
                        placeholder='Business Name'
                        value={businessProfileForm.businessName}
                        onChange={onFormChange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='description' style={{ textTransform: 'var(--capitalize)' }}>
                        Description
                      </label>
                      <input
                        id='description'
                        name='description'
                        type='text'
                        className='form-control'
                        placeholder='Business Description / Slogan'
                        value={businessProfileForm.description}
                        onChange={onFormChange}
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='email' style={{ textTransform: 'var(--capitalize)' }}>
                        Email
                      </label>
                      <input id='email' name='email' type='email' className='form-control' placeholder='Business@EmailAddress.com' value={businessProfileForm.email} onChange={onFormChange} />
                    </div>
                  </fieldset>
                  <fieldset>
                    <div className='form-group'>
                      <label htmlFor='address1' style={{ textTransform: 'var(--capitalize)' }}>
                        Address Line 1
                      </label>
                      <input
                        id='address1'
                        name='address1'
                        type='text'
                        className='form-control'
                        placeholder='Street Address, P.O. Box, C/O'
                        value={businessProfileForm.address1}
                        onChange={onFormChange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='address2' style={{ textTransform: 'var(--capitalize)' }}>
                        Address Line 2
                      </label>
                      <input
                        id='address2'
                        name='address2'
                        type='text'
                        className='form-control'
                        placeholder='Apt, Suite, Unit, Bldg, Floor, Etc.'
                        value={businessProfileForm.address2}
                        onChange={onFormChange}
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='cityTown' style={{ textTransform: 'var(--capitalize)' }}>
                        City / Town
                      </label>
                      <input id='cityTown' name='city' type='text' className='form-control' placeholder='City / Town' value={businessProfileForm.city} onChange={onFormChange} required />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='stateProvinceRegion' style={{ textTransform: 'var(--capitalize)' }}>
                        State / Province / Region
                      </label>
                      <input
                        id='stateProvinceRegion'
                        name='state'
                        type='text'
                        className='form-control'
                        placeholder='State / Province / Region'
                        value={businessProfileForm.state}
                        onChange={onFormChange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='zipPostalCode' style={{ textTransform: 'var(--capitalize)' }}>
                        Zip / Postal Code
                      </label>
                      <input
                        id='zipPostalCode'
                        name='zipCode'
                        type='text'
                        className='form-control'
                        placeholder='Zip / Postal Code'
                        value={businessProfileForm.zipCode}
                        onChange={onFormChange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='phoneNumber' style={{ textTransform: 'var(--capitalize)' }}>
                        Phone Number
                      </label>
                      <PhoneInput
                        placeholder='Enter phone number'
                        className='form-control'
                        country={'us'}
                        value={mobile}
                        onChange={mobile => setmobile(mobile)}
                        required
                        onlyCountries={['us']}
                        disableDropdown
                      />
                    </div>
                  </fieldset>
                  <div className='form-group'>
                    <label htmlFor='features' style={{ textTransform: 'var(--capitalize)' }}>
                      Features
                    </label>

                    {props.featuresArr?.map((feature, index) => (
                      <div className='form-check' style={{ textTransform: 'var(--capitalize)' }} key={`${feature}_` + index}>
                        <input className='form-check-input' type='checkbox' name={`feature-${feature[0]}`} id={feature[1]} defaultChecked={feature[2].isChecked} onChange={onFormChange} />
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
                    {props.servicesArr?.map((service, index) => (
                      <div className='form-check' style={{ textTransform: 'var(--capitalize)' }} key={`${service}_` + index}>
                        <input className='form-check-input' type='checkbox' name={`service-${service[0]}`} id={service[1]} defaultChecked={service[2].isChecked} onChange={onFormChange} />
                        <label className='form-check-label' htmlFor={service[1]}>
                          {service[0]}
                        </label>
                      </div>
                    ))}
                  </div>
                  <button type='submit' className='btn btn-primary' style={{ textTransform: 'var(--capitalize)' }}>
                    Submit
                  </button>
                </div>
                {/* <-- Form Ends --> */}
              </form>
            </div>
          </section>
        </>
      ) : (
        loading && <LoadSpinner />
      )}
    </>
  )
}

export default withContext(BusinessProfile)
