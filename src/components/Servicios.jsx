import React from 'react';
import Layout from './shared/Layout';

const Servicios = () => {
  return (
    <>
      <Layout>
        <div className="page-title-wrap pt-img-wrap backimg">
          <div className="container">
            <div className="col-lg-12 col-md-12">
              <div className="pt-caption text-center mt-5">
                <h1>Servicios</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 mb-4">
                <h2>Related Services</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div
                  className="large-features-2"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="large-features-2-item">
                    <div className="large-features-2-icon">
                      <img src="https://via.placeholder.com/300x300" alt="" />
                    </div>
                    <div className="large-features-2-content">
                      <h4>Market Analysis</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6">
                <div
                  className="large-features-2"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="large-features-2-item">
                    <div className="large-features-2-icon">
                      <img src="https://via.placeholder.com/300x300" alt="" />
                    </div>
                    <div className="large-features-2-content">
                      <h4>Email Marketing</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6">
                <div
                  className="large-features-2"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="large-features-2-item">
                    <div className="large-features-2-icon">
                      <img src="https://via.placeholder.com/300x300" alt="" />
                    </div>
                    <div className="large-features-2-content">
                      <h4>Off Page SEO</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="clearfix"></div>
      </Layout>
    </>
  );
};

export default Servicios;
