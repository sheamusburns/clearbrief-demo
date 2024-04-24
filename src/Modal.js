import React from 'react';
import './Modal.css'; // Make sure to create a Modal.css file to style your modal

const Modal = ({ member, closeModal }) => {
  if (!member) return null;

  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <button className="modal-close-button" onClick={closeModal}>&times;</button>
        </div>
        <div className="modal-body">
          <div className="modal-summary">
            <div className="modal-photo-wrapper">
              <img src={member.image} alt={member.name} className="modal-photo"/>
            </div>
            <h2 className="modal-name">{member.name}</h2>
            <h3 className="modal-title">{member.title}</h3>
          </div>

          <p className="modal-bio" dangerouslySetInnerHTML={createMarkup(member.bio)}></p>
        {/*  I would normally find another way to do this since it's generally unsafe practice but I was pulling divs directly from the clearbrief site and wanted a quick way to make it work. */}
        </div>
      </div>
    </div>
  );
};

export default Modal;