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
                <h1>Geocol</h1>
                <p className="lead">
                  Especialistas en todo lo relacionado con geotecnía y asesoria
                  para demas servicios, ademas contamos con años de experiencia
                  en diferentes campos aportando a empresas nacionales
                </p>
                <div className="btn-sec">
                  <Link to="/empresa" className="btn-lg btn-success btn-rounded">
                    Saber más de Geocol
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </Layout>
  );
};

export default Inicio;
