import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/shared/Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="bg-cover skin-dark-footer footerbox">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">Nuestros servicios</h4>
                  <ul className="footer-menu">
                    <li>Geotecnia</li>
                    <li>Perforaciones</li>
                    <li>Diseños geotecnícos</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">Contáctanos</h4>
                  <p>Manizales, Colombia</p>
                  <p>santiago@gmail.com</p>
                  <a target="_blank" href="http://wa.me/+573218450982">
                    <p>+57 322 655 9438</p>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">Siguenos</h4>
                  <ul className="footer-bottom-social">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>

                  <form className="signup-frm mt-4">
                    <input
                      type="email"
                      className="form-control sigmup-me"
                      placeholder="Your Email Address"
                      required="required"
                    />
                    <button type="submit" className="btn btn-primary">
                      <i className="ti-arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12 text-center">
                <p className="mb-0">Colombia - {new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
