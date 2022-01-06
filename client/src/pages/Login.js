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
    const value = e.target.value
    setLoginUser({ ...loginUser, [e.target.name]: value })
  }

  const routeChange = () => {
    history.push('/signup')
  }
  const handleSubmit = async e => {
    e.preventDefault()
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
        <div className='card-body'>
          <form className='form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>Email</label>
              <input name='email' type='email' className='form-control' placeholder='Email' onChange={handleChange} value={email} autoComplete='off' />
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input name='password' type='password' className='form-control' placeholder='Password' onChange={handleChange} value={password} />
            </div>
            <div className='login-btns'>
              <button onChange={handleChange} type='submit' className='btn btn-primary'>
                Login
              </button>
              <button onClick={routeChange} className='btn btn-primary'>
                Register
              </button>
            </div>
          </form>
          {errorMessage && <p style={{ color: 'grey', marginTop: '10px' }}>{errorMessage}</p>}
        </div>
      </div>
    </>
  )
}

export default withContext(Login)
