import { createSlice } from '@reduxjs/toolkit';


const itemSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addInitialItems: (store, action) => {
            return store;
        }
    },
})

export const itemActions = itemSlice.actions;

export default itemSlice;
