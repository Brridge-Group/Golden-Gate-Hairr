import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <React.Fragment>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
          <img
            src="/assets/dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: 0.8 }}
          />
          <span className="brand-text font-weight-light">Hello World</span>
        </a>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="/assets/dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User"
              />
            </div>
            <div className="info">
              <a href="#s" className="d-block">
                John Smith
              </a>
            </div>
          </div>

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <NavLink to="/" exact className="nav-link">
                  <i className="nav-icon fas fa-home"></i>
                  <p>Home</p>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/items" className="nav-link">
                  <i className="nav-icon fas fa-list"></i>
                  <p>Items</p>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default SideBar;
