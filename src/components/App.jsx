import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './Layout/Layout';
// import HomePage from '../pages/HomePage/HomePage';
// import SignUp from '../pages/RegisterPage/RegisterPage';
// import SignIn from '../pages/LoginPage/LoginPage';
// import Contacts from '../pages/ContactsPage/ContactsPage';
// import Profile from '../pages/Profile/Profile';
import { refreshUser } from 'redux/auth/authOperations';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NotFound from './NoFoundedPage/NoFoundedPage';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const SignUp = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const SignIn = lazy(() => import('../pages/LoginPage/LoginPage'));
const Contacts = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const Profile = lazy(() => import('../pages/Profile/Profile'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5733',
    },
    secondary: {
      main: '#E0C2FF',
      light: '#F5EBFF',
      contrastText: '#47008F',
    },
  },
});

const App = () => {
  // Create a Redux dispatcher
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="registration"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<SignUp />} />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<SignIn />} />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </ThemeProvider>
  );
};

export default App;
