// AddContact.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../../components/contactForm/ContactForm';

const AddContact = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); // Redirect back to the main page after adding
  };

  return (
    <div>
      <ContactForm initialData={null} onClose={handleClose} />
    </div>
  );
};

export default AddContact;
