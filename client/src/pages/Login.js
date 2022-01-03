import { useState } from 'react'
import { useHistory } from 'react-router'
import { withContext } from '../contexts/AppContext'

const Login = props => {
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  })
  const history = useHistory()

  const { email, password } = loginUser
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = e => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value })
  }

  const changeCase = e => {
    console.log('changeCase, e.target.value', e.target)
    e.preventDefault()
    setLoginUser(e.target.value.toLowerCase())
  }

  const routeChange = () => {
    history.push('/signup')
  }
  const handleSubmit = async e => {
    e.preventDefault()
    console.log('handle', e.target.value)
    // setLoginUser(e.target.value.toLowerCase())

    console.log('in handle submit', loginUser)
    props
      .login(loginUser)
      .then(() => history.push('/'))

      .catch(err => {
        if (err.response) {
          setErrorMessage(err.response.data)
        }
      })
  }

  return (
    <>
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
                onMouseEnter={changeCase}
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
                className='btn btn-primary'
              >
                Login
              </button>
              <button onClick={routeChange} className='btn btn-primary'>
                Register
              </button>
            </div>
          </form>
          {errorMessage && (
            <p style={{ color: 'grey', marginTop: '10px' }}>{errorMessage}</p>
          )}
        </div>
      </div>
    </>
  )
}

export default withContext(Login)
