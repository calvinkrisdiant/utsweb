import React from 'react';

const Hobby = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="row text-center mb-4">
          <div className="col" data-aos="fade-up">
            <h2 className="h2">Hobby</h2>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-3 mb-3" data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="card card-projects">
              <img src="img/Hobby/Kumbolo.jpg" className="card-img-top" alt="Photography" />
              <div className="card-body">
                <div className="mt-2 mb-2">
                </div>
                <h5 className="card-title text-center">Photography</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="150">
            <div className="card card-projects">
              <img src="img/Hobby/Futsal.jpg" className="card-img-top" alt="Futsal" />
              <div className="card-body">
                <div className="mt-2 mb-2">
                </div>
                <h5 className="card-title text-center">Futsal</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300">
            <div className="card card-projects">
              <img src="img/Hobby/Culinary.jpg" className="card-img-top" alt="Culinary" />
              <div className="card-body">
                <div className="mt-2 mb-2">
                </div>
                <h5 className="card-title text-center">Culinary</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#192734" fill-opacity="1" d="M0,288L0,96L110.8,96L110.8,256L221.5,256L221.5,192L332.3,192L332.3,160L443.1,160L443.1,224L553.8,224L553.8,288L664.6,288L664.6,64L775.4,64L775.4,128L886.2,128L886.2,96L996.9,96L996.9,288L1107.7,288L1107.7,192L1218.5,192L1218.5,256L1329.2,256L1329.2,96L1440,96L1440,320L1329.2,320L1329.2,320L1218.5,320L1218.5,320L1107.7,320L1107.7,320L996.9,320L996.9,320L886.2,320L886.2,320L775.4,320L775.4,320L664.6,320L664.6,320L553.8,320L553.8,320L443.1,320L443.1,320L332.3,320L332.3,320L221.5,320L221.5,320L110.8,320L110.8,320L0,320L0,320Z"></path></svg>
    </section>
  );
}

export default Hobby;
