import React, { useState } from 'react'
import ContentHeader from '../components/ContentHeader'
import { useHistory } from 'react-router'
import axios from 'axios'

const Login = (props) => {
  // console.log('in login', props)
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const history = useHistory()

  const { email, password } = user

  // const handleChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value })
  // }

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user, //spread operator
      [name]: value,
    })
  }
  const routeChange = () => {
    history.push('/signup')
  }
  const handleSubmit = (e) => {
    e.preventDefault(e)
    console.log('in handle submit', user)
    fetch('api/login', { method: 'POST' })
      // axios.post("http://localhost:6969/Login",user)
      // axios.post("api/login",user)
      // axios.post('api/login', user)
      .then((res) => {
        alert(res.data.message)
        props.setLogInUser(res.data.user)
      })
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
              <button onClick={handleSubmit} className='btn btn-primary'>
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
