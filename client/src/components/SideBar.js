import { NavLink } from 'react-router-dom'
import { withContext } from '../contexts/AppContext'

const SideBar = props => {
  return (
    <>
      <aside className='main-sidebar sidebar-dark-primary elevation-4'>
        <a href='index3.html' className='brand-link'>
          <img src='/assets/dist/img/AdminLTELogo.png' alt='AdminLTE Logo' className='brand-image img-circle elevation-3' style={{ opacity: 0 }} />
          <span className='brand-text font-weight-light' style={{ opacity: 0 }}>
            app name
          </span>
        </a>

        <div className='sidebar'>
          <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
            <div className='image'>
              <img src='/assets/dist/img/user2-160x160.jpg' className='img-circle elevation-2' alt='User' />
            </div>
            <div className='info'>
              <a href='#s' className='d-block'>
                {!props.token ? `` : `welcome ${props.user.firstName} ${props.user.lastName}`}
              </a>
            </div>
          </div>

          <nav className='mt-2'>
            <ul className='nav nav-pills nav-sidebar flex-column' data-widget='treeview' role='menu' data-accordion='false'>
              <li className='nav-item'>
                <NavLink to='/' exact className='nav-link'>
                  <i className='nav-icon fas fa-home'></i>
                  <p>Home</p>
                </NavLink>
              </li>
              {!props.token ? (
                <>
                  <li className='nav-item'>
                    <NavLink to='/signup' exact className='nav-link'>
                      <i className='nav-icon fas fa-user-plus'></i>
                      <p>Sign Up</p>
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink to='/login' exact className='nav-link'>
                      <i className='nav-icon fas fa-user-plus'></i>
                      <p>Log In</p>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className='nav-item'>
                    <NavLink to='/profile' exact className='nav-link'>
                      <i className='nav-icon fas fa-user-plus'></i>
                      <p>Profile</p>
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink to='/logout' exact className='nav-link' onClick={props.logout}>
                      <i className='nav-icon fas fa-sign-out-alt'></i>
                      <p>Log Out</p>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}

export default withContext(SideBar)
