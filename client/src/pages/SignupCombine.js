import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { withContext } from '../contexts/AppContext'

import ContentHeader from '../components/ContentHeader'

const SignupCombine = (props) => {
  // console.log('in signupcombine', isChecked)
  const [userForm, setUserForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  })
  const [isChecked, setIsChecked] = useState({
    owner: false,
  })
  console.log('in signupcombine', isChecked)

  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  const { firstName, lastName, email, password, password2 } = userForm

  const clearInputs = () => {
    setUserForm(userForm)
    setErrorMessage(errorMessage)
  }

  const onChange = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setIsChecked({
      isChecked,
      [e.target.name]: value,
    })

    setUserForm({ ...userForm, [e.target.name]: e.target.value })
  }

  const registrationSubmitHandler = async (e) => {
    e.preventDefault()
    if (password !== password2) {
      alert('Passwords do not match')
    } else {
      props
        .signup(userForm)
        .then(() =>
          !isChecked.isOwner
            ? history.push('/profile')
            : history.push('/business/profile')
        )
        .catch((err) => {
          if (err.response) {
            setErrorMessage(err.response.data)
          }
        })
    }
  }

  return (
    <React.Fragment>
      <ContentHeader title='Registration' />
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
              <label htmlFor='owner'>Business Owner</label>
              <div className='form-check'>
                <input
                  name='isOwner'
                  type='checkbox'
                  className='form-check-input'
                  onChange={onChange}
                  checked={isChecked.isOwner}
                />
                <label className='form-check-label' htmlFor='freeParking'>
                  Check If True
                </label>
              </div>
            </div>

            <button
              onChange={onChange}
              type='submit'
              className='btn btn-primary'>
              Submit
            </button>
          </form>
          {errorMessage && (
            <p style={{ color: 'grey', marginTop: '10px' }}>{errorMessage}</p>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default withContext(SignupCombine)
