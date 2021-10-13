
// Custom Imports
import ContentHeader from '../components/ContentHeader'
const BusinessSignup = () => {

  return (
    <>
      <section className='content-wrapper bus-signup ml-0'>
      <ContentHeader title='Business Signup' />
        <div className='register-box mx-auto'>
          <div className='card card-outline card-primary'>
            <div className='card-header text-center'>
              <a href='/' className='h1'>
                <b>Hairr</b>
              </a>
            </div>
            <div className='card-body'>
              <p className='login-box-msg'>
                Register a new Business <br></br> <span>User Profile</span>
              </p>

              <form>
                <div className='input-group mb-3'>
                  <input
                    name='firstName'
                    type='text'
                    className='form-control'
                    placeholder='First Name'
                    
                  />
                  <div className='input-group-append'>
                    <div className='input-group-text'>
                      <span className='fas fa-user'></span>
                    </div>
                  </div>
                </div>
                <div className='input-group mb-3'>
                  <input
                    name='lastName'
                    type='text'
                    className='form-control'
                    placeholder='Last Name'
                    
                  />
                  <div className='input-group-append'>
                    <div className='input-group-text'>
                      <span className='fas fa-user'></span>
                    </div>
                  </div>
                </div>
                <div className='input-group mb-3'>
                  <input
                    name='email'
                    type='email'
                    className='form-control'
                    placeholder='Email'
                    
                  />
                  <div className='input-group-append'>
                    <div className='input-group-text'>
                      <span className='fas fa-envelope'></span>
                    </div>
                  </div>
                </div>
                <div className='input-group mb-3'>
                  <input
                    name='password'
                    type='password'
                    className='form-control'
                    placeholder='Password'
                    minLength='6'
                    
                  />
                  <div className='input-group-append'>
                    <div className='input-group-text'>
                      <span className='fas fa-lock'></span>
                    </div>
                  </div>
                </div>
                <div className='input-group mb-3'>
                  <input
                    name='confirmedPassword'
                    type='password'
                    className='form-control'
                    placeholder='Confirm password'
                    minLength='6'
                    
                  />
                  <div className='input-group-append'>
                    <div className='input-group-text'>
                      <span className='fas fa-lock'></span>
                    </div>
                  </div>
                </div>
                <div className='row d-flex justify-content-center'>
                  <button
                    type='submit'
                    className='btn btn-primary btn-block col-5'
                  >
                    Register
                  </button>
                </div>
              </form>
              <p>
                <a href='/' className='text-center'>
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BusinessSignup
