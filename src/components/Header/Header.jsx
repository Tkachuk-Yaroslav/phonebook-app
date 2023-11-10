import { AppBar, Container, Toolbar } from '@mui/material';
import HeaderMenu from 'components/HeaderMenu/HeaderMenu';
import HeaderProfile from 'components/HeaderProfile/HeaderProfile';
import React from 'react';

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(16, 20, 24, 0.8)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HeaderMenu />
          <HeaderProfile />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
