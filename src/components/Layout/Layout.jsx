import Navigation from 'components/Navigation/Navigation';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { Box, Container, Link } from '@mui/material';
// import { AppBar } from '@mui/material';

const Layout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <Container maxWidth="md">
        {/* sx={{ bgcolor: 'rgb(70, 157, 4)' }} */}
        <Box
          sx={{
            bgcolor: 'rgb(88, 200, 0)',
            // width: '600px',
            ml: 'auto',
            mr: 'auto',
            padding: '0 20px',
            borderRadius: '20px',
          }}
        >
          <header>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '60px',
              }}
              // style={{
              // display: 'flex',
              // justifyContent: 'space-between',
              // alignItems: 'center',
              // marginLeft: 'auto',
              // marginRight: 'auto',
              // width: '600px',

              //     flexDirection: 'column',
              //     backgroundColor: '#58c800',
              //     borderRadius: '20px',
              //     padding: '40px 20px',
              //     outline: 'auto #280a0a00',
              //     outlineOffset: '-20px',
              // }}
            >
              <Navigation />
              {!isLoggedIn ? <AuthNav /> : <UserMenu />}
            </Box>
          </header>

          <main>
            <Box
              sx={{
                bgcolor: 'rgb(88, 200, 0)',
                ml: 'auto',
                mr: 'auto',
                padding: '0 20px',
                borderRadius: '20px',
              }}
            >
              <Suspense fallback="Loading...">
                <Outlet />
              </Suspense>
            </Box>
          </main>

          <footer>
            <Box
              sx={{
                // bgcolor: 'rgb(88, 200, 0)',
                // width: '600px',
                width: '500px',
                ml: 'auto',
                mr: 'auto',
                pb: '20px',
                pt: '10px',
                // padding: '0 20px',
                // borderRadius: '20px',
              }}
            >
              <h2>
                This work was made by{' '}
                <Link href="https://github.com/Tkachuk-Yaroslav">
                  Yaroslav Tkachuk
                </Link>
              </h2>
            </Box>
          </footer>
        </Box>
      </Container>
    </>
  );
};

export default Layout;
