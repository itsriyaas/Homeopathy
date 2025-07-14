import React from 'react';
import { useParams } from 'react-router-dom';
import doctorsData from '../components/DoctorsData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FaqSection from './FaqDoc1'; // FAQ for Dr. Aiswarya

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctorsData.find((doc) => doc.id === id);

  React.useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  if (!doctor) {
    return (
      <div className="container py-5 text-center">
        <h2>Doctor not found !</h2>
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
        </div>

        <div className="mt-5">
          <h2 className='fw-bold'>Book an appointment</h2>
          <a href={doctor.contact} className='btn btn-outline-success'>BOOK NOW</a>
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
