import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram } from 'react-icons/fa';

const instagramImages = [
  {
    src: '/assets/instagram/insta1.jpg',
    link: 'https://www.instagram.com/reel/DDO4Jv_vqcV/',
  },
  {
    src: '/assets/instagram/insta2.jpg',
    link: 'https://www.instagram.com/p/DDkdejWz6lY/',
  },
  {
    src: '/assets/instagram/insta3.jpg',
    link: 'https://www.instagram.com/p/C74dquVSTVm/',
  },
  {
    src: '/assets/instagram/insta4.jpg',
    link: 'https://www.instagram.com/p/DDBfCehTUQU/',
  },
];

const InstagramFeed = () => {
  return (
    <section className="insta-feed-section position-relative text-center py-5">
      <Container>
        <Row className="mb-4 justify-content-center">
          <Col lg={12}>
            <FaInstagram color='#e1306c' size={'70px'}/>
            <h2 className="fw-bold mt-2">Instagram Feed</h2>
          </Col>
        </Row>

        <Row className="g-4">
          {instagramImages.map((img, idx) => (
            <Col key={idx} lg={3} md={4} sm={6}>
              <div className="insta-card-wrapper position-relative rounded overflow-hidden shadow-sm">
                <img
                  src={img.src}
                  alt={`insta-${idx}`}
                  className="img-fluid w-100"
                  style={{ height: '100%', objectFit: 'cover' }}
                />
               <div className="caption-overlay position-absolute bottom-0 w-100 text-center py-2">
  <a
    href={img.link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-decoration-none d-inline-flex align-items-center gap-2"
  >
    <FaInstagram />
    Body Mind Homoeopathy
  </a>
</div>

              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default InstagramFeed;
