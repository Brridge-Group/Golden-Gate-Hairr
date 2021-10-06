import React, { useState } from 'react'
import ContentHeader from '../components/ContentHeader'

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const { firstName, lastName, email, password } = loginUser

  const handleChange = (e) => {
    setLoginUser({
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = () => {}
  // handleSubmit = () => {
  //   // fetch('http://localhost:3000/api/v1/login', {
  //   fetch(`https://pacific-hollows-81769.herokuapp.com/api/v1/login`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accepts: 'application/json',
  //     },
  //     body: JSON.stringify(this.state),
  //   })
  //     .then((res) => res.json())
  //     .then((resp) => {
  //       if (resp.errors) {
  //         alert(resp.errors)
  //       } else {
  //         this.props.setCurrentUser(resp)
  //       }
  //     })
  // }

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
              <label>First Name</label>
              <input
                name='firstName'
                type='text'
                className='form-control'
                placeholder='First Name'
                onChange={handleChange}
                value={firstName}
                required
                autoComplete='off'
              />
            </div>
            <div className='form-group'>
              <label>Last Name</label>
              <input
                name='lastName'
                type='text'
                className='form-control'
                placeholder='Last Name'
                onChange={handleChange}
                value={lastName}
                required
                autoComplete='off'
              />
            </div>
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
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login
