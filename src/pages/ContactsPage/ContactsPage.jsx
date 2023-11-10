// import ContactList from 'components/ContactList/ContactList';
// import Filter from 'components/Filter/Filter';
// import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { selectContactsArray } from 'redux/selectors';

// const ContactsPage = () => {
//   const { items, isLoading, error } = useSelector(selectContactsArray);

//   return (
//     // <h1>This is Contacts Page</h1>
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         marginLeft: 'auto',
//         marginRight: 'auto',
//         width: '560px',
//         // marginTop: '50px',
//         backgroundColor: '#58c800',
//         borderRadius: '20px',
//         padding: '40px 20px',
//         outline: '3px solid rgb(25 118 210)',
//         outlineOffset: '-20px',
//       }}
//     >
//       <h1>&#128222; Phonebook &#128218;</h1>
//       <PhonebookForm />
//       <h2>&#128104; Contacts &#128105;</h2>
//       <Filter />
//       {isLoading && <p>Loading contacts...</p>}
//       {error && <p>{error}</p>}
//       {items.length > 0 && !error && <ContactList />}
//     </div>
//   );
// };

// export default ContactsPage;

import { Container, Card } from '@mui/material';
// ============ ContactForm ============
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
// import ContactForm from '../components/ContactForm/ContactForm';
// ============ ContactList ============
import Filter from 'components/Filter/Filter';

// ============ ContactList ============
// import ContactList from '../components/ContatctsList/ContactsList';
import ContactList from 'components/ContactList/ContactList';

const Contacts = () => {
  return (
    <Container
      component="main"
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Card sx={{ p: 4, maxWidth: 1024 }}>
        <h1>📚 Phonebook 📞</h1>
        <PhonebookForm></PhonebookForm>
        <h2>Contacts</h2>
        <Filter></Filter>
        <ContactList></ContactList>
      </Card>
    </Container>
  );
};

export default Contacts;
