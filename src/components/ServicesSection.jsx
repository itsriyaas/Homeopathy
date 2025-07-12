import React, { useState } from 'react';
import 'aos/dist/aos.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHeartbeat, FaStethoscope, FaAllergies, FaUserMd, FaNotesMedical } from 'react-icons/fa';
import { RiMentalHealthFill } from 'react-icons/ri';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

const initialServices = [
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
  {
    title: 'Treatment of Anxiety and Depression',
    icon: <RiMentalHealthFill size={40} className="text-dark" />,
    description: 'Homeopathic care addressing the root causes of anxiety and depression to restore emotional balance.',
  },
];

const moreServices = [
  {
    title: 'Migraine & Headache Relief',
    icon: <FaStethoscope size={40} className="text-info" />,
    description: 'Targeted remedies for chronic headaches and migraines without side effects.',
  },
  {
    title: 'Allergy Management',
    icon: <FaAllergies size={40} className="text-success" />,
    description: 'Holistic approach to seasonal and food allergies using safe homeopathic solutions.',
  },
  {
    title: 'Pediatric Care',
    icon: <FaUserMd size={40} className="text-danger" />,
    description: 'Gentle and effective homeopathy for common childhood illnesses and disorders.',
  },
];

const ServicesSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="services-section py-5">
      <Container>
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold display-5">Our Services</h2>
          <p className="text-muted">Natural, safe and effective treatments tailored for your well-being</p>
        </div>

        <Row className="g-4">
          {initialServices.map((service, index) => (
            <Col key={index} xs={12} sm={6} md={4} data-aos="zoom-in">
              <Card className="h-100 text-center shadow-sm border-0 p-4">
                <div className="mb-3">{service.icon}</div>
                <Card.Title className="fw-bold">{service.title}</Card.Title>
                <Card.Text className="text-muted small">{service.description}</Card.Text>
              </Card>
            </Col>
          ))}

          {/* Conditionally show more services */}
          {showMore &&
            moreServices.map((service, index) => (
              <Col key={index} xs={12} sm={6} md={4} data-aos="zoom-in">
                <Card className="h-100 text-center shadow-sm border-0 p-4">
                  <div className="mb-3">{service.icon}</div>
                  <Card.Title className="fw-bold">{service.title}</Card.Title>
                  <Card.Text className="text-muted small">{service.description}</Card.Text>
                </Card>
              </Col>
            ))}
        </Row>

        {/* Toggle Button */}
        <div className="text-center fw-bold mt-5 text-secondary" style={{ cursor: 'pointer' }} onClick={() => setShowMore(!showMore)}>
          {showMore ? (
            <>
              View less services <SlArrowUp className="ms-2" />
            </>
          ) : (
            <>
              View more services <SlArrowDown className="ms-2" />
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
