import { useSpring, animated } from 'react-spring';

import { Container, Card } from '@mui/material';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { useEffect, useState } from 'react';

const Contacts = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Встановіть showContent в true після деякої затримки або після завантаження даних
    // Наприклад, через setTimeout або після отримання даних з сервера
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 1000); // Час затримки в мілісекундах (1 секунда в даному випадку)

    // Очищення таймауту при розмонтуванні компонента
    return () => clearTimeout(timeoutId);
  }, []);

  const fadeIn = useSpring({
    opacity: showContent ? 1 : 0,
    transform: showContent ? 'translateY(0)' : 'translateY(50px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  });

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
        <h1 style={{ textAlign: 'center' }}>📚 Phonebook 📞</h1>
        <PhonebookForm></PhonebookForm>
        <h2>Contacts</h2>
        <Filter></Filter>
        <animated.div style={fadeIn}>
          <ContactList></ContactList>{' '}
        </animated.div>
      </Card>
    </Container>
  );
};

export default Contacts;
