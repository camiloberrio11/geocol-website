import React from 'react';
import Layout from './shared/Layout';
import '../styles/components/Inicio.css';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <Layout>
      <div className="hero-header jumbo-banner overflow-bg inicio_jum">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10">
              <div className="hero-content">
                <h1>ML 45</h1>
                <p className="lead">
                  Especialistas en todo lo relacionado con geotecnía y asesoria
                  para demas servicios, ademas contamos con años de experiencia
                  en diferentes campos aportando a empresas nacionales
                </p>
                <div className="btn-sec">
                  <Link
                    to="/empresa"
                    className="btn-lg btn-success btn-rounded"
                  >
                    Saber más de ML 45
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="sec-heading mx-auto">
                <h2>Our Creative Value</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 mb-4">
              <div
                className="middle-icon-features"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="middle-icon-features-item">
                  <div className="middle-icon-large-features-box f-light-warning">
                    <i className="ti-ruler-pencil"></i>
                  </div>
                  <div className="middle-icon-features-content">
                    <h4>Fully Customization</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have Ipsum available.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 mb-4">
              <div
                className="middle-icon-features"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="middle-icon-features-item">
                  <div className="middle-icon-large-features-box">
                    <i className="ti-shopping-cart-full"></i>
                  </div>
                  <div className="middle-icon-features-content">
                    <h4>WooCommerce</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have Ipsum available.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 mb-4">
              <div
                className="middle-icon-features"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="middle-icon-features-item">
                  <div className="middle-icon-large-features-box f-light-success">
                    <i className="ti-desktop"></i>
                  </div>
                  <div className="middle-icon-features-content">
                    <h4>Creative Design</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have Ipsum available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 text-center">
              <a className="btn btn-primary btn-lg btn-rounded" href="#!">
                See More Services<i className="ml-2 ti-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>

      <section className="p-0 mt-3">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 p-0">
              <div className="image-block-content panel1 inverse-color">
                <h2>Sabes que es geotecnia?</h2>
                <p>
                  La geotecnia es un campo importante de la ingeniería geológica
                  que se ocupa del comportamiento de los materiales de la
                  tierra, las tareas más importantes de la
                  <b>ingeniería geotécnica</b>
                </p>
                <br />
                <p>Que da origen a la ingeniería geotécnica?</p>
                <ul className="simple-list">
                  <li>Mecánica de suelos</li>
                  <li>Mecánica de rocas</li>
                  <li>Estudios geotécnicos</li>
                  <li>Hidrogeología</li>
                  <li>Descripción de macizos rocosos</li>
                  <li>Generación de mapas geotécnicos</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 p-0 image-block">
              <div className="image-block-holder">
                <div
                  className="image-block-holder-img"
                  style={{
                    backgroundImage:
                      "url('https://res.cloudinary.com/dupegtamn/image/upload/c_scale,h_900/v1607628275/geocol/tierra_aooodo.jpg')",
                    opacity: 1,
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dupegtamn/image/upload/c_scale,h_900/v1607628275/geocol/tierra_aooodo.jpg"
                    className="img-responsive img-holder"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 p-0 image-block">
              <div className="image-block-holder">
                <div
                  className="image-block-holder-img"
                  style={{
                    backgroundImage:
                      "url('https://res.cloudinary.com/dupegtamn/image/upload/c_scale,h_900/v1607628820/geocol/petroleo_glu3jj.jpg')",
                    opacity: 1,
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dupegtamn/image/upload/c_scale,h_900/v1607628820/geocol/petroleo_glu3jj.jpg"
                    className="img-responsive img-holder"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 p-0">
              <div className="image-block-content bg-dark-blue inverse-color">
                <h2>En donde se aplica la geotecnia?</h2>
                <ul className="simple-list">
                  <li>Estabilidad de taludes</li>
                  <li>Cimentaciones</li>
                  <li>Construcción de túneles</li>
                  <li>Excavaciones suberráneas</li>
                  <li>Presas</li>
                  <li>Vertederos</li>
                  <li>Mejora del suelo</li>
                  <li>Sostenimiento</li>
                  <li>Minería</li>
                  <li>Obras civiles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
    </Layout>
  );
};

export default Inicio;
