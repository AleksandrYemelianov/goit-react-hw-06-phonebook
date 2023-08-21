import React, { useState } from 'react';

import { useDispatch } from "react-redux";
import { nanoid } from '@reduxjs/toolkit';

import { addContact } from 'redux/contacts/slice';

import css from './ContactForm.module.css'

export default function ContactForm() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const dispatch = useDispatch();

    const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
        case 'name':
            setName(value)
            break;
        case 'number':
            setNumber(value)
            break;
    
        default:
            break;
    }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContact(name, number))
        setName('')
        setNumber('')
    }

    const idNameInput = nanoid();
    const idNumberInput = nanoid()
    return (
        <div className={css.formWrap}>
                <form onSubmit={handleSubmit} className={css.form}>
                    <label htmlFor={idNameInput} className={css.label}>Name</label>
                    <input
                    className={css.input}
                    id={idNameInput}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                    <label htmlFor={idNumberInput} className={css.label}>Number</label>
                    <input
                    className={css.input}
                    id={idNumberInput}
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                    <button type="submit" className={css.btn}>Add contact</button>
                </form>
        </div>
    )
    }
