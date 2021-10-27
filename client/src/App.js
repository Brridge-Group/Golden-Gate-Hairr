import React, { useState, useEffect, useContext } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  useHistory,
  Link,
} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
// import AuthService from './services/auth-service'

import Login from './pages/Login'
import UserRegistration from './pages/UserRegistration'
import Search from './pages/Search'
import SearchResults from './pages/SearchResults'

import BusinessesFiltered from './pages/BusinessesFiltered'
import BusinessDetails from './pages/BusinessDetails'
import BusinessSignup from './pages/BusinessSignup'
import BusinessProfile from './pages/BusinessProfile'
import Profile from './pages/Profile'

// Context Imports
import { AuthProvider } from './contexts/GlobalContext'
import { AuthContext } from './contexts/GlobalContext'

const App = (props) => {
  console.log(props)

  const value = useContext(AuthContext)
  // const [userState, setUserState] = useState('')

  // const loadData = () => {
  //   isAuthenticated().then((data) => {
  //     if (data.error) {
  //       console.log('error', data.error)
  //     } else {
  //       setUserState({
  //         ...userState,
  //         firstName: data.user.firstName,
  //         lastName: data.user.lastName,
  //         email: data.user.email,
  //         _id: data.user._id,
  //         createdDate: data.user.createdDate,
  //         type: data.user.type,
  //       })
  //     }
  //   })
  // }

  // useEffect(() => {
  //   loadData()
  // }, [])

  const isAuthenticated = async () => {
    return await fetch(`api/authorize/login`)
      .then((response) => response.json())
      .catch((err) => console.log(err))
  }

  // const logOut = () => {
  //   AuthService.logout()
  // }

  // const [authenticated, setAuthenticated] = useState(false)

  // const login = async (credentials) => {
  //   const response = await this.authService.login(credentials)
  //   if (response) {
  //     setUser(response)
  //     setAuthenticated(true)
  //   }
  // }
  let routes

  routes = (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/signup'>
        <UserRegistration />
      </Route>
      <Route exact path='/search'>
        <Search />
      </Route>
      <Route exact path='/profile'>
        <Profile />
      </Route>

      <Route exact path='/businesses'></Route>
      <Route exact path='/search/:city'>
        <SearchResults />
      </Route>

      <Route exact path='/businesses/:city'>
        <BusinessesFiltered />
      </Route>
      <Route exact path='/business-signup'>
        <BusinessSignup />
      </Route>
      <Route exact path='/business/profile'>
        <BusinessProfile />
      </Route>
      <Route
        path='/business-details'
        render={(props) => <BusinessDetails {...props} />}
      />
      <Redirect to='/' />
    </Switch>
  )

  return (
    <AuthProvider>
      <Router>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
          <div className='content'>{routes}</div>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  )
}

export default App
