import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from './Form';
import Modal from 'react-modal';

const ContactButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button 
        style={{
          color: 'white',
          backgroundColor: 'maroon',
          border: 'none',
          padding: '5px',
          borderRadius: '15px',
          cursor: 'pointer',
          width: '200px',
          fontFamily: 'Roboto, sans-serif',
          fontSize: '16px'
        }}
        onClick={openModal}
      >
        <FontAwesomeIcon icon={faComment} color='white' size='1x' style={{ marginRight: 6 }} />
        Get in Touch
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Contact Form"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            borderRadius: '10px',
            width: '80%',
            maxWidth: '600px',
          },
        }}
      >
        <Form closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default ContactButton;
