import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const galleryImages = [
  'https://lh3.googleusercontent.com/p/AF1QipPTD4sr59lMujYj6_FlXMECPpzLqye7V1PeGRxq=s680-w680-h510-rw',
  'https://lh3.googleusercontent.com/p/AF1QipONGM1c_A3SpLF_jG5tTYrpLpN51A05e-g74lKJ=s680-w680-h510-rw',
  'https://lh3.googleusercontent.com/p/AF1QipO1VRP16pogcIqWodjpTVXLZ2A3ca_VEy_K6BH0=s680-w680-h510-rw',
  'https://content3.jdmagicbox.com/v2/comp/thrissur/v7/9999px487.x487.240405024012.r7v7/catalogue/dr-aiswarya-m-s-homeopathic-clinic-irinjalakuda-thrissur-homeopathic-doctors-3hdkx59jgo.jpg',
  'https://content.jdmagicbox.com/v2/comp/thrissur/v7/9999px487.x487.240405024012.r7v7/catalogue/dr-aiswarya-m-s-homeopathic-clinic-irinjalakuda-thrissur-homeopathic-doctors-hhbdu97bm4.jpg',
  'https://lh3.googleusercontent.com/p/AF1QipNDJQrOHKWUAzzzDXKfGtKSoi2me3-jOJ1zNvDI=s680-w680-h510-rw',
];

const GallerySection = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Our Gallery</h2>
        <div className="row g-3">
          {galleryImages.map((src, idx) => (
            <div className="col-6 col-md-4" key={idx}>
              <div className="gallery-img-wrapper rounded overflow-hidden shadow-sm" onClick={() => openModal(idx)} style={{ cursor: 'pointer' }}>
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="w-100 img-fluid"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Modal View */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
          <Modal.Body className="p-0 position-relative text-center bg-black">
            <img src={galleryImages[currentIndex]} alt="Full View" className="img-fluid w-100" />
            <Button
              variant="light"
              className="position-absolute top-50 start-0 translate-middle-y"
              onClick={prevImage}
              style={{ zIndex: 10 }}
            >
              ‹
            </Button>
            <Button
              variant="light"
              className="position-absolute top-50 end-0 translate-middle-y"
              onClick={nextImage}
              style={{ zIndex: 10 }}
            >
              ›
            </Button>
            <Button
              variant="secondary"
              className="position-absolute top-0 end-0 m-2"
              onClick={() => setShowModal(false)}
            >
              ✕
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
};

export default GallerySection;
