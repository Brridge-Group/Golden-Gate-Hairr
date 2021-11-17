// React Components
import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'
// Custom Imports
import ContentHeader from '../components/ContentHeader'
import { withContext } from '../contexts/AppContext'

const BusinessProfile = (props) => {
  const history = useHistory()

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

  const onFormChange = (event) => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value

    setBusinessProfileForm({
      ...businessProfileForm,
      [event.target.name]: value,
    })

    // TODO (Backlog): Save to database. Currently sending, but not being saved.
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

  const profileSubmitHandler = (event) => {
    event?.preventDefault()
    saveNewBusiness().then(history.push('/'))
  }
  return (
    <>
      <ContentHeader title='Business Profile Page' />
      <section className='content-wrapper bus-profile ml-0'>
        <div className='card card-primary w-75 mx-auto'>
          <div className='card-header'>Business Profile Creation</div>
          {/* <-- Form Start --> */}
          <form onSubmit={profileSubmitHandler}>
            <span
              className='d-flex justify-content-center align-self-center mx-auto'
              style={{
                color: 'red',
                fontSize: '1.5rem',
                textAlign: 'center',
                width: '20rem',
              }}>
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
                    placeholder='Apartment, Suite, Unit, Building, Floor, ETC.'
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
                <div className='form-group'>
                  <label htmlFor='phoneNumber'>Phone Number</label>
                  <input
                    id='phoneNumber'
                    name='phoneNumber'
                    type='text'
                    className='form-control'
                    placeholder='Phone Number'
                    value={businessProfileForm.phone}
                    onChange={onFormChange}
                    required
                  />
                </div>
              </fieldset>
              <fieldset>
                <div className='form-group'>
                  <label htmlFor='features'>Features</label>
                  <div className='form-check'>
                    <input
                      id='accessible'
                      name='isAccessible'
                      type='checkbox'
                      className='form-check-input'
                      checked={isChecked.isAccessible}
                      onChange={onFormChange}
                    />
                    <label className='form-check-label' htmlFor='accessible'>
                      Wheelchair Accessible
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      id='wifi'
                      name='isWifi'
                      type='checkbox'
                      className='form-check-input'
                      checked={isChecked.isWifi}
                      onChange={onFormChange}
                    />
                    <label className='form-check-label' htmlFor='wifi'>
                      Wifi
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      id='freeParking'
                      name='isFreeParking'
                      type='checkbox'
                      className='form-check-input'
                      checked={isChecked.isFreeParking}
                      onChange={onFormChange}
                    />
                    <label className='form-check-label' htmlFor='freeParking'>
                      Free Parking
                    </label>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <div className='form-group'>
                  <label htmlFor='services'>Services</label>
                  <div className='form-check'>
                    <input
                      id='waxing'
                      name='isWaxing'
                      type='checkbox'
                      className='form-check-input'
                      onChange={onFormChange}
                      checked={isChecked.isWaxing}
                    />
                    <label className='form-check-label' htmlFor='waxing'>
                      Waxing
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      id='extensions'
                      name='isExtensions'
                      type='checkbox'
                      className='form-check-input'
                      checked={isChecked.isExtensions}
                      onChange={onFormChange}
                    />
                    <label className='form-check-label' htmlFor='extensions'>
                      Extensions
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      id='blowOuts'
                      name='isBlowOuts'
                      type='checkbox'
                      className='form-check-input'
                      checked={isChecked.isBlowOuts}
                      onChange={onFormChange}
                    />
                    <label className='form-check-label' htmlFor='blowOuts'>
                      Blow Outs
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      id='coloring'
                      name='isColoring'
                      type='checkbox'
                      className='form-check-input'
                      checked={isChecked.isColoring}
                      onChange={onFormChange}
                    />
                    <label className='form-check-label' htmlFor='coloring'>
                      Coloring
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      id='makeUp'
                      name='isMakeUp'
                      type='checkbox'
                      className='form-check-input'
                      checked={isChecked.isMakeUp}
                      onChange={onFormChange}
                    />
                    <label className='form-check-label' htmlFor='make-up'>
                      Make-up
                    </label>
                  </div>
                </div>
              </fieldset>
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

// At component mount fetch JSON {} to build form
