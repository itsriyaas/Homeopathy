import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3">
      <Container>
        <Row className="gy-4">
          {/* Logo & Address */}
          <Col md={4}>
            <img src="logo_homeopathy.png" alt="Logo" height="150" className="mb-3" />
            <p><FaMapMarkerAlt className="me-2" /> Kaipamangalam - Aravushala Rd, Moonnupeedika, Kerala 680681</p>
            <p><FaEnvelope className="me-2" /> info@bodymindhomeopathy.com</p>
            <p><FaPhoneAlt className="me-2" /> 04924 246 150</p>
          </Col>

          {/* Navigation */}
          <Col md={4}>
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to={'/'} className="text-white text-decoration-none">Home</Link></li>
              <li><Link to={'/about-us'} className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to={'/services'} className="text-white text-decoration-none">Services</Link></li>
              <li><Link to={'/blog'} className="text-white text-decoration-none">Blog</Link></li>
              <li><Link to={'/gallery'} className="text-white text-decoration-none">Gallery</Link></li>
              <li><Link to={'/contact'} className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </Col>

          {/* Social Links */}
          <Col md={4}>
            <h5 className="mb-3">Connect With Us</h5>
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com/share/19PXDN4Miy/" target='_blank' className="text-white fs-5"><FaFacebookF /></a>
              <a href="https://www.instagram.com/dr_aiswarya_pediatric_clinic" target='_blank' className="text-white fs-5"><FaInstagram /></a>
              <a href="https://www.youtube.com/@BodyMindHomoeopathy" target='_blank' className="text-white fs-5"><FaYoutube /></a>
              <a href="https://api.whatsapp.com/send?phone=918547003873" target='_blank' className="text-white fs-5"><FaWhatsapp /></a>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <hr className="my-4 border-light" />
        <p className="text-center mb-0 small">&copy; {new Date().getFullYear()} Body Mind Multispeciality Homoeopathic Clinic. All rights reserved.</p>
        <p className="text-center mb-0 small">Designed by <a href='https://www.theaitsolutions.net/' id='copyright' target='_blank'>Thea IT Solutions</a></p>
      </Container>
    </footer>
  );
};

export default Footer;
