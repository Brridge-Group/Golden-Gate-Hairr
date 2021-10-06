import React from 'react'
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

import BusinessDetails from './pages/BusinessDetails'
import UserRegistration from './pages/UserRegistration'
import Login from './pages/Login'

const App = () => {
  let routes

  routes = (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/sign-up'>
        <UserRegistration />
      </Route>
      <Route exact path='/log-in'>
        <Login />
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
          <div className='content'>{routes}</div>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
