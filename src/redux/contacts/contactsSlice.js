import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from './operations';
import { handlePending, handleRejected } from './helpers';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [action.payload, ...state.items];
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(el => el.id !== action.payload.id);
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const editedContact = action.payload;
        const index = state.items.findIndex(
          contact => contact.id === editedContact.id
        );

        if (index !== -1) {
          state.items[index] = editedContact;
        }

        state.isLoading = false;
      })

      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export default contactSlice.reducer;
