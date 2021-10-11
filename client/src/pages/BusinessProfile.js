// React Components
import { useState, useContext } from 'react'

// Custom Imports
import ContentHeader from '../components/ContentHeader'
import { AuthContext } from '../contexts/GlobalContext'

const BusinessProfile = () => {
  const { userState, setUserState } = useContext(AuthContext)
  console.log('BP userState', userState)
  const [businessProfileForm, setBusinessProfileForm] = useState({
    businessName: '',
    description: '',
    address1: '',
    address2: '',
    city: '',
    state: ''
    // Todo: Remove multi-level nested state?
    // features: { isAccessible: false, isWifi: false, isFreeParking: false },
    // services: {
    //   isWaxing: false,
    //   isExtensions: false,
    //   isBlowOuts: false,
    //   isColoring: false,
    //   isMakeUp: false
    // }
  })

  const [isChecked, setIsChecked] = useState({
    isAccessible: false,
    isWifi: false,
    isFreeParking: false,
    isWaxing: false,
    isExtensions: false,
    isBlowOuts: false,
    isColoring: false,
    isMakeUp: false
  })
  const onFormChange = event => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    setBusinessProfileForm({
      ...businessProfileForm,
      [event.target.name]: value
    })
    console.log(businessProfileForm)
  }

  // Todo:
  const saveNewBusiness = async () => {}

  // Todo:
  const profileSubmitHandler = event => {
    event?.preventDefault()
    console.log(businessProfileForm)
  }
  return (
    <>
      <section className='content-wrapper bus-profile'>
        <header className='bus-profile--header'>
          <ContentHeader title='Business Profile Page' />
        </header>
        <div className='card card-primary'>
          <div className='card-header'>Business Profile</div>
          {/* <-- Form Start --> */}
          <form onSubmit={profileSubmitHandler}>
            <div className='card-body'>
              <div className='form-group'>
                <label htmlFor='businessName'>Business Name</label>
                <input
                  name='businessName'
                  type='text'
                  className='form-control'
                  placeholder='Business Name'
                  value={businessProfileForm.businessName}
                  onChange={onFormChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='description'>Description</label>
                <input
                  name='description'
                  type='text'
                  className='form-control'
                  placeholder='Business Description / Slogan'
                  value={businessProfileForm.description}
                  onChange={onFormChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='address1'>Address Line 1</label>
                <input
                  name='address1'
                  type='text'
                  className='form-control'
                  placeholder='Street Address, P.O. Box, C/O'
                  value={businessProfileForm.address1}
                  onChange={onFormChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='address2'>Address Line 2</label>
                <input
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
                  name='city'
                  type='text'
                  className='form-control'
                  placeholder='City / Town'
                  value={businessProfileForm.city}
                  onChange={onFormChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='stateProvinceRegion'>
                  State / Province / Region
                </label>
                <input
                  name='state'
                  type='text'
                  className='form-control'
                  placeholder='State / Province / Region'
                  value={businessProfileForm.state}
                  onChange={onFormChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='zipPostalCode'>Zip / Postal Code</label>
                <input
                  name='zipCode'
                  type='text'
                  className='form-control'
                  placeholder='Zip / Postal Code'
                  value={businessProfileForm.zipCode}
                  onChange={onFormChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='features'>Features</label>
                <div className='form-check'>
                  <input
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
              <div className='form-group'>
                <label htmlFor='services'>Services</label>
                <div className='form-check'>
                  <input
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
export default BusinessProfile
