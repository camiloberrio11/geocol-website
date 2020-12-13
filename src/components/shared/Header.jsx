import React from 'react';

const Header = () => {
  return (
    <>
      <div className="header header-light shadow">
        <div className="container">
          <nav id="navigation" className="navigation navigation-landscape">
            <div className="nav-header">
              <a className="nav-brand" href="/">
                <img
                  src="https://res.cloudinary.com/dupegtamn/image/upload/c_scale,h_65,w_356/v1607820179/geocol/logo2tra_xbl066.png"
                  className="logo"
                  alt="logo"
                />
              </a>
              <div className="nav-toggle"></div>
            </div>
            <div
              className="nav-menus-wrapper"
              style={{ transitionProperty: 'none' }}
            >
              <ul className="nav-menu">
                <li>
                  <a href="/">
                    Inicio<span className="submenu-indicator"></span>
                  </a>
                </li>

                <li>
                  <a href="/empresa">
                    Empresa<span className="submenu-indicator"></span>
                  </a>
                </li>

                <li>
                  <a href="/servicios">
                    Servicios<span className="submenu-indicator"></span>
                  </a>
                </li>

                <li>
                  <a href="/proyectos">
                    Proyectos<span className="submenu-indicator"></span>
                  </a>
                </li>

                <li>
                  <a
                    href="http://wa.me/+573226559438"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
