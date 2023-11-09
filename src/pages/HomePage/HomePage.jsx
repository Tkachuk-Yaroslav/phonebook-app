import { Box } from '@mui/material';
import { StyledNavLink } from 'components/Navigation/Navigation.styled';
import React from 'react';

const HomePage = () => {
  return (
    <Box
      sx={{
        // width: '550px',
        textAlign: 'center',
        height: '491px',
      }}
    >
      <h1>Welcome to Phonebook App</h1>
      <img
        height={'300'}
        src="https://play-lh.googleusercontent.com/7O6Mvzvsy_gxPY7IPHN5iJWo9CB9CEeUvs8Ha1m1v0fctHD-tLwBR6TycZ45V-5aGkE"
        alt="Phonebook App"
      />
      <p>
        While developing this phone book, I used the following technology stack:
        React (Hooks, Routers, Redux, Redux Toolkit, Redux-Persist,
        React-Hot-Toast, React-Loader-Spinner), JavaScript, Material Ui. This
        application is connected to the Swagger backend API. You have the option
        to create a user account, log in, add new contacts, delete existing
        contacts, apply filters to your contact list, and log out when you're
        done.
      </p>
      <StyledNavLink to={'/login'}>Start</StyledNavLink>
    </Box>
  );
};

export default HomePage;
