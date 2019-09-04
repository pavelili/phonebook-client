import React from 'react';
import AddContact from '../containers/AddContact';
import List from '../containers/List';


export default function App() {
  return(
    <>
      <h1>PaveLilis Phone-book</h1>
      <AddContact />
      <List />
    </>
  );
}
