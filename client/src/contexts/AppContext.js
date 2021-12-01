import { useState, createContext } from 'react'
import axios from 'axios'

export const AppContext = createContext()

export const AppContextProvider = props => {
  console.log('in appcontext props', props)
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || {}
  )

  const [token, setToken] = useState(localStorage.getItem('token') || '')

  const signup = userInfo => {
    return axios.post('/api/authorize/signup', userInfo).then(response => {
      const { token, user } = response.data
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      setUser(user)
      setToken(token)

      return response
    })
  }

  const login = credentials => {
    console.log('creditionals', credentials)
    return axios.post('/api/authorize/login', credentials).then(response => {
      const { token, user } = response.data
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      setUser(user)
      setToken(token)
      return response
    })
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setToken('')
    setUser({})
  }

  return (
    <AppContext.Provider
      value={{
        signup,
        login,
        logout,
        user,
        setUser,
        token,
        setToken,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export const withContext = Component => {
  return props => {
    return (
      <AppContext.Consumer>
        {globalState => {
          return <Component {...globalState} {...props} />
        }}
      </AppContext.Consumer>
    )
  }
}
