// React Components
import { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Custom Imports
import ContentHeader from '../components/ContentHeader'
import { withContext } from '../contexts/AppContext'
import { AppContext } from '../contexts/AppContext'

const BusinessProfile = props => {
  const history = useHistory()

  // Import State Objects from Context
  const {
    fetchFeatures,
    fetchServices,
    feats,
    setFeats,
    services,
    setServices,
  } = useContext(AppContext)

  // Initialize list of checkbox Names and checkbox checked status object
  const [checkboxNames, setCheckboxNames] = useState([])
  const [checkboxFeatsNames, setCheckboxFeatsNames] = useState([])
  const [checkboxServicesNames, setCheckboxServicesNames] = useState([])
  const [isChecked, setIsChecked] = useState({})

  // Fetch Services and Features
  useEffect(() => {
    async function getFeaturesServices() {
      const feats = await fetchFeatures()
      const services = await fetchServices()
      let featuresServices = []
      let servicesArr = []
      let featuresArr = []
      // props.feats.features?.filter(featureName => {
      //   console.log(featureName.name)
      //   featuresServices.push(featureName.name)
      // }) &&
      //   props.services.services?.filter(serviceName => {
      //     console.log(serviceName.name)
      //     featuresServices.push(serviceName.name)
      //   })
      // console.log(featuresServices)
      // setCheckboxNames([...featuresServices])
      props.services.services?.filter(serviceName => {
        console.log(serviceName.name)
        servicesArr.push(serviceName.name)
      })
      setCheckboxServicesNames([...servicesArr])
      props.feats.features?.filter(featureName => {
        console.log(featureName.name)
        featuresArr.push(featureName.name)
      })
      setCheckboxFeatsNames([...featuresArr])
    }
    getFeaturesServices()
  }, [])

  // Construct a new object with `keys` from the list of checkbox names set to a boolean value of `false`
  useEffect(() => {
    async function setCheckboxesObj() {
      await checkboxNames

      if (checkboxNames.length > 1) {
        let newObj = {}
        newObj = Object.fromEntries(
          checkboxNames.map(checkbox => [checkbox.toLowerCase(), false])
        )
        setIsChecked({ ...newObj })
        console.log('newObj', newObj)
        console.log('isChecked', isChecked)
      }
      // (Backlog) TODO: ? Store the checkbox Names as a variable after sanitizing to use as name, id, htmlFor and checked={isChecked.${}}
      // Determine to use first word in string of name of checkbox, i.e. MakeUp Application === makeup
      // Object.keys(obj).map(k => { res[k] = () => k; return k;})
    }
    setCheckboxesObj()
  }, [checkboxNames, checkboxFeatsNames])

  console.log('feats', feats)
  console.log('services', services)
  console.log('checkboxNames', checkboxNames)
  console.log('in busprofile, user', props.user._id)

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
    userId: '',
  })

  // (Backlog) TODO: Error Handling UI
  const [_error, set_Error] = useState(null)

  const onFormChange = event => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value

    setBusinessProfileForm({
      ...businessProfileForm,
      [event.target.name]: value,
    })
    console.log('e', { [event.target.name]: value })

    // (Backlog) TODO: Save to database. Currently sending, but not being saved.
    setIsChecked({
      ...isChecked,
      [event.target.name]: value,
    })
  }

  const saveNewBusiness = async () => {
    let newBusiness = {
      ...businessProfileForm,
      userId: props.user._id,
    }

    // (Backlog) TODO: Add {isChecked} to save in database. Currently sending, but not being saved.

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
      <ContentHeader title='Business Profile Page' />
      <section className='content-wrapper bus-profile ml-0'>
        <div className='card card-primary w-75 mx-auto'>
          <div className='card-header'>New Business Profile</div>
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
                  <label htmlFor='businessName'>Business Name</label>
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
                  <label htmlFor='description'>Description</label>
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
                  <label htmlFor='email'>Email</label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    className='form-control'
                    placeholder='Business@EmailAddress.com'
                    value={businessProfileForm.email}
                    onChange={onFormChange}
                  />
                </div>
              </fieldset>
              <fieldset>
                <div className='form-group'>
                  <label htmlFor='address1'>Address Line 1</label>
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
                  <label htmlFor='address2'>Address Line 2</label>
                  <input
                    id='address2'
                    name='address2'
                    type='text'
                    className='form-control'
                    placeholder='Apt, Suite, Unit, Bld, Floor, Etc.'
                    value={businessProfileForm.address2}
                    onChange={onFormChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='cityTown'>City / Town</label>
                  <input
                    id='cityTown'
                    name='city'
                    type='text'
                    className='form-control'
                    placeholder='City / Town'
                    value={businessProfileForm.city}
                    onChange={onFormChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='stateProvinceRegion'>
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
                  <label htmlFor='zipPostalCode'>Zip / Postal Code</label>
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
              </fieldset>
              <div className='form-group'>
                <label htmlFor='features'>Features</label>
                {checkboxFeatsNames.map((checkboxFeatsName, index) => (
                  <div
                    className='form-check'
                    key={`${checkboxFeatsName}_` + index}
                  >
                    <label
                      className='form-check-label'
                      htmlFor={checkboxFeatsName}
                      style={{ textTransform: 'capitalize' }}
                    >
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name={checkboxFeatsName.name}
                        id={checkboxFeatsName.id}
                        checked={checkboxFeatsName.isChecked}
                        onChange={onFormChange}
                      />
                      {checkboxFeatsName}
                    </label>
                  </div>
                ))}
              </div>
              <div className='form-group'>
                <label htmlFor='services'>Services</label>
                {checkboxServicesNames.map((checkboxServicesName, index) => (
                  <div
                    className='form-check'
                    key={`${checkboxServicesName}_` + index}
                  >
                    <label
                      className='form-check-label'
                      htmlFor={checkboxServicesName}
                      style={{ textTransform: 'capitalize' }}
                    >
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name={checkboxServicesName.name}
                        id={checkboxServicesName.id}
                        checked={checkboxServicesName.isChecked}
                        onChange={onFormChange}
                      />
                      {checkboxServicesName}
                    </label>
                  </div>
                ))}
              </div>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </div>
            {/* <-- Form Ends --> */}
          </form>
        </div>
      </section>
    </>
  )
}

export default withContext(BusinessProfile)
