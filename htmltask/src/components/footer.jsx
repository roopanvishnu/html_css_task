import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="py-4 bg-dark text-white">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>About Us</h5>
            <p className="mb-0">We are a passionate team dedicated to creating amazing web experiences.</p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Contact</h5>
            <p className="mb-1">Email: info@example.com</p>
            <p className="mb-0">Phone: (123) 456-7890</p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Follow Us</h5>
            <div className="social-links">
              <a href="#" className="text-white me-2">Facebook</a>
              <a href="#" className="text-white me-2">Twitter</a>
              <a href="#" className="text-white me-2">Instagram</a>
            </div>
          </div>
        </div>
        <hr className="my-3 bg-secondary" />
        <div>
          <p className="mb-0">&copy; 2025 MyWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;