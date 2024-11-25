import React from 'react';
import { useContactContext } from '../../context/ContactContext';
import { useNavigate, useParams } from 'react-router-dom';

import './ContactDetails.css';
import PageNotFound from '../../components/pageNotFound/PageNotFound';
import Avatar from '../../components/common/avatar/Avatar';
import NavigationBtn from '../../components/common/navigationBtn/NavigationBtn';

const ContactDetails = () => {
  const { id } = useParams(); // Get the contact ID from the URL
  const { contacts, deleteContact } = useContactContext(); // Access context methods and state
  const navigate = useNavigate();

  // Find the contact by ID
  const targetContact = contacts.find((c) => c.id === parseInt(id));

  // Show a 404 page if the contact does not exist
  if (!targetContact) return <PageNotFound />;

  // Handle contact deletion and navigate back to the home page
  const handleContactDeletion = async () => {
    try {
      await deleteContact(id);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="contact-details-container">
        {/* Header Section */}
        <div className="contact-header">
          <Avatar size="80px" contact={targetContact} fontSize="2rem" />
          <div className="contact-info">
            <h1>{targetContact.name}</h1>
          </div>
          <div className="contact-actions">
            {/* Navigation Buttons */}
            <NavigationBtn text="Back To Home" path="/" />
            <NavigationBtn text="Edit" path={`/edit/${targetContact.id}`} />
            <button className="delete-button" onClick={handleContactDeletion}>
              <img src="/delete.svg" alt="delete" />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="contact-actions-row">
          <button>Email</button>
          <button>Chat</button>
          <button>Video</button>
        </div>

        {/* Contact Details Section */}
        <div className="contact-details-section">
          <div className="label-section">
            <button>+ Label</button>
          </div>
          <div className="details">
            {/* Display Email */}
            <div>
              <h3>Email</h3>
              <div>{targetContact.email ? <p>{targetContact.email}</p> : <p>Add Email</p>}</div>
            </div>
            {/* Display Phone */}
            <div>
              <h3>Phone</h3>
              {targetContact.phone ? <p>{targetContact.phone}</p> : <p>Add Phone</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
