// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img src="img/CalLans.JPG" alt="" width="60" height="40" className="d-inline-block align-text-top" /> Calvin Krisdianto
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link nvbar active" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nvbar" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nvbar" href="#skill">Tools&Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nvbar" href="#projects">Hobby</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nvbar" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
