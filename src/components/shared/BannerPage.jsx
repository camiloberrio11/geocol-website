import React from 'react';

const BannerPage = ({ titulo }) => {
  return (
    <>
      <div className="page-title-wrap pt-img-wrap backimg">
        <div className="container">
          <div className="col-lg-12 col-md-12">
            <div className="pt-caption text-center mt-5">
              <h1>{titulo}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default BannerPage;
