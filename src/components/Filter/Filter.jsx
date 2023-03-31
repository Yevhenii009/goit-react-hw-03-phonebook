import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ value, handleFilter }) => {
  return (
    <label>
      Find contacts by name <br />
      <input
        value={value}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};