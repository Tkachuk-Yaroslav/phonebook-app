import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    console.log(filteredContacts);
    return filteredContacts;
  };

  return (
    <ol>
      {filterContact().map(({ id, name, number }) => {
        return (
          <li key={id} className={css.item}>
            <Contact name={name} number={number} id={id} />
          </li>
        );
      })}
    </ol>
  );
};

export default ContactList;
