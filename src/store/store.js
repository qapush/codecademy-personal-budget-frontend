import { configureStore } from '@reduxjs/toolkit';
import envelopesSlice from './envelopesReducer';


export const store = configureStore({
  reducer: {envelopesSlice},
})