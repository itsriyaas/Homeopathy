
import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="tel:04924246150"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaPhoneAlt size={32} />
    </a>
  );
};

export default WhatsAppButton;