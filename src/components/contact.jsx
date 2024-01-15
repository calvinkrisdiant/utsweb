import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container" data-aos="fade-down" data-aos-duration="1500">
        <div className="row text-center mb-4">
          <div className="col">
            <h2 className="h2">Contact Me</h2>
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-md-6">
            <div className="alert alert-dark alert-dismissible fade show d-none my-alert" role="alert">
              <strong>Terima Kasih!</strong> Pesan anda sudah saya terima.
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <form name="submit-to-google-sheet">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nama Lengkap</label>
                <input type="text" className="form-control" id="name" aria-describedby="Name" name="nama" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" aria-describedby="email" name="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="Pesan" className="form-label">Pesan</label>
                <textarea className="form-control" id="Pesan" rows="3" name="pesan" required></textarea>
              </div>
              <button type="submit" className="btn btn-secondary btn-kirim">Kirim</button>

              <button className="btn btn-dark btn-loading d-none" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </button>
            </form>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#192734" fill-opacity="1" d="M0,288L0,96L110.8,96L110.8,256L221.5,256L221.5,192L332.3,192L332.3,160L443.1,160L443.1,224L553.8,224L553.8,288L664.6,288L664.6,64L775.4,64L775.4,128L886.2,128L886.2,96L996.9,96L996.9,288L1107.7,288L1107.7,192L1218.5,192L1218.5,256L1329.2,256L1329.2,96L1440,96L1440,320L1329.2,320L1329.2,320L1218.5,320L1218.5,320L1107.7,320L1107.7,320L996.9,320L996.9,320L886.2,320L886.2,320L775.4,320L775.4,320L664.6,320L664.6,320L553.8,320L553.8,320L443.1,320L443.1,320L332.3,320L332.3,320L221.5,320L221.5,320L110.8,320L110.8,320L0,320L0,320Z"></path></svg>
    </section>
  );
}

export default Contact;
