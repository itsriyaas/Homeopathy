import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import doctors from './Doctors';

const OurTeam = () => {
  return (
    <section className="py-5 bg-light" id="our-team">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Meet Our Team</h2>
          <p className="text-muted">Experienced and Compassionate Doctors</p>
        </div>

        <Row className="g-4 justify-content-center">
          {doctors.map((doctor, index) => (
            <Col key={index} sm={6} md={4} lg={3}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={doctor.image}
                  alt={doctor.name}
                  className="img-fluid"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center">
                  <Card.Title className="fw-semibold">{doctor.name}</Card.Title>
                  <Card.Text className="text-muted">{doctor.specialization}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurTeam;
