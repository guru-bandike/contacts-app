import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const ContactContext = createContext();

export const useContactContext = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]); // Holds the list of contacts
  const [isLoading, setIsLoading] = useState(false); // Tracks loading state for API requests
  const [selectedContact, setSelectedContact] = useState(null); // Tracks the currently selected contact

  // Fetch contacts from the API on initial load
  useEffect(() => {
    const fetchUpdateContacts = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(API_BASE_URL);
        setContacts(res.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUpdateContacts();
  }, []);

  // Add a new contact
  const addContact = async (newContact) => {
    try {
      setIsLoading(true);
      const res = await axios.post(API_BASE_URL, newContact, {
        headers: { 'Content-Type': 'application/json' },
      });
      setContacts([...contacts, res.data]);
      toast.success('Contact ADDED Successfully👍');
    } catch (error) {
      toast.error('Failed To ADD Contact, Please try again!');
      console.error('Error adding contact:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Update an existing contact
  const updateContact = async (id, updatedContact) => {
    try {
      setIsLoading(true);
      await axios.patch(`${API_BASE_URL}/${id}`, updatedContact, {
        headers: { 'Content-Type': 'application/json' },
      });
      setContacts(
        contacts.map((contact) => (contact.id === id ? { ...contact, ...updatedContact } : contact))
      );
      toast.success('Contact UPDATED Successfully👍');
    } catch (error) {
      toast.error('Faild To UPDATE Contact, Please try again!');
      console.error('Error updating contact:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Delete a contact
  const deleteContact = async (id) => {
    try {
      setIsLoading(true);
      await axios.delete(`${API_BASE_URL}/${id}`);
      setContacts(contacts.filter((contact) => contact.id !== parseInt(id)));
      toast.success('Contact DELETED Successfully👍');
    } catch (error) {
      toast.error('Faild To DELETE Contact, Please try again!');
      console.error('Error deleting contact:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        isLoading,
        contacts,
        selectedContact,
        setSelectedContact,
        addContact,
        updateContact,
        deleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
