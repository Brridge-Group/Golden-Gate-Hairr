import React, { useState, createContext, useEffect } from 'react'
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
    console.log('credentials', credentials)
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

  // ---------------------------------------------------------
  // Set Features
  const [feats, setFeats] = useState([])
  const [services, setServices] = useState([])

  const fetchFeatures = () => {
    fetch('/api/features', { method: 'GET' })
      .then(resp => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json()
        } else {
          throw new Error(resp.statusText)
        }
      })
      .then(data => setFeats(data))
      .catch(error => {
        console.log('Error fetching features', error)
      })
  }
  const fetchServices = () => {
    fetch('/api/services', { method: 'GET' })
      .then(resp => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json()
        } else {
          throw new Error(resp.statusText)
        }
      })
      .then(data => setServices(data))
      .catch(error => {
        console.log('Error fetching services', error)
      })
  }

  // ---------------------------------------------------------
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
        fetchFeatures,
        fetchServices,
        feats,
        setFeats,
        services,
        setServices,
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
