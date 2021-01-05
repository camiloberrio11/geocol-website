import React from 'react';
import BannerPage from './shared/BannerPage';
import Layout from './shared/Layout';

const Servicios = () => {
  return (
    <>
      <Layout>
        <BannerPage titulo="Servicios" />
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
                      <img
                        src="https://res.cloudinary.com/dupegtamn/image/upload/c_scale,h_300,w_300/v1607885938/geocol/logoservices1_ks9dz9.jpg"
                        alt="geotecnia"
                      />
                    </div>
                    <div className="large-features-2-content">
                      <h4 className="txt-black">
                        Construcción de obras geotécnicas
                      </h4>
                      {/* <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered.
                      </p> */}
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
                      <img
                        src="https://res.cloudinary.com/dupegtamn/image/upload/c_scale,h_300,w_300/v1607886082/geocol/logoservices2_u0utga.jpg"
                        alt=""
                      />
                    </div>
                    <div className="large-features-2-content">
                      <h4 className="txt-black">
                        Líneas de refracción sísmica
                      </h4>
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
                      <img
                        src="https://res.cloudinary.com/dupegtamn/image/upload/c_scale,h_300,w_300/v1609857477/geocol/anclajes_nrbt7k.jpg"
                        alt=""
                      />
                    </div>
                    <div className="large-features-2-content">
                      <h4 className="txt-black">Perforaciones para anclajes</h4>
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
                      <img
                        src="https://res.cloudinary.com/dupegtamn/image/upload/c_scale,h_300,w_300/v1609857117/geocol/lava-571426_1920_reziwu.jpg"
                        alt=""
                      />
                    </div>
                    <div className="large-features-2-content">
                      <h4 className="txt-black">Perforaciones para drenes</h4>
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
                      <img
                        src="https://res.cloudinary.com/dupegtamn/image/upload/c_scale,h_300,w_300/v1609857426/geocol/muestras_oovpej.jpg"
                        alt=""
                      />
                    </div>
                    <div className="large-features-2-content">
                      <h4 className="txt-black">Toma de muestras</h4>
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
                      <img
                        src="https://res.cloudinary.com/dupegtamn/image/upload/c_scale,h_300,w_300/v1609857220/geocol/jar-1825274_640_r0fugh.jpg"
                        alt=""
                      />
                    </div>
                    <div className="large-features-2-content">
                      <h4 className="txt-black">Ensayos de laboratorio</h4>
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
