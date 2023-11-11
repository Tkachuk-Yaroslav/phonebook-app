import { Container, Box, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';

const Home = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Встановіть showContent в true після деякої затримки або після завантаження даних
    // Наприклад, через setTimeout або після отримання даних з сервера
    const timeoutId = setTimeout(() => {
      setShowConfetti(false);
    }, 7000); // Час затримки в мілісекундах (1 секунда в даному випадку)

    // Очищення таймауту при розмонтуванні компонента
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Container maxWidth="md">
      {showConfetti && <Confetti />}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Your Phonebook!
        </Typography>
        <Typography variant="body1" paragraph align="center">
          While developing this phone book, I used the following technology
          stack: React (Hooks, Routers, Redux, Redux Toolkit, Redux-Persist,
          React-Hot-Toast, React-Loader-Spinner), JavaScript, Material Ui. This
          application is connected to the Swagger backend API. You have the
          option to create a user account, log in, add new contacts, delete
          existing contacts, apply filters to your contact list, and log out
          when you're done.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/registration"
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
