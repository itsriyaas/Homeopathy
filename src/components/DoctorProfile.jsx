import React from 'react';
import { useParams } from 'react-router-dom';
import doctorsData from '../components/DoctorsData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FaqSection from './FaqDoc1'; // FAQ for Dr. Aiswarya
import { FaFacebook, FaInstagram } from 'react-icons/fa';

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
            <p>{doctor.description}</p>

            <h5 className="mt-4 fw-bold">Specializations :</h5>
            <ul>
              {doctor.specializations.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>

            <h5 className="mt-4">Recognitions & Memberships</h5>
            <ul>
              {doctor.recognitions.map((rec, index) => (
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
          { id === 'aiswarya' && (<p><strong>Dr Aiswarya Pediatric Homeo clinic</strong> <br /> Irinjalakuda,Thrissur
            Branch-kaipamangalam, moonupeedika <br />
            <span><span style={{color:"black",fontWeight:"bold"}}>Booking :</span> <br />8547029080 <br />8547003873</span></p>)}
          <a href={doctor.contact} className='btn btn-outline-success'>BOOK NOW</a>
        </div>

         <div className="mt-5">
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
      </div>
    </section>
  );
};

export default DoctorProfile;
