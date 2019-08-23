/**
 * What is happening here?
 *
 * 1. Renders a React Modal component
 * 2. Open and close state is controlled 
 *   from parent Calendar component
 * 3. The Modal renders a form which can be used
 *    to CREATE a new event
 *
 */

 /** TODO:
  * 
  * Leave it how you found it 🙄
  * You're on your own from here if you edit 🤪
  * 
  */

import React from 'react';
import Modal from 'react-modal';

import EventForm from '../Event/EventForm';
import './Event.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

const EventModal = ({ isOpen, closeModal, event }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Event Modal"
    >
      <p onClick={closeModal} className="close">
        X
      </p>
      <EventForm
        key="main"
        event={event}
        closeModal={closeModal}
      />
    </Modal>
  );
};

export default EventModal;
