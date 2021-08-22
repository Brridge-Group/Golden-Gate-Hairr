import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import ContentHeader from '../components/ContentHeader'

const UserRegistration = () => {
  const [userForm, setUserForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  })
  const history = useHistory()

  const { firstName, lastName, email, password, password2 } = userForm
  const onChange = (e) =>
    setUserForm({ ...userForm, [e.target.name]: e.target.value })

  const registrationSubmitHandler = async (e) => {
    e.preventDefault()
    if (password !== password2) {
      alert('Passwords do not match')
    } else {
      const newUser = {
        firstName,
        lastName,
        email,
        password,
        password2,
      }

      try {
        const response = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ newUser }),
        })

        if (!response.ok) {
          throw new Error('Could not save user')
        }

        history.push('/')
      } catch (err) {}
    }
  }

  return (
    <div>
      <React.Fragment>
        <div className='content-wrapper'>
          <ContentHeader title='Registration' />
          <div className='card w-50 mx-auto'>
            <div className='card-header'>
              <h5 className='m-0'>Registration</h5>
            </div>
            <div className='card-body'>
              <form className='form' onSubmit={registrationSubmitHandler}>
                <div className='form-group'>
                  <label>First Name</label>
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
                  <label>Last Name</label>
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
                  <label>Email</label>
                  <input
                    name='email'
                    type='text'
                    className='form-control'
                    placeholder='Email'
                    onChange={onChange}
                    value={email}
                  />
                </div>
                <div className='form-group'>
                  <label>Password</label>
                  <input
                    name='password'
                    type='text'
                    className='form-control'
                    placeholder='Password'
                    onChange={onChange}
                    minLength='6'
                    value={password}
                  />
                </div>
                <div className='form-group'>
                  <label>Name</label>
                  <input
                    name='password2'
                    type='text'
                    className='form-control'
                    placeholder='Confirm Password'
                    onChange={onChange}
                    minLength='6'
                    value={password2}
                  />
                </div>
                <button
                  onChange={onChange}
                  type='submit'
                  className='btn btn-primary'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  )
}

export default UserRegistration
