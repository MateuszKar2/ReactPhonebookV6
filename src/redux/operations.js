import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64b403b70efb99d86268a942.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async() => {
        const response = await axios.get("/contacts");
        return response.data;
    });

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async(contact) => {
        const response = await axios.post("/contacts", contact);
        return response.data;
 });

 export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async(contactId) => {
        await axios.delete(`/contacts/${contactId}`);
        return contactId;
 });