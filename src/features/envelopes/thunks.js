import { createAsyncThunk } from '@reduxjs/toolkit';

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

export const removeOne = createAsyncThunk('envelopes/removeOne', async (id) => {
  await fetch(`http://localhost:4000/envelopes/${id}?`, {
    method: 'DELETE',
  });

  return id;
});

export const addOne = createAsyncThunk('envelopes/addOne', async ({ name, amount }) => {
  const res = await fetch(`http://localhost:4000/envelopes/?name=${name}&amount=${amount}`, {
    method: 'POST',
  });

  return res.json();
});

export const transfer = createAsyncThunk(
  'envelopes/transfer',
  async ({ to, amount, id }, thunkAPI) => {
    console.log(to, amount, id);
    const name = thunkAPI.getState().envelopes.entities[id].name;
    const res = await fetch(`http://localhost:4000/envelopes/transfer/${name}/${to}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: Number(amount) }),
    });

    return res.json();
  },
);
