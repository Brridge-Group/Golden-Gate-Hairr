import React from 'react'
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
import ListItems from './pages/ListItems'
import NewItem from './pages/NewItem'
import UpdateItem from './pages/UpdateItem'
import UserRegistration from './pages/UserRegistration'
import Search from './pages/Search'
import SearchResults from './pages/SearchResults'

import BusinessesFiltered from './pages/BusinessesFiltered'
import BusinessDetails from './pages/BusinessDetails'
import BusinessSignup from './pages/BusinessSignup'
import BusinessProfile from './pages/BusinessProfile'

// Context Imports
import { AuthProvider } from './contexts/GlobalContext'

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
      <Route exact path='/search'>
        <Search />
      </Route>
      <Route exact path='/search/:city'>
        <SearchResults />
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
        render={props => <BusinessDetails {...props} />}
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
