import { useState, createContext, useEffect } from 'react'
import axios from 'axios'
const todoAxios = axios.create()

todoAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export const AppContext = createContext()

export const AppContextProvider = props => {
  // console.log('in appcontext props', props)
  const [todos, setTodos] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {})
  const [token, setToken] = useState(localStorage.getItem('token') || '')

  useEffect(() => {
    getTodos()
  }, [])

  const addTodo = newTodo => {
    console.log('in addTodo context, newTodo', newTodo)
    return todoAxios.post('/api/todos/', newTodo).then(response => {
      console.log('in addTodo response', response)
      const responseReceived = response.data
      setTodos({ ...todos, responseReceived })
    })
  }

  const getTodos = () => {
    return todoAxios.get('/api/todos').then(response => {
      console.log('getTodos, response.data', response.data)
      setTodos({ todos: response.data })
      // return response
    })
  }

  const editTodo = (todoId, todo) => {
    return todoAxios.put(`/api/todos/${todoId}`, todo).then(response => {
      setTodos(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
          return todo._id === response.data._id ? response.data : todo
        })
        return { todos: updatedTodos }
      })
      return response
    })
  }

  const deleteTodo = todoId => {
    return todoAxios.delete(`/api/todos/${todoId}`).then(response => {
      setTodos(prevState => {
        const updatedTodos = prevState.todos.filter(todo => {
          return todo._id !== todoId
        })
        return { todos: updatedTodos }
      })
      return response
    })
  }

  // const deleteTodo = todoId => {
  //   return todoAxios.delete(`/api/todos/${todoId}`).then(response => {
  //     setTodos(prevState => {
  //       const updatedTodos = prevState.todos.filter(todo => {
  //         return todo._id !== todoId
  //       })
  //       return { todos: updatedTodos }
  //     })
  //     return response
  //   })
  // }

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
        addTodo,
        editTodo,
        deleteTodo,
        getTodos,
        signup,
        login,
        logout,
        todos,
        setTodos,
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
