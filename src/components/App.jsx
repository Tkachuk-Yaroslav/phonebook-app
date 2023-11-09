// import ContactList from './ContactList/ContactList';
// import PhonebookForm from './PhonebookForm/PhonebookForm';
// import Filter from './Filter/Filter';
// import { useSelector } from 'react-redux';
// import { selectContactsArray } from 'redux/selectors';
import { CirclesWithBar } from 'react-loader-spinner';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';

import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { getIsRefreshing } from 'redux/auth/authSelectors';
import { Box } from '@mui/material';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export const App = () => {
  const isRefreshing = useSelector(getIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Box sx={{ mr: 'auto', ml: 'auto', width: '150px' }}>
      {/* <b>Refreshing user...</b> */}
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </Box>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};

// const App = () => {
// const { items, isLoading, error } = useSelector(selectContactsArray);

//   return (
// <div
//   style={{
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     width: '600px',
//     marginTop: '50px',
//     backgroundColor: '#58c800',
//     borderRadius: '20px',
//     padding: '40px 20px',
//     outline: 'auto #280a0a00',
//     outlineOffset: '-20px',
//   }}
// >
//   <h1>&#128222; Phonebook &#128218;</h1>
//   <PhonebookForm />
//   <h2>&#128104; Contacts &#128105;</h2>
//   <Filter />
//   {isLoading && <p>Loading contacts...</p>}
//   {error && <p>{error}</p>}
//   {items.length > 0 && !error && <ContactList />}
// </div>
//   );
// };

export default App;
