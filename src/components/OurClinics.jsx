// ServicesSection.jsx
import React from 'react';
import 'aos/dist/aos.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHeartbeat, FaStethoscope, FaAllergies, FaUserMd, FaNotesMedical } from 'react-icons/fa';

const clinics = [
  {
    location: 'Body Mind Homoeopathic Research Centre, Since 1990',
    description: 'Located near Mother Hospital, Olari, Thrissur 680003',
    time:'Monday - Saturday',
    doctors:'Dr. B. Suresh Kumar, Dr. Aiswarya M.S',
    map:'https://maps.app.goo.gl/p3DgEHTck3wkc2oA9',
    url:'tel:919349021110'

  },
  {
    location: 'Body Mind Homoeopathic Research Centre',
    description: 'Located at Moonnupeedika, Kerala 680681',
     time:'Monday - Saturday',
    doctors:'Dr. B. Suresh Kumar, Dr. Aiswarya M.S',
    map:'https://maps.app.goo.gl/uhdVP7aMXd1QUXCYA',
    url:'tel:919349021110'
  },
  {
    location: 'Body Mind Homoeopathic Research Centre',
    description: 'Located at Kalladikode, Karimba South, Kerala 678596',
     time:'Monday - Saturday',
    doctors:'Dr. B. Suresh Kumar',
    map:'https://maps.app.goo.gl/i3731CDDYq5Jsdb89',
    url:'tel:919339021110'
  },
  {
    location: 'Dr. Aiswarya M S Homeopathic Clinic',
    description: 'Located at Aravushala Rd, Moonnupeedika, Kerala 680681',
     time:'Monday - Saturday',
    doctors:'Dr. Aiswarya M.S',
    map:'https://maps.app.goo.gl/m6Hm33grUN846L3c8',
    url:'tel:918547003873'
  },
  {
    location: 'Dr. Aiswarya M S Homeopathic Clinic',
    description: 'Located at opposite National school, Irinjalakuda, Kerala 680121',
     time:'Monday - Saturday',
    doctors:'Dr. Aiswarya M.S',
    map:'https://maps.app.goo.gl/b8MA47m9kfnrkPjX8',
    url:'tel:918547029080'
  },
   {
    location: 'Body Mind Homoeopathic Research Centre',
    description: 'Located at KNP Puram, Odakkadu, Tiruppur, Tamil Nadu 641687',
     time:'Monday - Saturday',
    doctors:'Dr. B. Suresh Kumar',
    map:'https://maps.app.goo.gl/Zc6xXtVpCvkvkmzs6',
    url:'tel:919349021110'
  },
];

const OurClinics = () => {
  return (
    <section className="services-section py-5 bg-light">
      <Container>
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold display-5">Our Clinics</h2>
          <p className="text-muted">Our Clinics deliver expert care with a human touch. Modern facilities, compassionate professionals, and personalized treatment</p>
        </div>

        <Row className="g-4">
          {clinics.map((clinics, index) => (
            <Col key={index} xs={12} sm={6} md={4} data-aos="zoom-in">
              <Card className="h-100 text-center shadow-sm border-0 p-4">
                <Card.Title className="fw-bold">{clinics.location}</Card.Title>
                <Card.Text className="text-muted small">{clinics.description}</Card.Text>
                <Card.Text className="text-muted small">{clinics.time}</Card.Text>
                <Card.Text className="text-muted">{clinics.doctors}</Card.Text>
                <a href={clinics.map} target='_blank' className="btn btn-primary rounded-pill px-4 py-2">GET DIRECTIONS</a>
                <a href={clinics.url} className="btn btn-success rounded-pill px-4 py-2 mt-3">BOOK APPOINTMENT</a>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurClinics;
