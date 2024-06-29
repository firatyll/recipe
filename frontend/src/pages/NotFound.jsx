import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
      <p className="text-2xl mb-4">Page Not Found</p>
      <Link to="/" className="btn btn-primary">Go to Home</Link>
    </div>
  );
};

export default NotFound;
