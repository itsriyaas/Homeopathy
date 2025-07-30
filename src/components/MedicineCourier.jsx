import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaTruck, FaHome, FaPhoneAlt } from 'react-icons/fa';
import AOS from 'aos';

const MedicineCourierSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5 bg-light" id="courier">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col lg={8} className="text-center" data-aos="fade-up">
            <h2 className="fw-bold mb-3">Homeopathic Medicine Courier</h2>
            <p className="text-muted">
              Get your prescribed homeopathic remedies delivered to your doorstep safely and quickly no matter where you are.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="shadow-lg border-0 rounded-4" data-aos="fade-up">
              <Row className="g-0 align-items-center">
                <Col md={5}>
                  <Card.Img
                    variant="top"
                    src="https://static.tildacdn.com/tild6331-3763-4635-b566-316437396438/noroot.png"
                    className="img-fluid rounded-start w-100 p-5"
                    style={{ objectFit: 'cover', height: '100%' }}
                    alt="Courier Delivery"
                  />
                </Col>
                <Col md={7}>
                  <Card.Body className="p-4">
                    <h4 className="fw-bold mb-3">Fast & Reliable Delivery</h4>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2"><FaTruck className="text-success me-2" /> Delivery across India</li>
                      <li className="mb-2"><FaHome className="text-success me-2" /> Doorstep service</li>
                      <li className="mb-2"><FaPhoneAlt className="text-success me-2" /> Order via WhatsApp / Call</li>
                    </ul>
                    <div>
                                <a href="https://api.whatsapp.com/send?phone=918547003873" target="_blank" rel="noopener noreferrer">
                                  <button className="btn btn-success rounded-pill px-4 shadow appointment-btn">
                                   Book Now on WhatsApp
                                  </button>
                                </a>
                              </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MedicineCourierSection;
