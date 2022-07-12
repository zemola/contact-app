import React from 'react'
import ContactCard from './contactCard'

 const ContactList = ({ContactArray, getContactId}) => {

  const deletContactId = (id) => {
    getContactId(id)
  }

  const Contacts = ContactArray.map(contact=>{
    return <ContactCard contact= {contact} clickHandler={deletContactId} key = {contact.id}></ContactCard>
  })
  
  return (

    <div>{Contacts}</div>
  )
}


export default ContactList;