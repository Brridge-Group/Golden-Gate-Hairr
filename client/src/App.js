import React, { useEffect } from 'react'
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
import Search from './pages/Search'
import SearchResults from './pages/SearchResults'

import BusinessesFiltered from './pages/BusinessesFiltered'
import BusinessDetails from './pages/BusinessDetails'
import BusinessSignup from './pages/BusinessSignup'
import BusinessProfile from './pages/BusinessProfile'
import Profile from './pages/Profile'

// Context Imports

const App = (props) => {
  console.log(props)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    const currentUser = user
    console.log('current user', currentUser)
  }, [])

  // componentDidMount(token) {
  // 	token = localStorage.getItem('token');

  // 	if (token) {
  // 		// load up their shit
  // 		// fetch('http://localhost:3000/api/v1/auto_login', {
  // 		// fetch(`https://petstoo-api.netlify.app/api/v1/auto_login`, {
  // 			fetch(`https://pacific-hollows-81769.herokuapp.com/api/v1/auto_login`, {
  // 			headers: {
  // 				Authorization: token
  // 			}
  // 		})
  // 			.then((resp) => resp.json())
  // 			.then((resp) => {
  // 				this.setState({
  // 					currentUser: resp
  // 				});
  // 			});
  // 	}
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
        <Signup />
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
