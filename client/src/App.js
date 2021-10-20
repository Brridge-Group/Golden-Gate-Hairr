import React, { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  useHistory,
} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import AuthContext from './contexts/AuthContext'

import Login from './pages/Login'
import ListItems from './pages/ListItems'
import NewItem from './pages/NewItem'
import UpdateItem from './pages/UpdateItem'

import UserRegistration from './pages/UserRegistration'
import Search from './pages/Search'
import BusinessesFiltered from './pages/BusinessesFiltered'
import BusinessDetails from './pages/BusinessDetails'
import BusinessSignup from './pages/BusinessSignup'

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
      {/* <Route exact path='/business-details'>
        <BusinessDetails />
        </Route> */}

      <Route exact path='/search'>
        <Search />
      </Route>
      <Route exact path='/items'>
        <ListItems />
      </Route>
      <Route exact path='/items/new'>
        <NewItem />
      </Route>
      <Route exact path='/items/:id'>
        <UpdateItem />
      </Route>
      <Route exact path='/businesses'>
        <BusinessesFiltered />
      </Route>
      <Route path='/business-signup' exact>
        <BusinessSignup />
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
      <div className='App'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
          <div className='content'>
            <AuthContext value={user}>
            {routes}
            </AuthContext>
          </div>
        </div>
        <Footer />
      <Header />
      <SideBar />
      {/* <div className='content-wrapper'>
      </div> */}
      <Footer />
      </div>
    </Router>
  )
}

export default App
