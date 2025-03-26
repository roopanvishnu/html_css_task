import React from 'react';
import Navbar from './navBar';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Service = () => {
  const services = [
    'Website Development',
    'Mobile App Development',
    'UI/UX Design',
    'E-commerce Solutions',
    'Digital Marketing',
    'Content Management',
    'SEO Optimization',
    'Maintenance & Support'
  ];

  return (
    <div>
      <Navbar />
      <div className="container py-5">
        <h1 className="text-center mb-4">Our Services</h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">What We Offer</h4>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {services.map((service, index) => (
                    <li key={index} className="list-group-item d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;