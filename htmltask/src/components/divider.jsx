import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Divider = ({ text }) => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          {text ? (
            <div className="position-relative">
              <hr className="border border-secondary border-1 opacity-25" />
              <div className="position-absolute top-0 start-50 translate-middle bg-white px-3">
                <h3 className="fw-bold text-secondary">{text}</h3>
              </div>
            </div>
          ) : (
            <hr className="border border-secondary border-1 opacity-25" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Divider;