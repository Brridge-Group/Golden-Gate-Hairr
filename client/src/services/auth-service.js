import axios from 'axios'

const API_URL = '/api/authorize/'

const login = async (email, password) => {
  console.log('in auth-service login', email, password)
  debugger
  try {
    const response = await fetch('API_URL + login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json',
      },
      body: JSON.stringify(email, password),
    })

    if (!response.ok) {
      throw new Error('Could not login')
    }
    console.log(response)
    debugger
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }

    // history.push('/')
  } catch (err) {}
}
// return axios
//   .post(API_URL + 'login', {
//     email,
//     password,
//   })
//   .then((response) => {
//     if (response.data.accessToken) {
//       localStorage.setItem('user', JSON.stringify(response.data))
//     }

//     return response.data
//   })

const logout = () => {
  localStorage.removeItem('user')
}

const register = (firstName, lastName, email, password) => {
  return axios.post(API_URL + 'register', {
    firstName,
    lastName,
    email,
    password,
  })
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

export default {
  register,
  login,
  logout,
  getCurrentUser,
}
