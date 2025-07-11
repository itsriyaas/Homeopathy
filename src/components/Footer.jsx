import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3">
      <Container>
        <Row className="gy-4">
          {/* Logo & Address */}
          <Col md={4}>
            <img src="logo.png" alt="Logo" height="50" className="mb-3" />
            <p><FaMapMarkerAlt className="me-2" /> Kalladikode, Karimba South, Kerala 678596</p>
            <p><FaEnvelope className="me-2" /> info@bodymindhomeopathy.com</p>
            <p><FaPhoneAlt className="me-2" /> 04924 246 150</p>
          </Col>

          {/* Navigation */}
          <Col md={4}>
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Social Links */}
          <Col md={4}>
            <h5 className="mb-3">Connect With Us</h5>
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com/share/19PXDN4Miy/" target='_blank' className="text-white fs-5"><FaFacebookF /></a>
              <a href="https://www.instagram.com/dr_aiswarya_pediatric_clinic" target='_blank' className="text-white fs-5"><FaInstagram /></a>
              <a href="#" className="text-white fs-5"><FaYoutube /></a>
              <a href="#" className="text-white fs-5"><FaWhatsapp /></a>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <hr className="my-4 border-light" />
        <p className="text-center mb-0 small">&copy; {new Date().getFullYear()} Body Mind Homoeopathic Research Centre. All rights reserved.</p>
        <p className="text-center mb-0 small">Designed by <a href='https://www.theaitsolutions.net/' id='copyright' target='_blank'>Thea IT Solutions</a></p>
      </Container>
    </footer>
  );
};

export default Footer;
