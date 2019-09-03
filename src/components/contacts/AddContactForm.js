import React from 'react';
import PropTypes from 'prop-types';

export default function AddContactForm({
  contactSubmit,
  nameInput,
  nameChange,
  numberInput,
  numberChange
}){
  return(
    <form onSubmit={event => contactSubmit(event, nameInput, numberInput)}>
      <div>
        <label htmlFor="name">Name: </label>
        <input id="name" value={nameInput} onChange={nameChange} />
      </div>
      <div>
        <label htmlFor="number">Phone Number: </label>
        <input id="number" value={numberInput} onChange={numberChange} />
      </div>
      <button>Add Contact</button>
    </form>
  );
}

AddContactForm.propTypes = {
  contactSubmit: PropTypes.func.isRequired,
  nameInput: PropTypes.string.isRequired,
  nameChange: PropTypes.func.isRequired,
  numberInput: PropTypes.string.isRequired,
  numberChange: PropTypes.func.isRequired
};
