import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="header header-light shadow">
        <div className="container">
          <nav id="navigation" className="navigation navigation-landscape">
            <div className="nav-header">
              <Link className="nav-brand" to="/" >
                <img src="https://res.cloudinary.com/dupegtamn/image/upload/c_scale,h_65,w_356/v1607630035/geocol/logo_ppnmg2.png" className="logo" alt="" />
              </Link>
              <div className="nav-toggle"></div>
            </div>
            <div
              className="nav-menus-wrapper"
              style={{transitionProperty: 'none'}}
            >
              <ul className="nav-menu">
                <li >
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
                  <NavLink to="/contacto">
                    Contacto<span className="submenu-indicator"></span>
                  </NavLink>
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
