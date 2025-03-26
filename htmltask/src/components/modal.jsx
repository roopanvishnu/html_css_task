import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Modal = ({ show, handleClose, title, content }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{content}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      </div>
      <div className="modal-backdrop show"></div>
    </div>
  );
};

export default Modal;