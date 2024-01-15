// SkillSection.js
import React from 'react';

const SkillSection = () => {
  return (
    <section id="skill">
      <div className="container">
        <div className="row text-center mb-4">
          <div className="col" data-aos="fade-up">
            <h2 className="h2">Tools & Skills</h2>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-md-3 text-center" data-aos="zoom-in" data-aos-duration="1000">
            <i className="fab fa-html5 fa-5x mb-3"></i>
            <h3>HTML</h3>
          </div>
          <div className="col-md-3 text-center" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
            <i className="fab fa-css3-alt fa-5x mb-3"></i>
            <h3>CSS</h3>
          </div>
          <div className="col-md-3 text-center" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
            <i className="fab fa-js-square fa-5x mb-3"></i>
            <h3>JavaScript</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
