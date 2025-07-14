import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notfound-wrapper d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <img
        src="/assets/404.png"
        alt="404 - Page Not Found"
        className="img-fluid mb-4"
        style={{ maxWidth: '200px' }}
      />
      <h2 className="fw-bold mb-2">PAGE NOT FOUND</h2>
      <p className="text-muted mb-4">
        The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
      </p>
      <Link to="/" className="btn btn-dark rounded-pill px-4">
        HOME PAGE
      </Link>
    </div>
  );
};

export default NotFound;
