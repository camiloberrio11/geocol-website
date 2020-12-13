import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="header header-light shadow">
        <div className="container">
          <nav id="navigation" className="navigation navigation-landscape">
            <div className="nav-header">
              <Link className="nav-brand" to="/">
                <img
                  src="https://res.cloudinary.com/dupegtamn/image/upload/c_scale,h_65,w_356/v1607820179/geocol/logo2tra_xbl066.png"
                  className="logo"
                  alt=""
                />
              </Link>
              <div className="nav-toggle"></div>
            </div>
            <div
              className="nav-menus-wrapper"
              style={{ transitionProperty: 'none' }}
            >
              <ul className="nav-menu">
                <li>
                  <NavLink to="/" activeClassName="active">
                    Inicio<span className="submenu-indicator"></span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/empresa" activeClassName="activeNavLink">
                    Empresa<span className="submenu-indicator"></span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/servicios">
                    Servicios<span className="submenu-indicator"></span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/proyectos">
                    Proyectos<span className="submenu-indicator"></span>
                  </NavLink>
                </li>

                <li>
                  <a href="http://wa.me/+573226559438" target="_blank">
                    Contacto<span className="submenu-indicator"></span>
                  </a>
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
