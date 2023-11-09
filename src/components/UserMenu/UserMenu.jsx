import { Box, Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { getUsername } from 'redux/auth/authSelectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const username = useSelector(getUsername);
  return (
    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <p>Welcome, {username}!</p>
      <Button
        sx={{ height: '30px' }}
        variant="contained"
        onClick={() => {
          dispatch(logOut());
          console.log('dispatch', dispatch);
        }}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default UserMenu;
