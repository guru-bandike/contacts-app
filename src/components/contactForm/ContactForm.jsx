import React, { useState, useEffect } from 'react';
import { useContactContext } from '../../context/ContactContext';
import './ContactForm.css';

const ContactForm = ({ initialData, onClose }) => {
  // State to manage form data, initialized with default empty values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Extracting context methods for adding and updating contacts
  const { addContact, updateContact } = useContactContext();

  // Effect to set form data when `initialData` (e.g., existing contact) is provided
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  // Handle input changes to update the `formData` state dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update the specific field
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)
    if (initialData) {
      // If `initialData` exists, update the existing contact
      updateContact(initialData.id, formData);
    } else {
      // Otherwise, create a new contact
      addContact(formData);
    }
    onClose(); // Close the form after submission
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* Display different headings based on whether the form is for editing or adding */}
        <h2>{initialData ? 'Edit Contact' : 'Add Contact'}</h2>

        {/* Input field for the contact's name */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter name"
            required
          />
        </div>

        {/* Input field for the contact's email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email"
            required
          />
        </div>

        {/* Input field for the contact's phone number */}
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter phone number"
            required
          />
        </div>

        {/* Buttons to submit or cancel the form */}
        <div className="form-buttons">
          <button type="submit" className="save-button">
            {initialData ? 'Save Changes' : 'Add Contact'} {/* Adjust button text dynamically */}
          </button>
          <button type="button" className="cancel-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
