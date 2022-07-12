import React,{useState, useEffect} from 'react';
import {uuid} from 'uuidv4'
import './App.css';
import Header from './header'
import AddContacts from './addContacts';
import ContactList from './contactList';
import 'tachyons'

function App() {
const LOCAL_STORAGE_KEY = 'ContactArray';
const [ContactArray, setContacts]  = useState ([]);

const addContactHandler = (contact) => {
    setContacts([...ContactArray, {id:uuid,...contact}]);
}


const removeContactHandler = (id) => {
  const newContactList = ContactArray.filter(contact => {
    return contact.id !== id
  });

  setContacts(newContactList);

}

useEffect(()=> {
  const ContactArray = 
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if (ContactArray) {
     setContacts(ContactArray);
    }
 }, []);

useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(ContactArray))
}, [ContactArray]);


  return (
    <div className="App">
      <Header />
      <AddContacts addContactHandler = {addContactHandler}/>
      <ContactList ContactArray = {ContactArray}  getContactId = {removeContactHandler} />
    </div>
  );
}

export default App;
