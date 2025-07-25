import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [expanded, setExpanded] = useState(false); // to control mobile collapse

  return (
    <>
      {/* Top Info Bar */}
      <div className="topbar d-flex justify-content-between align-items-center px-3 py-2 text-white flex-wrap">
        {/* Hidden on small screens */}
        <div className="d-none d-md-flex align-items-center gap-3">
          <a href='tel:04924246150' style={{textDecoration:'none'}}><span><FaPhoneAlt className="me-2" />04924 246 150</span></a>
          <a href='https://maps.app.goo.gl/ody6gV1iyVLr1LQo6' style={{textDecoration:'none'}} target='_blank'><span><FaMapMarkerAlt className="me-2" /> Kaipamangalam, Aravushala Rd, Moonnupeedika, Kerala 680681</span></a>
        </div>

        {/* Always Visible: Social */}
        <div className="d-flex align-items-center gap-3 mt-2 mt-md-0">
          <span>Follow Us On :</span>
          <a href="https://www.facebook.com/share/19PXDN4Miy/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/dr_aiswarya_pediatric_clinic" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>
      </div>

      {/* Main Navigation */}
      <Navbar expand="lg" className="bg-white py-3 shadow-sm" expanded={expanded}>
        <Container>
          <Navbar.Brand as={NavLink} to="/" onClick={() => setExpanded(false)}>
            <img src="logo.png" alt="logo" height="50" />
            <small className='fw-bold ms-2'>BodyMind Multispeciality Homoeopathy</small>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="gap-md-3 fw-bold">
              {['/', '/about-us', '/services','/blog', '/gallery', '/contact'].map((path, idx) => {
                const labels = ['HOME', 'ABOUT US', 'SERVICES','BLOG', 'GALLERY', 'CONTACT'];
                return (
                  <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'text-success' : 'text-dark'}`
                    }
                    onClick={() => setExpanded(false)}
                  >
                    {labels[idx]}
                  </NavLink>
                );
              })}
            </Nav>
          </Navbar.Collapse>

          {/* Appointment button (visible only on desktop) */}
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
