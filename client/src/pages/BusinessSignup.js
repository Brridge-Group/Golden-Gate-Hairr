// React Components
import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

// Custom Imports
import ContentHeader from '../components/ContentHeader'
import { AuthContext } from '../contexts/GlobalContext'
const BusinessSignup = () => {
  const [businessRegForm, setBusinessRegForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmedPassword: ''
  })

  const { userState, setUserState } = useContext(AuthContext)

  const [isNewBusUserCreated, setIsNewBusUserCreated] = useState(false)

  // Todo: Error Handling UI
  const [_error, set_Error] = useState(null)

  const { firstName, lastName, email, password, confirmedPassword } =
    businessRegForm

  const history = useHistory()

  const onFormChange = event => {
    setBusinessRegForm({
      ...businessRegForm,
      [event.target.name]: event.target.value
    })
  }

  const saveNewBusinessUser = async () => {
    const newBusinessUser = {
      firstName,
      lastName,
      email,
      password,
      type: 2,
      createdDate: Date.now()
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...newBusinessUser })
    }

    try {
      const response = await fetch('/api/users', requestOptions)
      const json = await response.json()
      setUserState(json)
      setIsNewBusUserCreated(true)
      alert('Registration Successful')
    } catch (error) {
      set_Error(error)
      console.error(
        'A new business user registration error occurred. Error Message:',
        error
      )
    }
  }

  const registrationSubmitHandler = event => {
    event?.preventDefault()

    if (password !== confirmedPassword) {
      alert('The provided passwords do not match. Please try again.')
    } else {
      saveNewBusinessUser()
      history.push('/businesses/profile')
    }
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
              <p className='login-box-msg'>
                Register a new Business <br></br> <span>User Profile</span>
              </p>
              
              <form onSubmit={registrationSubmitHandler}>
                <div className='input-group mb-3'>
                  <input
                    name='firstName'
                    type='text'
                    className='form-control'
                    placeholder='First Name'
                    value={firstName}
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
                    name='lastName'
                    type='text'
                    className='form-control'
                    placeholder='Last Name'
                    value={lastName}
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
