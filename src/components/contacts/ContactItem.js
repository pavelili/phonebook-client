import React from 'react';
import PropTypes from 'prop-types';

export default function ContactItem({ name, phoneNumber }){
  const number = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  return(
    <>
      <h1>{name} - Phone #: {number}</h1>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired
};
