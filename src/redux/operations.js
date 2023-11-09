import { addOneContact, deleteOneContact, getAllContacts } from 'api/contacts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
// export const fetchContacts = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await getAllContacts();
//     dispatch(fetchingSuccess(response));
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
// };

///////////////////////////////////////////////////
//fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену "contacts/fetchAll".
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getAllContacts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//addContact - додавання контакту (метод POST). Базовий тип екшену "contacts/addContact".
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await addOneContact(contact);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//deleteContact - видалення контакту (метод DELETE). Базовий тип екшену "contacts/deleteContact".
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await deleteOneContact(id);
      // console.log(response, '>>>>>>');
      toast.success(`${response.name} successfully deleted!`);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
