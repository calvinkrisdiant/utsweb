// HelloSection.js
import React from 'react';

const HelloSection = () => {
  return (
    <section id="hello">
      <div className="jumbotron">
        <div className="container">
          <div className="row justify-content-around mb-5">
            <div className="col-md-4 mb-5 mt-5">
              <h1 className="helo"></h1>
              <h2 className="nama"></h2>
              <p className="alamat"></p>
              <div className="sosial-media d-flex">
                <a href="https://github.com/calvinkrisdiant" className="github" target="_blank"><h2><i className="bi bi-github"></i></h2></a>
                <a href="https://www.facebook.com/kelpan.kelpon/" target="_blank"><h2><i className="bi bi-facebook"></i></h2></a>
                <a href="https://www.instagram.com/calvin.krisdiant/" target="_blank"><h2><i className="fab fa-instagram"></i></h2></a>
                <a href="https://www.linkedin.com/in/muhammad-calvin-krisdianto-959841190/" target="_blank"><h2><i className="bi bi-linkedin"></i></h2></a>
                <a href="#"><h2><i className="fab fa-twitter"></i></h2></a>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="penghalang"></div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#22303c" fillOpacity="1" d="M0,288L0,96L110.8,96L110.8,256L221.5,256L221.5,192L332.3,192L332.3,160L443.1,160L443.1,224L553.8,224L553.8,288L664.6,288L664.6,64L775.4,64L775.4,128L886.2,128L886.2,96L996.9,96L996.9,288L1107.7,288L1107.7,192L1218.5,192L1218.5,256L1329.2,256L1329.2,96L1440,96L1440,320L1329.2,320L1329.2,320L1218.5,320L1218.5,320L1107.7,320L1107.7,320L996.9,320L996.9,320L886.2,320L886.2,320L775.4,320L775.4,320L664.6,320L664.6,320L553.8,320L553.8,320L443.1,320L443.1,320L332.3,320L332.3,320L221.5,320L221.5,320L110.8,320L110.8,320L0,320L0,320Z"></path></svg>
    </section>
  );
}

export default HelloSection;
