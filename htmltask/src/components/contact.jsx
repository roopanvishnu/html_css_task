import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navBar';
import Footer from './footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="text-center mb-4">Contact Us</h1>
            <div className="card shadow-sm p-4">
              <p className="lead">This is the contact page.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;