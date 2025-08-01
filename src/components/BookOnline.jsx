import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import AOS from 'aos';
import { FaCalendarAlt } from 'react-icons/fa';

const BookOnlineSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example: Send to WhatsApp
    const message = `New Appointment Request:%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0ADate: ${form.date}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/918547003873?text=${message}`, '_blank');

    // Clear form
    setForm({
      name: '',
      email: '',
      phone: '',
      date: '',
      message: '',
    });
  };

  return (
    <section className="py-5" id="book-online">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} data-aos="fade-up">
            <FaCalendarAlt className="text-success mb-3" size={40} />
            <h2 className="fw-bold">Online Consultation</h2>
            <p>Experience expert homeopathic care from the comfort of your home with our secure online consultation services. Whether you're across the city or in another country, our team is just a video call away.We offer consultations via popular platforms such as Zoom, Google Meet, and WhatsApp Video, ensuring flexible and confidential access to personalized treatment.</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <p className='text-muted text-center'>Fill out the form below for Online Consultation. We’ll get back to you shortly!</p>
          <Col md={10} lg={8}>
            <Form className="bg-white p-4 rounded shadow" onSubmit={handleSubmit} data-aos="fade-up">
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  value={form.name}
                  placeholder="Your Name"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  value={form.email}
                  placeholder="Email Address"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="phone"
                  value={form.phone}
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={form.message}
                  placeholder="Additional Message (Optional)"
                  onChange={handleChange}
                />
              </Form.Group>
              
               <button type="submit" className="btn btn-success rounded-pill px-4 shadow appointment-btn">
                APPOINTMENT NOW
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BookOnlineSection;
