// Custom Imports
import ContentHeader from '../components/ContentHeader'

const BusinessProfile = () => {
  return (
    <>
      <section className='content-wrapper bus-profile'>
        <header className='bus-profile--header'>
          <ContentHeader title='Business Profile Page' />
        </header>
        <div class='card card-primary'>
          <div class='card-header'>
            <h3 class='card-title'>Business Profile</h3>
          </div>

          {/* <-- Form Start --> */}
          <form>
            <div class='card-body'>
              <div class='form-group'>
                <label for='businessName'>Business Name</label>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Business Name'
                />
              </div>
              <div class='form-group'>
                <label for='description'>Description</label>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Business Description / Slogan'
                />
              </div>
              <div class='form-group'>
                <label for='address1'>Address Line 1</label>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Street Address, P.O. Box, C/O'
                />
              </div>
              <div class='form-group'>
                <label for='address2'>Address Line 2</label>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Apartment, Suite, Unit, Building, Floor, ETC.'
                />
              </div>
              <div class='form-group'>
                <label for='cityTown'>City / Town</label>
                <input
                  type='text'
                  class='form-control'
                  placeholder='City / Town'
                />
              </div>
              <div class='form-group'>
                <label for='stateProvinceRegion'>
                  State / Province / Region
                </label>
                <input
                  type='text'
                  class='form-control'
                  placeholder='State / Province / Region'
                />
              </div>
              <div class='form-group'>
                <label for='zipPostalCode'>Zip / Postal Code</label>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Zip / Postal Code'
                />
              </div>
              <div class='form-group'>
                <label for='features'>Features</label>
                <div class='form-check'>
                  <input type='checkbox' class='form-check-input' />
                  <label class='form-check-label' for='accessible'>
                    Wheelchair Accessible
                  </label>
                </div>
                <div class='form-check'>
                  <input type='checkbox' class='form-check-input' />
                  <label class='form-check-label' for='wifi'>
                    Wifi
                  </label>
                </div>
                <div class='form-check'>
                  <input type='checkbox' class='form-check-input' />
                  <label class='form-check-label' for='freeParking'>
                    Free Parking
                  </label>
                </div>
              </div>
              <div class='form-group'>
                <label for='services'>Services</label>
                <div class='form-check'>
                  <input type='checkbox' class='form-check-input' />
                  <label class='form-check-label' for='waxing'>
                    Waxing
                  </label>
                </div>
                <div class='form-check'>
                  <input type='checkbox' class='form-check-input' />
                  <label class='form-check-label' for='extensions'>
                    Extensions
                  </label>
                </div>
                <div class='form-check'>
                  <input type='checkbox' class='form-check-input' />
                  <label class='form-check-label' for='blowOuts'>
                    Blow Outs
                  </label>
                </div>
                <div class='form-check'>
                  <input type='checkbox' class='form-check-input' />
                  <label class='form-check-label' for='coloring'>
                    Coloring
                  </label>
                </div>
                <div class='form-check'>
                  <input type='checkbox' class='form-check-input' />
                  <label class='form-check-label' for='make-up'>
                    Make-up
                  </label>
                </div>
              </div>
              <button type='submit' class='btn btn-primary'>
                Submit
              </button>
            </div>
            {/* <-- Form End --> */}
          </form>
        </div>
      </section>
    </>
  )
}
export default BusinessProfile
