import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';

const envelopesAdapted = createEntityAdapter();

export const fetchAll = createAsyncThunk('envelopes/fetchAll', async () => {
  const response = await fetch('http://localhost:4000/envelopes');
  return response.json();
});

export const changeOne = createAsyncThunk('envelopes/changeOne', async (entity) => {
  let URL = `http://localhost:4000/envelopes/${entity.id}?`;
  if (entity.amount) URL += `amount=${entity.amount}`;
  URL += '&';
  if (entity.name) URL += `name=${entity.name}`;

  const response = await fetch(URL, {
    method: 'PUT',
  });
  return response.json();
});

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
  },
});

export default envelopesReducer.reducer;

export const { selectAll, selectById } = envelopesAdapted.getSelectors((state) => state.envelopes);
