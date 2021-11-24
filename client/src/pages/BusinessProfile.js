// React Components
import { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Custom Imports
import ContentHeader from '../components/ContentHeader'
import { withContext } from '../contexts/AppContext'
import { AppContext } from '../contexts/AppContext'

const BusinessProfile = props => {
  const history = useHistory()

  // const [checkboxes, setCheckboxes] = useState([])
  // const [isChecked2, setIsChecked2] = useState({})
  // // Fetch Features && Services from the database and store into state on component
  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       // Fetch Features from the database
  //       const featuresResp = await fetch('/api/features', { method: 'GET' })
  //       const featuresData = await featuresResp.json()
  //       console.log(featuresData)

  //       if (!featuresResp.ok) {
  //         throw new Error(featuresData.message)
  //       }

  //       // Fetch Services from the database
  //       const servicesResp = await fetch('/api/services', { method: 'GET' })
  //       const servicesData = await servicesResp.json()
  //       console.log(servicesData)

  //       if (!servicesResp.ok) {
  //         throw new Error(servicesData.message)
  //       }

  //       // Set Features && Services `names` to a state array
  //       setCheckboxes(
  //         featuresData.features.filter(feature => {
  //           checkboxes.push(feature.name)
  //         }),

  //         servicesData.services.filter(service => {
  //           checkboxes.push(service.name)
  //         })
  //       )
  //       // Convert fetched data into object of isChecked values
  //       if (checkboxes.length > 1) {
  //         let newObj = {}
  //         newObj = Object.fromEntries(
  //           checkboxes.map(checkbox => [checkbox, false])
  //         )
  //         setIsChecked2(newObj)
  //         console.log('newObj', newObj)
  //         console.log('isChecked2', isChecked2)
  //       }
  //       console.log('checkboxes', checkboxes)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   fetchItems()
  // }, [checkboxes, isChecked2])

  // Import User State Object from Context
  console.log('in busprofile, user', props.user._id)

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

  const [isChecked, setIsChecked] = useState({
    isAccessible: false,
    isWifi: false,
    isFreeParking: false,
    isWaxing: false,
    isExtensions: false,
    isBlowOuts: false,
    isColoring: false,
    isMakeUp: false,
  })

  // TODO (Backlog): Error Handling UI
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

    // TODO (Backlog): Save to database. Currently sending, but not being saved.
    setIsChecked2({
      ...isChecked2,
      [event.target.name]: value,
    })
  }

  const saveNewBusiness = async () => {
    let newBusiness = {
      ...businessProfileForm,
      userId: props.user._id,
    }

    // TODO (Backlog): Add {isChecked} to save in database. Currently sending, but not being saved.

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

  //* ---------------------------------------------------------

  // Import User State Object from Context
  const {
    user,
    fetchFeatures,
    fetchServices,
    feats,
    setFeats,
    services,
    setServices,
  } = useContext(AppContext)

  console.log('feats', feats)
  console.log('services', services)
  // console.log(user)

  const [checkboxNames, setCheckboxNames] = useState([])
  const [isChecked2, setIsChecked2] = useState({})
  useEffect(() => {
    async function getFeaturesServices() {
      const feats = await fetchFeatures()
      const services = await fetchServices()
      let featuresServices = []
      props.feats.features?.filter(featureName => {
        console.log(featureName.name)
        featuresServices.push(featureName.name)
      }) &&
        props.services.services?.filter(serviceName => {
          console.log(serviceName.name)
          featuresServices.push(serviceName.name)
        })
      console.log(featuresServices)
      setCheckboxNames([...featuresServices])
    }
    getFeaturesServices()

    // let featuresServices = []
    // props.feats.features?.filter(featureName => {
    //   console.log(featureName.name)
    //   featuresServices.push(featureName.name)
    // })
    // props.services.services?.filter(serviceName => {
    //   console.log(serviceName.name)
    //   featuresServices.push(serviceName.name)
    // })
    // console.log(featuresServices)
    // setCheckboxNames([...checkboxNames, ...featuresServices])
  }, [])

  useEffect(() => {
    async function setCheckboxesObj() {
      await checkboxNames
      // debugger
      console.log(checkboxNames)
      if (checkboxNames.length > 1) {
        let newObj = {}
        newObj = Object.fromEntries(
          checkboxNames.map(checkbox => [checkbox, false])
        )
        setIsChecked2({ ...newObj })
        console.log('newObj', newObj)
        console.log('isChecked2', isChecked2)
      }
      // TODO: ?Store the checkbox Names as a variable after sanitizing to use as name, id, htmlFor and checked={isChecked2.${}}
      // Determine to use first word in string of name of checkbox, i.e. MakeUp Application === makeup
      // Object.keys(obj).map(k => { res[k] = () => k; return k;});
    }
    setCheckboxesObj()
  }, [checkboxNames])

  // console.log('props.checkboxes', props.checkboxes)
  console.log('checkboxNames', checkboxNames)
  //* ---------------------------------------------------------

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
                <label htmlFor='featuresServices'>Features & Services</label>
                {checkboxNames.map((checkboxName, index) => (
                  <div className='form-check' key={`${checkboxName}_` + index}>
                    <label
                      className='form-check-label'
                      htmlFor={checkboxName}
                      style={{ textTransform: 'capitalize' }}
                    >
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name={checkboxName.name}
                        id={checkboxName.id}
                        checked={checkboxName.isChecked}
                        onChange={onFormChange}
                      />
                      {checkboxName}
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
