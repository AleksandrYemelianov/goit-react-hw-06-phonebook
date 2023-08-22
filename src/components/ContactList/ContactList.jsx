import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import ContactItem from 'components/ContactItem/ContactItem';

import css from './ContactList.module.css';

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilterValue);
    //     const nameNormalize = name.toLowerCase();
    // const isExist = contacts.find(contact => nameNormalize === contact.name.toLocaleLowerCase())

    const filterContacts = () => {
        return contacts.filter(({name}) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
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