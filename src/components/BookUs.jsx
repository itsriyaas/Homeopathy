import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    date: '',
    time: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Please fill out this field.";
    if (!formData.email) newErrors.email = "Please fill out this field.";
    if (!formData.phone) newErrors.phone = "Please fill out this field.";
    if (!formData.department) newErrors.department = "Please select a department.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert('Appointment Submitted!');
    }
  };

  return (
    <section className="appointment-section py-5 bg-light">
      <div className="container">
        <Row className="g-5 align-items-center">
          {/* Left Side */}
          <Col lg={6}>
            <div className="mb-4">
              <div className="working-hours-card text-white p-4 rounded" style={{ background: '#2a5cff' }}>
                <h5 className="fw-bold mb-3">Working Hours</h5>
                <hr className="text-white" />
                <p className="mb-1">Monday - Saturday: <strong>3 pm - 7 pm</strong></p>
                <p>Sunday: <strong>3 pm - 6:30 pm</strong></p>
              </div>
            </div>
          </Col>

          {/* Right Side */}
          <Col lg={6}>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="fw-bold mb-4 text-dark">Book An Appointment</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="text-danger small">{errors.name}</div>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="text-danger small">{errors.email}</div>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <div className="text-danger small">{errors.phone}</div>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                  >
                    <option value="">Choose Department</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Homeopathy">Homeopathy</option>
                  </Form.Select>
                  {errors.department && <div className="text-danger small">{errors.department}</div>}
                </Form.Group>

                <Row className="g-3">
                  <Col>
                    <Form.Control
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Button
                  type="submit"
                  className="mt-4 w-100 rounded-pill fw-bold"
                  style={{
                    background: 'linear-gradient(to right, #00e676, #00bfa5)',
                    border: 'none',
                  }}
                >
                  BOOK AN APPOINTMENT
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default BookAppointment;
