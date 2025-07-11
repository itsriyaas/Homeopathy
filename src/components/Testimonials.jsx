import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'aos/dist/aos.css';
import AOS from 'aos';

const testimonials = [
  {
    name: 'Raja partheeban',
    message: 'We are truly grateful to have found such a compassionate and skilled pediatrician. Dr.Aiswarya has been a blessing in our childs healing journey. From frequent coughs, allergies, and skin rashes to adenoids that were once advised for surgery all were beautifully managed and cured through her homeopathic treatment. Her approach is holistic, child-friendly, and deeply reassuring for parents. ',
   
  },
  {
    name: 'Kavya Sasikumar',
    message: 'I am very happy with Aiswaryas Homeopathic Clinic. My son experienced significant relief from his allergy after receiving treatment here. We are very comfortable with the doctor, she is extremely cooperative and supportive.',
    
  },
  {
    name: 'Angel Chan',
    message: 'My son had severe eczema. When all the doctors were at their wits end, Dr. Kumar lent a helping hand. He is a very experienced and kind doctor. I am so happy to see him, my baby is healed',
   
  },
];

const Testimonials = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="testimonial-section py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold" data-aos="fade-down">What Our Patients Say</h2>
          <p className="text-muted" data-aos="fade-up">Real stories from people we've had the pleasure to help heal.</p>
        </div>
        <Row className="g-4">
          {testimonials.map((t, index) => (
            <Col md={6} lg={4} key={index} data-aos="fade-up">
              <Card className="h-100 shadow-sm border-0 rounded-4">
                <Card.Body className="p-4 d-flex flex-column justify-content-between">
                  <div className="mb-3">
                    <p className="text-muted fst-italic">“{t.message}”</p>
                  </div>
                  <div className="d-flex align-items-center gap-3 mt-auto">
                    <h6 className="mb-0 fw-semibold">{t.name}</h6>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
