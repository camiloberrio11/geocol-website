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
                <h1>Diseño y construcción</h1>
                <p className="lead">
                  Diseños integrales que componen los campos de la Geotecnia,
                  Hidráulica - hidrología y estructuras, así como la
                  construcción de obras geotécnicas
                </p>
                <div className="btn-sec">
                  <Link
                    to="/empresa"
                    className="btn-lg btn-warning btn-rounded"
                  >
                    Quiero saber más
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
                <h2>Lo que nos encanta hacer</h2>
                <p>
                  Realizamos todo tipo de servicios relacionados con geotecnia,
                  consultoría y construcció, así como estudios integrales con
                  las demás áreas de la ingeniería civil. Te dejamos algunos de
                  nuestros servicios más característicos
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
                    <i className="ti-direction-alt"></i>
                  </div>
                  <div className="middle-icon-features-content">
                    <h4 className="txt-black">Estudios integrales</h4>
                    <p className="txt-black">
                      Donde se solucionan problemas de la ingeniería que
                      ameritan la union de todas las áreas de la misma.
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
                  <div className="middle-icon-large-features-box f-light-warning">
                    <i className="ti-wand"></i>
                  </div>
                  <div className="middle-icon-features-content">
                    <h4 className="txt-black">Diseños geotécnicos</h4>
                    <p className="txt-black">
                      Donde se solucionan los incovenientes de estabilidad que
                      día a día se presentan en las obras, mediante alternativas
                      como anclajes, terrazas, muros de contención, MSR, entre
                      otros.
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
                  <div className="middle-icon-large-features-box f-light-warning">
                    <i className="ti-slice"></i>
                  </div>
                  <div className="middle-icon-features-content">
                    <h4 className="txt-black">Estudios de suelos</h4>
                    <p className="txt-black">
                      Donde se encuentran las soluciones más óptimas para las
                      cimentaciones de diferentes estructuras
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 text-center">
              <a
                className="btn btn-warning btn-lg btn-rounded"
                href="/servicios"
              >
                Ver más servicios<i className="ml-2 ti-arrow-right"></i>
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
