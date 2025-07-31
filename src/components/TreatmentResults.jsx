import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';

const beforeAfterData = [
  {
    id: 1,
    before: 'assets/results/result1.png',
    title: 'Thinning and patchy hair loss',
    description: 'Visible improvement in 3 months of homeopathic treatment.',
  },
  {
    id: 2,
    before: 'assets/results/result2.png',
    title: 'Chronic skin inflammation',
    description: 'Redness and flakiness significantly reduced.',
  },
  {
    id: 3,
    before: 'assets/results/result3.png',
    title: 'Lymphedema',
    description: 'Noticeable healing of inflamed skin.',
  },
];

const TreatmentResults = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5 bg-light" id="results">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold">Homeopathic Treatment Results</h2>
          <p className="text-muted">Before and After — Real Patient Recoveries</p>
        </div>

        <Row>
          {beforeAfterData.map((item) => (
            <Col md={6} lg={4} key={item.id} className="mb-4" data-aos="zoom-in">
              <Card className="border-0 shadow rounded-4 h-100">
                <Card.Body>
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <div className="d-flex gap-2 justify-content-between mb-3">
                    <div className="w-100">
                      <img
                        src={item.before}
                        alt="Before treatment"
                        className="img-fluid rounded"
                        style={{ height: '350px', width: '100%' }}
                      />
                    </div>
                  </div>
                  <p className="text-muted small">{item.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TreatmentResults;
