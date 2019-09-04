import React from 'react';
import PropTypes from 'prop-types';

export default function ContactItem({ name, phoneNumber }){
  const number = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  return(
    <>
      <h3>{name} - Phone #: {number}</h3>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired
};
