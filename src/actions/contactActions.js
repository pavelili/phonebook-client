import { addContactApi, getContacts } from '../services/contactsApi';

export const UPDATE_NAMEINPUT = 'UPDATE_NAMEINPUT';
export const updateName = name => ({
  type: UPDATE_NAMEINPUT,
  payload: name
});

export const UPDATE_NUMBERINPUT = 'UPDATE_NUMBERINPUT';
export const updateNumber = number => ({
  type: UPDATE_NUMBERINPUT,
  payload: number
});

export const UPDATE_LIST = 'UPDATE_LIST';
export const updateList = () => ({
  type: UPDATE_LIST,
  payload: getContacts()
});

export const ADD_CONTACT = 'ADD_CONTACT';
export const addContact = (name, phoneNumber) => ({
  type: ADD_CONTACT,
  payload: addContactApi(name, phoneNumber)
});
