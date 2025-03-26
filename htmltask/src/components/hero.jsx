import React, { useState } from 'react';
import Modal from './modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-light text-center">
      <div className="container py-5">
        <div className="py-5">
          <h1 className="display-4 fw-bold mb-4">Welcome to Our Website</h1>
          <p className="lead mb-4 mx-auto" style={{maxWidth: '700px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            eget felis eget urna ultricies accumsan. Nullam egestas, nunc eu
            rhoncus gravida, massa lorem sodales ligula, et convallis dui mi a tortor.
          </p>
          <button onClick={handleShowModal} className="btn btn-primary btn-lg px-4 gap-3">
            Learn More
          </button>
        </div>
      </div>
      
      <Modal 
        show={showModal} 
        handleClose={handleCloseModal}
        title="Welcome!"
        content="Thank you for your interest in our services. We're excited to work with you!"
      />
    </div>
  );
};

export default Hero;