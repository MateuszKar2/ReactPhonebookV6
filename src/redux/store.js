import {configureStore} from "@reduxjs/toolkit";
import contactReducer from "./contactSlice";
import filterReducer from "./filterSlice";


const store = configureStore({
    reducer: {
        contacts: contactReducer,
        filter: filterReducer
    }
});

export default store;