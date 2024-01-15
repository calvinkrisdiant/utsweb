// AboutSection.js
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row text-center mb-4">
          <div className="col" data-aos="fade-up">
            <h2 className="h2">About Me</h2>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-5 text-center mb-4" data-aos="fade-right" data-aos-duration="1000">
            <img className="mt-2 rounded pp" src="/images/CalLans.jpg" alt="Calvin" width="350" />
          </div>
          <div className="col-md-6 desc" data-aos="fade-left" data-aos-duration="2000">
            <p>Hi👋 Nama saya Calvin, saya seorang mahasiswa di salah satu universitas di Malang, Indonesia. Saya menyukai pemrograman dan berbagai macam teknologi terkini. Saya memiliki keinginan untuk terus belajar dan mengembangkan diri di dunia teknologi.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
