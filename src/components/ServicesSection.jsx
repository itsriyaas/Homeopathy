// ServicesSection.jsx
import React from 'react';
import 'aos/dist/aos.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHeartbeat, FaStethoscope, FaAllergies, FaUserMd, FaNotesMedical } from 'react-icons/fa';

const services = [
  {
    title: 'Treatment of Cancer',
    icon: <FaNotesMedical size={40} className="text-success" />,
    description: 'Integrative homeopathy care for various types of cancer using holistic, personalized approaches.',
  },
  {
    title: 'Gastrointestinal Disorders',
    icon: <FaStethoscope size={40} className="text-primary" />,
    description: 'Relief from acidity, IBS, ulcers, and digestive issues through targeted remedies.',
  },
  {
    title: 'Treatment of Psoriasis',
    icon: <FaAllergies size={40} className="text-danger" />,
    description: 'Homeopathic management for autoimmune skin conditions like psoriasis.',
  },
  {
    title: 'Acne Treatment',
    icon: <FaUserMd size={40} className="text-warning" />,
    description: 'Personalized acne care rooted in internal healing, not just surface treatment.',
  },
  {
    title: 'Treatment of Erectile Dysfunction',
    icon: <FaHeartbeat size={40} className="text-dark" />,
    description: 'Safe, side-effect-free solutions for male sexual health and performance.',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section py-5">
      <Container>
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold display-5">Our Services</h2>
          <p className="text-muted">Natural, safe and effective treatments tailored for your well-being</p>
        </div>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} xs={12} sm={6} md={4} data-aos="zoom-in">
              <Card className="h-100 text-center shadow-sm border-0 p-4">
                <div className="mb-3">{service.icon}</div>
                <Card.Title className="fw-bold">{service.title}</Card.Title>
                <Card.Text className="text-muted small">{service.description}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
