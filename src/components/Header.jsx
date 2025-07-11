import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
      {/* Top Info Bar */}
      <div className="topbar d-flex justify-content-between align-items-center px-3 py-2 text-white flex-wrap">
  {/* Phone & Location - Hidden on small screens */}
  <div className="d-none d-md-flex align-items-center gap-3">
    <span><FaPhoneAlt className="me-2" />04924 246 150</span>
    <span><FaMapMarkerAlt className="me-2" /> Kalladikode, Karimba South, Kerala 678596</span>
  </div>

  {/* Follow Us - Always visible */}
  <div className="d-flex align-items-center gap-3 mt-2 mt-md-0">
    <span>Follow Us On :</span>
    <a href="https://www.facebook.com/share/19PXDN4Miy/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
    <a href="https://www.instagram.com/dr_aiswarya_pediatric_clinic" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    <a href="#"><FaYoutube /></a>
    <a href="#"><FaWhatsapp /></a>
  </div>
</div>


      {/* Main Navigation */}
      <Navbar expand="lg" className="bg-white py-3 shadow-sm">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand as={Link} to="/">
            <img src="logo.png" alt="Body Mind Homeopathy" height="50" />
            <small className='fw-bold'>Body Mind Homoeopathy</small>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="gap-3 fw-bold">
              <Nav.Link as={Link} to="/">HOME</Nav.Link>
              <Nav.Link as={Link} to="/about-us">ABOUT US</Nav.Link>
              <Nav.Link as={Link} to="/services">SERVICES</Nav.Link>
              <Nav.Link as={Link} to="/gallery">GALLERY</Nav.Link>
              <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="d-none d-lg-block">
            <a href="https://api.whatsapp.com/send?phone=918547003873" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-success rounded-pill px-4 shadow appointment-btn">
                APPOINTMENT NOW
              </button>
            </a>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
