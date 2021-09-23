// Custom Imports
import ContentHeader from '../components/ContentHeader'

const BusinessProfile = () => {
  return (
    <>
      <section className='content-wrapper bus-profile'>
        <header className='bus-profile--header'>
          <ContentHeader title='Business Profile Page' />
        </header>
        <div className='card card-primary'>
          <div className='card-header'>
            <h3 className='card-title'>Business Profile</h3>
          </div>
          {/* <-- Form Start --> */}
          <form>
            <div className='card-body'>
              <div className='form-group'>
                <label htmlFor='businessName'>Business Name</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Business Name'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='description'>Description</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Business Description / Slogan'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='address1'>Address Line 1</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Street Address, P.O. Box, C/O'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='address2'>Address Line 2</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Apartment, Suite, Unit, Building, Floor, ETC.'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='cityTown'>City / Town</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='City / Town'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='stateProvinceRegion'>
                  State / Province / Region
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='State / Province / Region'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='zipPostalCode'>Zip / Postal Code</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Zip / Postal Code'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='features'>Features</label>
                <div className='form-check'>
                  <input type='checkbox' className='form-check-input' />
                  <label className='form-check-label' htmlFor='accessible'>
                    Wheelchair Accessible
                  </label>
                </div>
                <div className='form-check'>
                  <input type='checkbox' className='form-check-input' />
                  <label className='form-check-label' htmlFor='wifi'>
                    Wifi
                  </label>
                </div>
                <div className='form-check'>
                  <input type='checkbox' className='form-check-input' />
                  <label className='form-check-label' htmlFor='freeParking'>
                    Free Parking
                  </label>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='services'>Services</label>
                <div className='form-check'>
                  <input type='checkbox' className='form-check-input' />
                  <label className='form-check-label' htmlFor='waxing'>
                    Waxing
                  </label>
                </div>
                <div className='form-check'>
                  <input type='checkbox' className='form-check-input' />
                  <label className='form-check-label' htmlFor='extensions'>
                    Extensions
                  </label>
                </div>
                <div className='form-check'>
                  <input type='checkbox' className='form-check-input' />
                  <label className='form-check-label' htmlFor='blowOuts'>
                    Blow Outs
                  </label>
                </div>
                <div className='form-check'>
                  <input type='checkbox' className='form-check-input' />
                  <label className='form-check-label' htmlFor='coloring'>
                    Coloring
                  </label>
                </div>
                <div className='form-check'>
                  <input type='checkbox' className='form-check-input' />
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
