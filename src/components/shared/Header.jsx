import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="header header-light shadow">
        <div className="container">
          <nav id="navigation" className="navigation navigation-landscape">
            <div className="nav-header">
              <Link className="nav-brand" to="/">
                <img src="assets/img/logo.png" className="logo" alt="" />
              </Link>
              <div className="nav-toggle"></div>
            </div>
            <div
              className="nav-menus-wrapper"
              style={{transitionProperty: 'none'}}
            >
              <ul className="nav-menu">
                <li className="active">
                  <Link to="/">
                    Inicio<span className="submenu-indicator"></span>
                  </Link>
                </li>

                <li>
                  <Link to="/empresa">
                    Empresa<span className="submenu-indicator"></span>
                  </Link>
                </li>

                <li>
                  <Link to="/servicios">
                    Servicios<span className="submenu-indicator"></span>
                  </Link>
                </li>

                <li>
                  <Link to="/proyectos">
                    Proyectos<span className="submenu-indicator"></span>
                  </Link>
                </li>

                <li>
                  <Link to="/contacto">
                    Contacto<span className="submenu-indicator"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default Header;
