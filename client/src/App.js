import React, { useEffect, useReducer, useState, useContext } from 'react'
import './App.css'
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

import Login from './pages/Login'
import Signup from './pages/Signup'
import SignupCombine from './pages/SignupCombine'

import Search from './pages/Search'
import SearchResults from './pages/SearchResults'

import BusinessesFiltered from './pages/BusinessesFiltered'
import BusinessDetails from './pages/BusinessDetails'
import BusinessSignup from './pages/BusinessSignup'
import BusinessProfile from './pages/BusinessProfile'
import Profile from './pages/Profile'

// Context Imports
import { AppContext } from './contexts/AppContext'

const App = (props) => {
  console.log('in app', props)

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
        <Signup />
      </Route>
      <Route path='/signup-combine'>
        <SignupCombine />
      </Route>
      <Route exact path='/search'>
        <Search />
      </Route>
      <Route exact path='/profile/'>
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
    <Router>
      <Header />
      <SideBar />
      <div className='content-wrapper'>
        <div className='content'>{routes}</div>
      </div>
      <Footer />
    </Router>
  )
}

export default App
