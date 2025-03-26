import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navBar';
import Footer from './footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="text-center mb-4">About Us</h1>
            <div className="card shadow-sm p-4">
              <p className="lead">This is the about page.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;