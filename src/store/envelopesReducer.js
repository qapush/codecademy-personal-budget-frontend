import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { fetchAll, changeOne, removeOne } from './thunks';

const envelopesAdapted = createEntityAdapter();

const envelopesReducer = createSlice({
  name: 'envelopes',
  initialState: envelopesAdapted.getInitialState({ state: 'idle' }),
  extraReducers: (builder) => {
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      envelopesAdapted.setAll(state, action);
      state.state = 'loaded';
    });
    builder.addCase(changeOne.fulfilled, (state, action) => {
      envelopesAdapted.setOne(state, action.payload);
    });
    builder.addCase(removeOne.fulfilled, (state, action) => {
      envelopesAdapted.removeOne(state, action.payload);
    });
  },
});

export default envelopesReducer.reducer;

export const { selectAll, selectById } = envelopesAdapted.getSelectors((state) => state.envelopes);
