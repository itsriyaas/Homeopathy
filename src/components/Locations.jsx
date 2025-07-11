import React, { useState } from 'react';

const locations = [
  {
    address: 'St Thomas Nagar Rd, near mother hospital, Sakthan, Aranattukara, Thrissur, Kerala 680003',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.6950929319614!2d76.18615976961856!3d10.517957317922338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7efe9422c5777%3A0xd75981f82bf9b500!2sBody%20Mind%20Homoeopathic%20Research%20Centre%20(BMHRC)%2C%20Since%201990!5e0!3m2!1sen!2sin!4v1752228456010!5m2!1sen!2sin',
  },
  {
    address: 'Kaipamangalam - Aravushala Rd, Moonnupeedika, Kerala 680681',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.2253347215847!2d76.1468082!3d10.323843499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f598f1c0d961%3A0xa04190460139c238!2sDr.%20AISWARYA%20M.S!5e0!3m2!1sen!2sin!4v1752228511844!5m2!1sen!2sin',
  },
  {
    address: '486Q+P6M, KNP Puram, Odakkadu, Tiruppur, Tamil Nadu 641687',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.0208227837134!2d77.3380316!3d11.1118259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907a9187d33fd%3A0xfe847d6c6a6dba66!2sTirupur%20Towers!5e0!3m2!1sen!2sin!4v1752228549097!5m2!1sen!2sin',
  },
];

const LocationsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="locations-section py-5">
      <div className="container">
        <h2 className="fw-bold mb-4">Our Locations</h2>
        <div className="row g-3 mb-4">
          {locations.map((loc, index) => (
            <div
              key={index}
              className={`col-md-4`}
              onClick={() => setSelectedIndex(index)}
              style={{ cursor: 'pointer' }}
            >
              <div
                className={`p-4 border rounded-3 h-100 ${
                  selectedIndex === index ? 'border-dark shadow' : ''
                }`}
              >
                <p className="text-muted small mt-2 mb-0">{loc.address}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="ratio ratio-16x9">
          <iframe
            src={locations[selectedIndex].mapUrl}
            title={locations[selectedIndex].country}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
