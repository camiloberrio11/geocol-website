import React from 'react';
import '../styles/components/empresa.css';
import BannerPage from './shared/BannerPage';
import Layout from './shared/Layout';

const Empresa = () => {
  return (
    <>
      <Layout>
        <BannerPage titulo="¿Quienes somos?" />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="about-content">
                  <h2>Santiago Loaiza</h2>
                  <p>
                    <b>Ingeniero civil especialista en geotecnia</b>, con
                    experiencia en diseño y construcción de obras geotécnicas,
                    asi como diseños intgrales que brinde solucion a problemas
                    de la ingeniería con el apoyo de personas, ingenieros y un
                    grupo interdisciplinario de personas que ayudan a cumplir
                    cada logro.
                  </p>
                  <p>
                    Trabajamos en todo el país con sede principal en la ciudad
                    de Pereira.
                  </p>
                  <ul className="our-team-profile ts-light-bg">
                    <li>
                      <a href="#!">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <img
                  src="https://res.cloudinary.com/dupegtamn/image/upload/c_scale,h_800,w_800/v1607873645/geocol/pexels-pixabay-220759_foly5d.jpg"
                  className="img-fluid mx-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <div className="clearfix"></div>
      </Layout>
    </>
  );
};

export default Empresa;
