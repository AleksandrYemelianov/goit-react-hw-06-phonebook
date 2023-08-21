import React, { useState, useEffect } from 'react'
import useLocalStorage from '../hooks/LocalStorage'
import { nanoid } from 'nanoid';

import css from './App.module.css';
import contactsDefault from '../data/contacts.json'
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const CONTACT_KEY = 'contact-item-phonebook';


export default function App() {
  const [contacts, setContacts] = useLocalStorage(CONTACT_KEY, contactsDefault)
  const [filter, setFilter] = useState('')

  useEffect(() => {
  console.log(contacts);
}, [])
  
  const addContact = ({ name, number }) => {
    const nameNormalize = name.toLowerCase();
    const isExist = contacts.find(contact => nameNormalize === contact.name.toLocaleLowerCase())
    
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return
    } 
    
    const contact = {
      id: nanoid(),
      name: name,
      number: number
    }
    
    setContacts(p => [...p, contact])  
  }
  
  const handleFilter = e => {
    const { value } = e.target
    setFilter(value)
  }
  
  const findContact = () => {
    const filterNormalize = filter.toLowerCase();
    return (
      contacts.filter(({ name }) => name.toLowerCase().includes(filterNormalize))
    )
  }

  const deleteContact = (id) => {
    const contactsUpdate = contacts.filter(contact => contact.id !== id)
    setContacts(contactsUpdate)
  }

  return (
     <div className={css.container}>
          <h1>Phonebook</h1>
          <ContactForm addContact={addContact} />
        
          <h2>Contacts</h2>
          <Filter onChange={handleFilter} filter={filter}></Filter>
          <ContactList contactsData={findContact()} deleteContact={deleteContact}/>
      </div>
  )
}



