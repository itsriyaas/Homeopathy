import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaUser, FaChevronDown } from 'react-icons/fa';
import LocationsSection from './Locations';

const ContactUsSection = () => {
  return (
    <section className="container contact-section py-5 bg-white">
      <Container>
        <Row className="align-items-center g-5">
          {/* Contact Info & Social */}
          <Col lg={6}>
            <div className="links mb-4">
              <a href='https://maps.app.goo.gl/3CbZEcRXupegskwB9' target='_blank'><p className="mb-2"><FaMapMarkerAlt className="me-2 text-success" />Kaipamangalam - Aravushala Rd, Moonnupeedika, Kerala 680681</p></a>
              <a href='mailto:info@bodymindhomeopathy.com' target='_blank'><p className="mb-2"><FaEnvelope className="me-2 text-success" />info@bodymindhomeopathy.com</p></a>
              <a href='tel:04924246150' target='_blank'><p className="mb-4"><FaPhoneAlt className="me-2 text-success" />04924 246 150</p></a>
              <div className="d-flex gap-3">
                <a href="https://www.facebook.com/share/19PXDN4Miy/" target='_blank'><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="https://www.instagram.com/dr_aiswarya_pediatric_clinic" target='_blank'><FaInstagram /></a>
                <a href="#"><FaLinkedin /></a>
              </div>
            </div>
            <div className="bg-light p-4 rounded-4 shadow-sm">
              <h4 className="fw-bold mb-3">Get In Touch!</h4>
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Control type="text" placeholder="Phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="subject">
                  <Form.Select>
                    <option>Choose Subject</option>
                    <option>General Inquiry</option>
                    <option>Appointments</option>
                    <option>Feedback</option>
                  </Form.Select>
                </Form.Group>
                <Button variant="success" className="w-100 rounded-pill">Submit</Button>
              </Form>
            </div>
          </Col>

          {/* Image Right */}
          <Col lg={6} className="text-center">
            <LocationsSection/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUsSection;
