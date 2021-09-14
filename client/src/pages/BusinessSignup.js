import { useState } from 'react'

// Custom Imports
import ContentHeader from '../components/ContentHeader'

const BusinessSignup = () => {
  const [businessRegForm, setBusinessRegForm] = useState({
    businessName: '',
    email: '',
    password: '',
    confirmedPassword: '',
  })

  const { businessName, email, password, confirmedPassword } = businessRegForm

  const onFormChange = (event) => {
    setBusinessRegForm({
      ...businessRegForm,
      [event.target.name]: event.target.value,
    })
  }

  const registrationSubmitHandler = async (event) => {
    event?.preventDefault()
    if (password !== confirmedPassword) {
      alert('The provided passwords do not match. Please try again.')
    } else {
      const newBusiness = {
        businessName,
        email,
        password,
        confirmedPassword,
      }
      console.log('newBusiness', newBusiness)
      try {
        const apiBusData = await fetch('/api/businesses', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...newBusiness }),
        })

        if (!apiBusData.ok) {
          throw new Error('New business registration failed.')
        }
        console.log('apiBusData', apiBusData)
      } catch (error) {
        console.log(error)
      }
    }
    console.log('event', event)
  }
  return (
    <>
      <section className='content-wrapper bus-signup'>
        <header className='bus-signup--header'>
          <ContentHeader title='Business Signup' />
        </header>
        <div className='register-box d-flex vw-100 justify-content-center'>
          <div className='card card-outline card-primary'>
            <div className='card-header text-center'>
              <a href='/' className='h1'>
                <b>Hairr</b>
              </a>
            </div>
            <div className='card-body'>
              <p className='login-box-msg'>Register a new Business</p>
              <form onSubmit={registrationSubmitHandler}>
                <div className='input-group mb-3'>
                  <input
                    name='businessName'
                    type='text'
                    className='form-control'
                    placeholder='Business Name'
                    value={businessName}
                    onChange={onFormChange}
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
                    value={email}
                    onChange={onFormChange}
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
                    value={password}
                    minLength='6'
                    onChange={onFormChange}
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
                    value={confirmedPassword}
                    minLength='6'
                    onChange={onFormChange}
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
