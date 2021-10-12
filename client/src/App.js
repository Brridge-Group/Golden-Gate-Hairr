import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import './App.css'
import AuthContext from './contexts/AuthContext'

import BusinessDetails from './pages/BusinessDetails'
import UserRegistration from './pages/UserRegistration'
import Login from './pages/Login'

const App = () => {
  // const [user, setUser] = useState(null)
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
      <Route exact path='/business-details'>
        <BusinessDetails />
      </Route>
      <Redirect to='/' />
    </Switch>
  )

  return (
    <Router>
      <div className='App'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
          <div className='content'>
            {/* <AuthContext value={user}> */}
            {routes}
            {/* </AuthContext> */}
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
