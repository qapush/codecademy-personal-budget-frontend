import { useState } from 'react';
import { changeOne, removeOne } from '../../store/thunks';
import { useDispatch } from 'react-redux';

const EnvelopeChangeForm = ({ id }) => {
  const [form, setForm] = useState({ name: '', amount: '' });
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setForm((state) => ({ ...state, [target.id]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeOne({ id, name: form.name, amount: form.amount }));
    setForm({ name: '', amount: '' });
  };

  const handleRemove = () => {
    const verify = window.prompt('Type in "delete" to confirm', 'delete');
    if (verify === 'delete') {
      dispatch(removeOne(id));
    }
  };

  return (
    <>
      <h2>Update envelope:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Envelope name</label>
        <input type="text" id="name" value={form.name} onChange={handleChange} />
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" value={form.amount} onChange={handleChange} />
        <button type="submit">Update</button>
      </form>
      <button onClick={handleRemove}>Remove envelope</button>
    </>
  );
};

export default EnvelopeChangeForm;
