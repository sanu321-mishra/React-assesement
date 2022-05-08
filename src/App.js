import './App.css';
import { useState } from "react";
import UserForm from "./Component/ContactForm";
import UserList from "./Component/ContactList";
import Gallery from './Component/Imageg';
import AxiosFetch from './Component/PhoneD';

function App() {

  const [contacts, updateContacts] = useState([]);

  const addContact = (contact) => {
    updateContacts([...contacts, contact]);
  };
  return (
    <div className="App">
      {/* <UserForm  addContact={addContact}></UserForm>
      <UserList contacts={contacts} ></UserList>

       */}
       {/* <Gallery></Gallery> */}
       <AxiosFetch></AxiosFetch>

    </div>
  );
}

export default App;
