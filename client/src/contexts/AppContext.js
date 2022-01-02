import { useState, createContext } from 'react'
import axios from 'axios'

export const AppContext = createContext()

export const AppContextProvider = props => {
  // console.log('in appcontext props', props)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {})

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

  // Initialize  Services and Features to state
  const [feats, setFeats] = useState([]) // Features full object
  const [services, setServices] = useState([]) // Services full object
  const [featuresArr, setFeaturesArr] = useState([])
  const [servicesArr, setServicesArr] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchFeatures = () => {
    //pass func agr inside of the then callback data on line 58 to setCheckboxNames with data from BusProfile

    fetch('/api/features', { method: 'GET' })
      .then(resp => {
        if (resp.status >= 200 && resp.status <= 299) {
          setLoading(true)
          return resp.json()
        } else {
          throw new Error(resp.statusText)
        }
      })
      .then(data => {
        // console.log('data', data)
        setFeats(data)
        const feats = data.features.map(el => {
          let featsName = el.name
          let featsId = el._id
          let featsIsChecked = el.isChecked

          return [featsName, featsId, featsIsChecked]
        })
        // setPosts(json.data.children.map(c => c.data))
        setFeaturesArr(feats)
        setLoading(false)
      })
      .catch(error => {
        console.log('Error fetching features', error)
        setLoading(false)
      })
  }
  const fetchServices = () => {
    fetch('/api/services', { method: 'GET' })
      .then(resp => {
        if (resp.status >= 200 && resp.status <= 299) {
          setLoading(true)
          return resp.json()
        } else {
          throw new Error(resp.statusText)
        }
      })
      .then(data => {
        setServices(data)
        const services = data.services.map(el => {
          let servicesName = el.name
          let servicesId = el._id
          let servicesIsChecked = el.isChecked

          return [servicesName, servicesId, servicesIsChecked]
        })
        // const services = data.services.map(service => {
        //   console.log(data)
        //   return service.name
        // })
        setServicesArr(services)
        setLoading(false)
      })
      .catch(error => {
        console.log('Error fetching services', error)
        setLoading(false)
      })
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
        fetchFeatures,
        fetchServices,
        feats,
        setFeats,
        services,
        setServices,
        loading,
        setLoading,
        featuresArr,
        setFeaturesArr,
        servicesArr,
        setServicesArr,
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
