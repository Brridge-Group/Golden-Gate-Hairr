import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import ListItems from './pages/ListItems'
import NewItem from './pages/NewItem'
import UpdateItem from './pages/UpdateItem'
import BusinessDetails from './pages/BusinessDetails'
import BusinessSignup from './pages/BusinessSignup'
import BusinessProfile from './pages/BusinessProfile'

import { AuthProvider } from './contexts/GlobalContext'

const App = () => {
  let routes

  routes = (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/items' exact>
        <ListItems />
      </Route>
      <Route path='/items/new' exact>
        <NewItem />
      </Route>
      <Route path='/items/:id' exact>
        <UpdateItem />
      </Route>
      <Route path='/business-details' exact>
        <BusinessDetails />
      </Route>
      <Route path='/business-signup' exact>
        <BusinessSignup />
      </Route>
      <Route path='/business/profile' exact>
        <BusinessProfile />
      </Route>
      <Redirect to='/' />
    </Switch>
  )

  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <Header />
          <SideBar />
          <div className='content'>{routes}</div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
