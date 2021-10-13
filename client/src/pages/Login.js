import React, { useState } from 'react'
import ContentHeader from '../components/ContentHeader'
import { useHistory } from 'react-router'

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  })
  const history = useHistory()

  const { email, password } = loginUser

  const handleChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value })
  }

  const routeChange = () => {
    history.push('/signup')
  }
  const handleSubmit = async () => {
    // debugger
    console.log('in handle submit', loginUser)
    try {
      const response = await fetch('/api/authorize/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accepts: 'application/json',
        },
        body: JSON.stringify({ ...loginUser }),
      })
      // if (!response.ok) {
      //   throw new Error('Could not signup')
      // }
      if (!response.ok) {
        // debugger
        throw new Error('Could not signup')
      }
      console.log(setLoginUser(response))
      history.push('/')
    } catch (err) {
      // debugger
    }
  }

  return (
    <React.Fragment>
      <ContentHeader title='Log In' />

      <div className='card w-50 mx-auto'>
        <div className='card-header'>
          <h5 className='m-0'>Log In</h5>
        </div>
        <div className='card-body'>
          <form className='form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>Email</label>
              <input
                name='email'
                type='email'
                className='form-control'
                placeholder='Email'
                onChange={handleChange}
                value={email}
                autoComplete='off'
              />
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input
                name='password'
                type='password'
                className='form-control'
                placeholder='Password'
                onChange={handleChange}
                value={password}
              />
            </div>
            <div className='login-btns'>
              <button
                onChange={handleChange}
                type='submit'
                className='btn btn-primary'>
                Login
              </button>
              <button onClick={routeChange} className='btn btn-primary'>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login
