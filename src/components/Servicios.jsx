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
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div
                  className="large-features-2"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="large-features-2-item">
                    <div className="large-features-2-icon">
                      <img src="https://res.cloudinary.com/dupegtamn/image/upload/c_scale,h_300,w_300/v1607885938/geocol/logoservices1_ks9dz9.jpg" alt="geotecnia" />
                    </div>
                    <div className="large-features-2-content">
                      <h4 className="txt-black">Geotecnia</h4>
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
                      <img src="https://res.cloudinary.com/dupegtamn/image/upload/c_scale,h_300,w_300/v1607886082/geocol/logoservices2_u0utga.jpg" alt="" />
                    </div>
                    <div className="large-features-2-content">
                      <h4 className="txt-black">Perforaciones</h4>
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
                      <img src="https://res.cloudinary.com/dupegtamn/image/upload/c_scale,h_300,w_300/v1607886148/geocol/logoservices3_oycjn3.jpg" alt="" />
                    </div>
                    <div className="large-features-2-content">
                      <h4 className="txt-black">Diseños geotecnicos</h4>
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
