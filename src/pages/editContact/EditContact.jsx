import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useContactContext } from '../../context/ContactContext';
import ContactForm from '../../components/contactForm/ContactForm';
import PageNotFound from '../../components/pageNotFound/PageNotFound';

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { contacts } = useContactContext();

  // Get the contact to be edited
  const contactToEdit = contacts.find((contact) => contact.id === parseInt(id));

  // Show a 404 page if the contact does not exist
  if (!contactToEdit) return <PageNotFound />;

  // Handle form close
  const handleClose = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div>
      <ContactForm initialData={contactToEdit} onClose={handleClose} />
    </div>
  );
};

export default EditContact;
