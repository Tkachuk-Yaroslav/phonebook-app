import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from 'redux/auth/authOperations';
import css from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'name':
        return setName(value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));

    //   const { name, email, password } = e.target.elements;
    //   console.log(name.value, email.value, password.value);
  };

  return (
    <div className={css.wrapper}>
      <form onSubmit={handleSubmit} className={css.form}>
        <h1>Register page</h1>

        <TextField
          label="Name"
          variant="outlined"
          name="name"
          onChange={handleChange}
          value={name}
          className={css.name}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          value={email}
          className={css.email}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          className={css.password}
        />
        <Button variant="contained" type="submit" className={css.register}>
          Register
        </Button>
        <h5>
          Go to <NavLink to="/login">Login</NavLink>
        </h5>
      </form>
    </div>
  );
};

export default Register;
