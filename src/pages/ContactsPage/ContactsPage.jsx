import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectContactsArray } from 'redux/selectors';

const ContactsPage = () => {
  const { items, isLoading, error } = useSelector(selectContactsArray);

  return (
    // <h1>This is Contacts Page</h1>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '560px',
        // marginTop: '50px',
        backgroundColor: '#58c800',
        borderRadius: '20px',
        padding: '40px 20px',
        outline: '3px solid rgb(25 118 210)',
        outlineOffset: '-20px',
      }}
    >
      <h1>&#128222; Phonebook &#128218;</h1>
      <PhonebookForm />
      <h2>&#128104; Contacts &#128105;</h2>
      <Filter />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {items.length > 0 && !error && <ContactList />}
    </div>
  );
};

export default ContactsPage;
