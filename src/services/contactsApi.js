const url = '';

export const getContacts = () => {
  return fetch(url)
    .then(res => {
      if(!res.ok) throw 'Uhh, yeahhhh... You\'re note getting any contacts.';
      return res.json();
    });
};
