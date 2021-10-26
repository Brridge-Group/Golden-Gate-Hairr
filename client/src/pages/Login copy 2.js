import React, { useState, useRef } from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import AuthService from '../services/auth-service'
import ContentHeader from '../components/ContentHeader'
import { useHistory } from 'react-router'

const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        This field is required!
      </div>
    )
  }
}

const Login = (props) => {
  const form = useRef()
  const checkBtn = useRef()
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const history = useHistory()

  const { email, password } = loginUser

  const handleChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value })
  }

  const routeChange = () => {
    history.push('/signup')
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('in handle submit', loginUser)

    setMessage('')
    setLoading(true)

    form.current.validateAll()

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(email, password).then(
        () => {
          history.push('/profile')
          window.location.reload()
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()

          setLoading(false)
          setMessage(resMessage)
        }
      )
    } else {
      setLoading(false)
    }
    // try {
    //   const response = await fetch('/api/authorize/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Accepts: 'application/json',
    //     },
    //     body: JSON.stringify({ ...loginUser }),
    //   })

    //   if (!response.ok) {
    //     throw new Error('Could not login')
    //   }
    //   history.push('/')
    // } catch (err) {}
  }

  return (
    <React.Fragment>
      <ContentHeader title='Log In' />

      <div className='card w-50 mx-auto'>
        <div className='card-header'>
          <h5 className='m-0'>Log In</h5>
        </div>
        <div className='card-body'>
          <Form className='form' onSubmit={handleSubmit} ref={form}>
            <div className='form-group'>
              <label>Email</label>
              <Input
                name='email'
                type='email'
                className='form-control'
                placeholder='Email'
                onChange={handleChange}
                value={email}
                autoComplete='off'
                validations={[required, email]}
              />
            </div>
            <div className='form-group'>
              <label>Password</label>
              <Input
                name='password'
                type='password'
                className='form-control'
                placeholder='Password'
                onChange={handleChange}
                value={password}
                validations={[required, password]}
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
            <CheckButton style={{ display: 'none' }} ref={checkBtn} />
          </Form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login
