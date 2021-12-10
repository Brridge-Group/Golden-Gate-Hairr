import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { withContext } from '../contexts/AppContext'

const Signup = props => {
  // console.log('signup, props', props.user, props)
  const [userForm, setUserForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
    role: '',
  })

  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  const { firstName, lastName, email, password, password2, role } = userForm

  const changeCase = e => {
    e.preventDefault()
    setUserForm(e.target.value.toLowerCase())
  }

  const onChange = e => {
    const value = e.target.value

    setUserForm({ ...userForm, [e.target.name]: value })
  }

  const registrationSubmitHandler = async e => {
    e.preventDefault()

    if (password !== password2) {
      alert('Passwords do not match')
    } else {
      console.log('handler userForm', userForm)
      props
        .signup(userForm)
        .then(() =>
          role === 'owner'
            ? history.push('/business/profile')
            : history.push('/')
        )
        .catch(err => {
          if (err.response) {
            setErrorMessage(err.response.data)
          }
        })
    }
  }

  return (
    <>
      <div className='card w-50 mx-auto'>
        <div className='card-header'>
          <h5 className='m-0'>Registration</h5>
        </div>
        <div className='card-body'>
          <form className='form' onSubmit={registrationSubmitHandler}>
            <div className='form-group'>
              <label htmlFor='first-name'>First Name</label>
              <input
                name='firstName'
                type='text'
                className='form-control'
                placeholder='First Name'
                onChange={onChange}
                onMouseEnter={changeCase}
                value={firstName}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='last-name'>Last Name</label>
              <input
                name='lastName'
                type='text'
                className='form-control'
                placeholder='Last Name'
                onChange={onChange}
                onMouseEnter={changeCase}
                value={lastName}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                name='email'
                type='email'
                className='form-control'
                placeholder='Email'
                onChange={onChange}
                onMouseEnter={changeCase}
                value={email}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                name='password'
                type='password'
                className='form-control'
                placeholder='Password'
                onChange={onChange}
                minLength='6'
                value={password}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='confirm-password'>Confirm Password</label>
              <input
                name='password2'
                type='password'
                className='form-control'
                placeholder='Confirm Password'
                onChange={onChange}
                minLength='6'
                value={password2}
              />
            </div>
            <div className='form-group'>
              <div className='form-check'>
                <input
                  name='role'
                  type='radio'
                  className='form-check-input'
                  onChange={onChange}
                  checked={role === 'user'}
                  value='user'
                />
                <label className='form-check-label'>User</label>
              </div>
            </div>
            <div className='form-group'>
              <div className='form-check'>
                <input
                  name='role'
                  type='radio'
                  className='form-check-input'
                  onChange={onChange}
                  checked={role === 'owner'}
                  value='owner'
                />
                <label className='form-check-label'>Owner</label>
              </div>
            </div>
            <button
              onChange={onChange}
              type='submit'
              className='btn btn-primary'
            >
              Submit
            </button>
          </form>
          {errorMessage && (
            <p style={{ color: 'grey', marginTop: '10px' }}>{errorMessage}</p>
          )}
        </div>
      </div>
    </>
  )
}

export default withContext(Signup)
