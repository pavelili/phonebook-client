import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

export default function ContactList({ contactArr, updateList }){
  useEffect(() => {
    updateList();
  });

  const list = contactArr.map(contact => (
    <ContactItem key={contact._id} name={contact.name} phoneNumber={contact.phoneNumber} />
  ));

  return(
    <>
      {list}
    </>
  );
}

ContactList.propTypes = {
  contactArr: PropTypes.array.isRequired,
  updateList: PropTypes.func.isRequired
};
