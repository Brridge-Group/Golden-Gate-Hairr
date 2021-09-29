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
import ListItems from './pages/ListItems'
import NewItem from './pages/NewItem'
import UpdateItem from './pages/UpdateItem'

import UserRegistration from './pages/UserRegistration'
import Search from './pages/Search'
import BusinessesFiltered from './pages/BusinessesFiltered'

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
      <Redirect to='/' />
    </Switch>
  )

  return (
    <Router>
      <div className='App'>
        <Header />
        <SideBar />
        <div className='content'>{routes}</div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
