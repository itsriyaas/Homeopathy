import React from 'react';
import { useParams } from 'react-router-dom';
import doctorsData from '../components/DoctorsData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FaqSection from './FaqDoc1'; // FAQ for Dr. Aiswarya
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Testimonials from './Testimonials';
import { Card, Col, Container, Row } from 'react-bootstrap';

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctorsData.find((doc) => doc.id === id);

  React.useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  if (!doctor) {
    return (
      <div className="container py-5 text-center">
        <h2 className='fw-bold mt-5'>Doctor not found !</h2>
      </div>
    );
  }
  const clinics = [
    {
    location: 'Dr. Aiswarya M S Multispeciality Homeopathic Clinic',
    description: 'Located at opposite National school, Irinjalakuda, Kerala 680121',
     time:'Monday - Saturday',
    doctors:'Dr. Aiswarya M.S',
    map:'https://maps.app.goo.gl/b8MA47m9kfnrkPjX8',
    url:'tel:918547029080'
  },
  {
    location: 'Body Mind Multispeciality Homoeopathic Clinic',
    description: 'Located Near HPCL Petrol pump, Moonnupeedika, Kerala 680681',
     time:'Monday - Saturday',
    doctors:'Dr. B. Suresh Kumar, Dr. Aiswarya M.S',
    map:'https://maps.app.goo.gl/uhdVP7aMXd1QUXCYA',
    url:'tel:919349021110'
  }
  ]

  const clinics2 = [
    {
    location: 'Body Mind Multispeciality Homoeopathic Clinic, Since 1990',
    description: 'Located near Mother Hospital, Olari, Thrissur 680003',
    time:'Monday - Saturday',
    doctors:'Dr. B. Suresh Kumar, Dr Praveen Dharma rathnam D.H.M.S, Dr. Sheneefa BHMS',
    map:'https://maps.app.goo.gl/p3DgEHTck3wkc2oA9',
    url:'tel:919072392110'

  },{
    location: 'Body Mind Multispeciality Homoeopathic Clinic',
    description: 'Located at Moonnupeedika, Kerala 680681',
     time:'Monday - Saturday',
    doctors:'Dr. B. Suresh Kumar, Dr. Aiswarya M.S',
    map:'https://maps.app.goo.gl/uhdVP7aMXd1QUXCYA',
    url:'tel:919349021110'
  },
  {
    location: 'Body Mind Multispeciality Homoeopathic Clinic',
    description: 'Located at Kalladikode, Karimba South, Kerala 678596',
     time:'Monday - Saturday',
    doctors:'Dr. B. Suresh Kumar',
    map:'https://maps.app.goo.gl/i3731CDDYq5Jsdb89',
    url:'tel:919387836559'
  },
  {
    location: 'Body Mind Multispeciality Homoeopathic Clinic',
    description: 'Located at KNP Puram, Odakkadu, Tiruppur, Tamil Nadu 641687',
     time:'Monday - Saturday',
    doctors:'Dr. B. Suresh Kumar,  Dr Sameena. BHMS',
    map:'https://maps.app.goo.gl/Zc6xXtVpCvkvkmzs6',
    url:'tel:916238592169'
  },
  ]

  return (
    <section className="container py-5 doctor-profile-section bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold" data-aos="fade-down">{doctor.name}</h1>
          <p className="text-muted" data-aos="fade-up">{doctor.qualifications}</p>
        </div>

        <div className="row align-items-start g-5">
          <div className="col-md-4 text-center" data-aos="fade-right">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="img-fluid rounded shadow"
              style={{ maxHeight: '450px', objectFit: 'cover' }}
            />
          </div>

          <div className="col-md-8" data-aos="fade-right">
            {id === 'aiswarya' && (<h5 className='fw-bold'>Dr. Aiswarya M.S</h5>)}
            {id === 'aiswarya' && (<p className='fw-bold text-muted'>Homoeopathic Pediatrician | Researcher</p>)}
            {id === 'sureshkumar' &&(<h5 className='fw-bold'>Dr. B. Suresh Kumar</h5>)}
            {id === 'sureshkumar' && (<p className='fw-bold text-muted'>Founder, Senior Homeopathic Physician</p>)}
            <p>{doctor.description}</p>

            <h5 className="mt-4 fw-bold">Specializations :</h5>
            <ul>
              {doctor.specializations.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>

            <h5 className="mt-4 fw-bold">Recognitions & Memberships</h5>
            <ul>
              {doctor.recognitions.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
            {id === 'aiswarya' && (<h5 className="mt-4 fw-bold">Research & Publications</h5>)}
             { id === 'aiswarya' && (<p>She is an avid writer and has published several articles in reputed pediatric journals, including:</p>)}
            <ul>
              {doctor.publications.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>
          {/* Why Choose Us Section */}
          {id === 'aiswarya' && (<div className="mt-5" data-aos="fade-up">
            <h2 className="fw-bold">Why Choose Us</h2>
            <ul>
              <li>Child-centered homeopathic approach</li>
              <li>Deep expertise in pediatric disorders</li>
              <li>Emphasis on long-term well-being and development</li>
              <li>Warm, supportive environment for both children and parents</li>
            </ul>
          </div>)}


        </div>

        <div className="mt-5">
          <h2 className='fw-bold'>Contact & Appointments:</h2>
          { id === 'aiswarya' && (
            <Container>
              <Row className="g-4">
          {clinics.map((clinics, index) => (
            <Col key={index} xs={12} sm={6} md={4} data-aos="zoom-in">
              <Card className="h-100 text-center shadow-sm border-0 p-4">
                <Card.Title className="fw-bold">{clinics.location}</Card.Title>
                <Card.Text className="text-muted small">{clinics.description}</Card.Text>
                <Card.Text className="text-muted small">{clinics.time}</Card.Text>
                <a href={clinics.map} target='_blank' className="btn btn-outline-primary rounded-pill px-4 py-2">GET DIRECTIONS</a>
                <a href={clinics.url} className="btn btn-outline-success rounded-pill px-4 py-2 mt-3">BOOK APPOINTMENT</a>
              </Card>
            </Col>
          ))}
        </Row>
            </Container>
          )}

           { id === 'sureshkumar' && (<Container>
              <Row className="g-4">
          {clinics2.map((clinics2, index) => (
            <Col key={index} xs={12} sm={6} md={4} data-aos="zoom-in">
              <Card className="h-100 text-center shadow-sm border-0 p-4">
                <Card.Title className="fw-bold">{clinics2.location}</Card.Title>
                <Card.Text className="text-muted small">{clinics2.description}</Card.Text>
                <Card.Text className="text-muted small">{clinics2.time}</Card.Text>
                <a href={clinics2.map} target='_blank' className="btn btn-outline-primary rounded-pill px-4 py-2">GET DIRECTIONS</a>
                <a href={clinics2.url} className="btn btn-outline-success rounded-pill px-4 py-2 mt-3">BOOK APPOINTMENT</a>
              </Card>
            </Col>
          ))}
        </Row>
            </Container>)}
        </div>

         <div className="mt-5 mb-5">
          <h2 className='fw-bold'>Follow Us :</h2>
          { id === 'aiswarya' && (
            <div className='social d-flex'><a href='https://www.instagram.com/dr_aiswarya_pediatric_clinic' target='_blank'><FaInstagram color='red' className='me-2 fs-3' /></a>
            <a href=''><FaFacebook color='#4267B2' className='fs-3'/></a>
            </div>
          )}
          { id === 'sureshkumar' && (
            <div className='social d-flex'>
            <a href='https://www.facebook.com/BMHRC' target='_blank'><FaFacebook color='#4267B2' className='fs-3'/></a>
            </div>
          )}
        </div>

        {/* Show FAQ only for Dr. Aiswarya */}
        {id === 'aiswarya' && (
          <div className="mt-5">
            <FaqSection />
          </div>
        )}
        <Testimonials />
      </div>
    </section>
  );
};

export default DoctorProfile;
