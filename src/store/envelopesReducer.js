import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';

const envelopesAdapted = createEntityAdapter();

export const fetchAll = createAsyncThunk('envelopes/fetchAll', async () => {
  const response = await fetch('http://localhost:4000/envelopes');
  return response.json();
});

const envelopesReducer = createSlice({
  name: 'envelopes',
  initialState: envelopesAdapted.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(fetchAll.fulfilled, envelopesAdapted.setAll);
  },
});

export default envelopesReducer.reducer;

export const { selectAll } = envelopesAdapted.getSelectors((state) => state.envelopes);
