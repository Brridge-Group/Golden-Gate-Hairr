import React, { useState } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

export const AppContextProvider = (props) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || {}
  )
  const [token, setToken] = useState(localStorage.getItem('token') || '')

  const signup = (userInfo) => {
    return axios.post('/api/authorize/register', userInfo).then((response) => {
      const { user, token } = response.data
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      setUser(user)
      setToken(token)

      return response
    })
  }

  const login = (credentials) => {
    return axios.post('/api/authorize/login', credentials).then((response) => {
      const { token, user } = response.data
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      setUser(user)
      setToken(token)
      return response
    })
  }

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setUser(user)
    setToken(token)
  }

  return (
    <AppContext.Provider
      value={{
        signup,
        login,
        logout,
      }}>
      {props.children}
    </AppContext.Provider>
  )
}

export const withContext = (Component) => {
  return (props) => {
    return (
      <AppContext.Consumer>
        {(globalState) => {
          return <Component {...globalState} {...props} />
        }}
      </AppContext.Consumer>
    )
  }
}
