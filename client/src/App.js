import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'

import Login from './pages/Login'
import Signup from './pages/Signup'

import Search from './pages/Search'
import SearchResults from './pages/SearchResults'
import BusinessesFiltered from './pages/BusinessesFiltered'
import BusinessDetails from './pages/BusinessDetails'
import BusinessProfile from './pages/BusinessProfile'
import Profile from './pages/Profile'

// Context Imports

const App = () => {
  let routes

  routes = (
    <Switch>
      <Route exact path='/'>
        <Search />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/signup'>
        <Signup />
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
      {/* <Route exact path='/businesses/:city'>
        <Businesses />
      </Route> */}
      <Route exact path='/business/profile'>
        <BusinessProfile />
      </Route>
      <Route
        exact
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
        {/* {routes} */}
        <div className='content'>{routes}</div>
      </div>
      <Footer />
    </Router>
  )
}

export default App
