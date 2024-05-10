import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { fetchAll, changeOne, removeOne, addOne, transfer } from './thunks';

const envelopesAdapter = createEntityAdapter();

const envelopesReducer = createSlice({
  name: 'envelopes',
  initialState: envelopesAdapter.getInitialState({ state: 'idle' }),
  extraReducers: (builder) => {
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      envelopesAdapter.setAll(state, action);
      state.state = 'loaded';
    });
    builder.addCase(changeOne.fulfilled, (state, action) => {
      envelopesAdapter.setOne(state, action.payload);
    });
    builder.addCase(removeOne.fulfilled, (state, action) => {
      envelopesAdapter.removeOne(state, action.payload);
    });
    builder.addCase(addOne.fulfilled, (state, action) => {
      envelopesAdapter.addOne(state, action.payload);
    });
    builder.addCase(transfer.fulfilled, (state, action) => {
      console.log(action.payload);
      envelopesAdapter.setMany(state, action.payload);
    });
  },
});

export default envelopesReducer.reducer;

export const { selectAll, selectById } = envelopesAdapter.getSelectors((state) => state.envelopes);
