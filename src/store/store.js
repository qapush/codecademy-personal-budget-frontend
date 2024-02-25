import { configureStore } from '@reduxjs/toolkit';
import envelopes from './envelopesReducer';

export const store = configureStore({
  reducer: { envelopes },
});
