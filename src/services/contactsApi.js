const url = 'https://pure-woodland-72976.herokuapp.com/api/v1/contacts';

export const getContacts = () => {
  return fetch(url)
    .then(res => {
      if(!res.ok) throw 'Uhh, yeahhhh... You\'re note getting any contacts.';
      return res.json();
    });
};

export const addContactApi = (name, phoneNumber) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, phoneNumber })
  })
    .then(res => res.json());
};
