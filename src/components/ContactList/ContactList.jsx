import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';

import css from './ContactList.module.css';

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilterValue);

    const filterContacts = () => {
        return contacts.filter(contact => contact.name.includes(filter));
    }

    return (
        <ul className={css.list}>
            {filterContacts().map(contact => (
                <ContactItem key={contact.id} contact={contact} />
            ))}
        </ul>
    )
}

export default ContactList;