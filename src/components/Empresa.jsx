import React from 'react';
import Layout from './shared/Layout';

const Empresa = () => {
  return (
    <>
      <Layout>
        <div
          className="page-title-wrap pt-img-wrap"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dupegtamn/image/upload/c_scale,h_900/v1607873917/geocol/notepad-691250_1920_b9zo2l.jpg')",
          }}
        >
          <div className="container">
            <div className="col-lg-12 col-md-12">
              <div className="pt-caption text-center mt-5">
                <h1>¿Quienes somos?</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="about-content">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio.{' '}
                  </p>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio.{' '}
                  </p>
                  <ul className="our-team-profile ts-light-bg">
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
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
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
