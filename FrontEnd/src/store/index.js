import {configureStore} from '@reduxjs/toolkit';
import itemSlice from './itemSlice';

const myntrastore = configureStore({
    reducer:{
        items:itemSlice.reducer
    } 
})

export default myntrastore;