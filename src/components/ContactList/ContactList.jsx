import React from 'react';
import { Contact } from 'components/Contact/Contact';
import PropTypes from 'prop-types';

export const ContactList = ({ filtredContacts, onDelete }) => {
  return (
    <ul>
      {filtredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filtredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired
};