const Header = () => {
  return (
    <>
      <nav className='main-header navbar navbar-expand navbar-white navbar-light'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a
              className='nav-link'
              data-widget='pushmenu'
              href='#s'
              role='button'
            >
              <i className='fas fa-bars'></i>
            </a>
          </li>
        </ul>

        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a
              className='nav-link'
              data-widget='fullscreen'
              href='#s'
              role='button'
            >
              <i className='fas fa-expand-arrows-alt'></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
