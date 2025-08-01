import React, { useState } from 'react';
import 'aos/dist/aos.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHeartbeat, FaStethoscope, FaAllergies, FaUserMd, FaNotesMedical } from 'react-icons/fa';
import { RiMentalHealthFill } from 'react-icons/ri';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

const initialServices = [
  {
    title: 'Allergy & Asthma',
    icon: <FaAllergies size={40} className="text-success" />,
    description: 'Effective, permanent cure of respiratory allergies, asthma, and sinusitis without steroids',
  },
  
  {
    title: 'Gastrointestinal Disorders',
    icon: <FaStethoscope size={40} className="text-primary" />,
    description: 'Treatment for IBS, acidity, ulcers, constipation, and indigestion using individualized remedies.',
  },
  {
    title: 'Skin Diseases',
    icon: <FaAllergies size={40} className="text-danger" />,
    description: 'Homeopathy offers lasting relief for eczema, psoriasis, urticaria, acne, and fungal infections.',
  },
    {
    title: 'Pediatric Disorders',
    icon: <FaUserMd size={40} className="text-danger" />,
    description: 'Gentle and safe treatment for childhood issues including ADHD, autism and recurrent infections.',
  },
 
  {
    title: 'Menstrual & Hormonal Disorders',
    icon: <FaHeartbeat size={40} className="text-dark" />,
    description: 'Natural regulation of PCOS, thyroid imbalances, menstrual irregularities, and menopause symptoms.',
  },
  {
    title: 'Treatment of Anxiety and Depression',
    icon: <RiMentalHealthFill size={40} className="text-dark" />,
    description: 'Emotional healing through deep-acting constitutional remedies for mental wellness.',
  },
];

const moreServices = [
  {
    title: 'Migraine & Headache',
    icon: <FaStethoscope size={40} className="text-info" />,
    description: 'Targeted remedies for chronic migraine, tension headaches, and stress-related head pain.',
  },
  {
    title: 'Arthritis & Joint Pain',
    icon: <FaNotesMedical size={40} className="text-success" />,
    description: 'Relief from osteoarthritis, rheumatoid arthritis, back pain, and spondylitis without side effects.',
  },
 {
    title: 'Hair & Scalp Problems',
    icon: <FaUserMd size={40} className="text-warning" />,
    description: 'Holistic solutions for hair fall, dandruff, alopecia areata, and premature greying.',
  },
];

const ServicesSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="services-section py-5">
      <Container>
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold display-5">Our Specialization</h2>
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
