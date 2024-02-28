import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const Form = ({ action }) => {
  const { id } = useParams();
  const [form, setForm] = useState({ name: '', amount: '', id });
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setForm((state) => ({ ...state, [target.id]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(action(form));
    setForm({ name: '', amount: '', id: form.id });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Envelope name</label>
        <input type="text" id="name" value={form.name} onChange={handleChange} />
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" value={form.amount} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
