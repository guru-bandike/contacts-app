import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Home from './pages/home/Home';
import { ContactProvider } from './context/ContactContext';
import ContactDetails from './pages/contactDetails/ContactDetails';
import Loader from './components/loader/Loader';
import NotFound from './pages/notFound/NotFound';
import AddContact from './pages/addContact/AddContact';
import EditContact from './pages/editContact/EditContact';

const App = () => {
  return (
    <ContactProvider>
      <Router>
        <Loader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
          <Route path="/details/:id" element={<ContactDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />
    </ContactProvider>
  );
};

export default App;
