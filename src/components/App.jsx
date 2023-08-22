import React from 'react'
import { ToastContainer } from 'react-toastify';
import css from './App.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';


export default function App() {

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />  
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer/>
    </div>
  )
}



