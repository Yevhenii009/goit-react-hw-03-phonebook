import React from 'react';
import css from './Contact.module.css';
import PropTypes from 'prop-types';

export const Contact = ({ contact, onDelete }) => {
  return (
    <li className={css.contactListItem}>
      {contact.name}: {contact.number}{' '}
      <button
        onClick={() => onDelete(contact.id)}
        className={css.button}
        id={contact.id}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};