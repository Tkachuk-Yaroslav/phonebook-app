import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getAllContacts = async () => {
  const response = await axios.get('/contacts');
  console.log(response.data);
  return response.data;
};

export const addOneContact = async contact => {
  const response = await axios.post('/contacts', contact);
  console.log(response.data);
  return response.data;
};

export const deleteOneContact = async contactId => {
  const response = await axios.delete(`/contacts/${contactId}`);
  console.log(response.data);
  return response.data;
};
