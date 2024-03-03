import { configureStore } from '@reduxjs/toolkit';
import envelopes from '../features/envelopes/envelopesReducer';

export const store = configureStore({
  reducer: { envelopes },
});
