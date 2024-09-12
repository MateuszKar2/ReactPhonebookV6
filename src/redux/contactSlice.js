import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return action.payload
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.push(action.payload)
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        return state.filter((contact) => contact.id !== action.payload)
      })
  }
});

export default contactSlice.reducer;