import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unsetToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (body, thunkAPI) => {
    try {
      const resp = await axios.post('/users/signup', body);
      setToken(resp.data.token);
      // console.log(resp.data, '>>>>>');
      toast.success(`Welcome to your phonebook, ${resp.data.user.name}!`);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const resp = await axios.post('/users/login', body);
    setToken(resp.data.token);
    // console.log(resp.data, '>>>>>');
    toast.success(`Welcome back, ${resp.data.user.name}!`);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    unsetToken();
    toast.success('Successfully log out!');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log(state);

    const persistedToken = state.auth.token;
    if (!persistedToken)
      return thunkAPI.rejectWithValue("Sorry, we can't do refresh");
    setToken(persistedToken);

    try {
      const resp = await axios.get('/users/current');
      console.log(resp.data, '>>>>>');

      toast.success(`Welcome back, ${resp.data.name}!`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const signUp = async body => {
//   const response = await axios.post('/users/signup', body);
//   console.log(response.data);
//   return response.data;
// };
