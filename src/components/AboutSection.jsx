import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsSection = () => {
    return (
        <section className="container about-us-section py-5">
            <div className="container">
                <div className="row g-5">
                    {/* Text Column */}
                    <div className="col-md-6" data-aos="fade-right">
                        <small className='subheading fw-bold'>ABOUT US</small>
                        <h2 className="fw-bold mb-3">Dr. B. Suresh Kumar, B.Sc, B.H.M.S, M.D (Hom), PG.Dip.IACH (Greece), S.C.P.H+, P.G.Hom (London)</h2>
                        <p className="text-muted">
                            <strong>Dr. B. Suresh Kumar</strong> is a Senior homoeopath consultant with over 36 years of clinical experience, renowned for his expertise in treating complex and so-called incurable diseases. He is the Director and Chief Physician at the Body Mind Homoeopathic Research Centre in Kerala, India, with branches in in Ayyanthol Thrissur, Moonnupeedika Kodungaloor, and Kalladikode, Palakkad, and KNP Puram Tirupur.
                        </p>
                        <p className="text-muted">
                            Born into a homoeopathic family of eminent practitioners, Dr. Suresh Kumar has an impressive academic background, holding multiple advanced qualifications including:
                        </p>
                        <ul>
                            <li>M.D (Homoeopathy) from Dr. Babasaheb Ambedkar Marathwada University</li>
                            <li>PG Diploma from the International Academy of Classical Homeopathy, Greece</li>
                            <li>S.C.P.H+ specialization in Predictive Homoeopathy from ECPD (Europe)</li>
                            <li>P.G.Hom (London) from Hahnemann College of Homoeopathy, U.K.</li>
                        </ul>
                        <p className='text-muted'>He has trained under world-renowned homeopaths like Dr. George Vithoulkas, Dr. Praful Vijayakar, Misha Norland, and Rajan Sankaran, enriching his approach with both classical and predictive methodologies.</p>
                        <p><strong>A Legacy of Healing, Rooted in Care.</strong> <br /><p className='text-muted'>Body Mind Homeopathy - Where Science Meets Sensitivity<br />At Body Mind Homeopathy, we believe true healing embraces both the body and the mind. Our clinic was founded on the values of compassionate care, individual attention, and evidence-based homeopathic practice.</p></p>
                        <Link to="/doctor/sureshkumar" className="btn btn-success rounded-pill px-4 mt-3">Learn More</Link>

                    </div>

                    {/* Image Column */}
                    <div className="col-md-6 text-center" data-aos="fade-right">
                        <img
                            src="assets/doctors/drsureshkumar.png"
                            alt="About Body Mind Homeopathy"
                            className="img-fluid rounded-4 shadow"
                            style={{ maxHeight: '400px', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>
            {/* Doctor 2 */}
            <div className="container mt-5">
                <div className="row g-5">
                     {/* Image Column */}
                    <div className="col-md-6 text-center" data-aos="fade-right">
                        <img
                            src="assets/doctors/draishwarya.jpg"
                            alt="About Body Mind Homeopathy"
                            className="img-fluid rounded-4 shadow"
                            style={{ maxHeight: '400px', objectFit: 'cover' }}
                        />
                    </div>
                    {/* Text Column */}
                    <div className="col-md-6" data-aos="fade-right">
                        <h2 className="fw-bold mb-3">Dr. Aiswarya M.S - Homoeopathic Paediatrician</h2>
                        <p className='text-muted'>
                            Continuing the legacy of care, <strong>Dr. Aiswarya M.S</strong>, daughter of <strong>Dr. Suresh</strong>, brings a modern approach to holistic healing, specializing in pediatric cases.
                        </p>
                        <p className="text-muted">
                            At our clinic, we are committed to offering compassionate, holistic, and evidence-based homeopathic care to children. Led by <strong>Dr. Aiswarya</strong>, a dedicated pediatric homeopathic physician, we specialize in treating a wide range of childhood conditions with a personalized and gentle approach.
                        </p>
                        <p className="text-muted">
                           <strong>Dr. Aiswarya M.S</strong> is a skilled and compassionate Homoeopathic Paediatrician with over 6 years of clinical experience, known for her dedicated work in treating pediatric neurological, behavioral, and respiratory disorders. She holds a B.H.M.S and M.D in Paediatrics from Sarada Krishna Homoeopathic Medical College, Tamil Nadu, and also holds a Diploma in Yoga, reflecting her holistic approach to wellness. Dr. Aiswarya was honored with the Best Researcher Award by the Central Council for Research in Homoeopathy (CCRH), New Delhi, for her groundbreaking thesis on the Effectiveness of Homoeopathy in the Treatment of Epilepsy Among Children, successfully treating over 30 pediatric cases of epileptiform fits with homoeopathic remedies. She has extensive clinical experience in treating childhood allergies and asthma, focusing on long-term relief through individualized homeopathic treatment.

                        </p>
                        <p className='text-muted fw-bold'>Specialisations :</p>
                        <ul>
                            <li>Allergy</li>
                            <li>Adenoids</li>
                            <li>Asthma</li>
                            <li>ADHD (Hyperactivity)</li>
                            <li>Autism</li>
                            <li>Learning Disorders</li>
                        </ul>
                        <p className='text-muted'>At <strong>Body Mind Homoeopathic Research Centre</strong>, Dr. Aiswarya serves as a pediatric consultant across centers in Thrissur (Near Mother Hospital - Ayyanthole), Moonupeedika, and Kalladikode (Palakkad).</p>
                        <Link to="/doctor/aiswarya" className="btn btn-success rounded-pill px-4 mt-3">Learn More</Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
