import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Text Content */}
          <div className="col-md-6">
            <p className="text-uppercase text-muted small fw-semibold mb-2">
              Healing Beyond Symptoms
            </p>
            <h1 className="display-5 fw-bold">
              Kerala's <span className="highlight-green">Best</span><br /> Homeopathic Research Centre
            </h1>
            <p className="mt-3 text-muted">
              Body Mind Homoeopathic Research Centre, we believe true healing goes beyond physical ailments it encompasses the body, mind, and soul. Our center is founded on the principles of classical homoeopathy, with a strong focus on individualized care, scientific research, and holistic well-being.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4 justify-content-center justify-content-md-start">
              <Link to={'/about-us'} className="btn btn-success rounded-pill px-4 py-2">Discover More</Link>
              <Link to={'/services'} className="btn btn-primary rounded-pill px-4 py-2">See All Services</Link>
            </div>
          </div>

          {/* Image */}
          <div className="col-md-6 text-center mt-5 mt-md-0 position-relative">
            <img
              src="assets/doctors/drpairs.png"
              alt="Doctors"
              className="img-fluid hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
