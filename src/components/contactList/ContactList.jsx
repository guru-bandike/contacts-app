import { useNavigate } from 'react-router-dom';

import './ContactList.css';
import Avatar from '../common/avatar/Avatar';
import { useContactContext } from '../../context/ContactContext';
import NavigationBtn from '../common/navigationBtn/NavigationBtn';

const ContactList = () => {
  const { contacts } = useContactContext();
  const navigate = useNavigate();

  const handleContactClick = (contact) => {
    navigate(`/details/${contact.id}`);
  };

  return (
    <div className="contact-list">
      <div className="table-heading-container">
        <h2>{`Contacts (${contacts.length})`}</h2>
        <NavigationBtn text="Add New Contact" path="/add" />
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th className="desktop-only">Email</th>
              <th className="desktop-only">Phone</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr
                key={contact.id}
                onClick={() => handleContactClick(contact)}
                className="contact-row"
              >
                <td>
                  <Avatar contact={contact} size="1.5rem" fontSize="1rem" marginTop="-4px" />
                  <span>{contact.name}</span>
                </td>
                <td className="desktop-only">{contact.email}</td>
                <td className="desktop-only">{contact.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
