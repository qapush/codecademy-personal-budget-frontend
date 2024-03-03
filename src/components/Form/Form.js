import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { selectAll } from '../../features/envelopes/envelopesReducer';

const Form = ({ action, transfer }) => {
  const { id } = useParams();
  const initialForm = { name: '', amount: '', to: '', id };
  const [form, handleChange, resetForm] = useForm(initialForm);
  const dispatch = useDispatch();
  const envelopes = useSelector(selectAll);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(action(form));
    resetForm();
  };

  const name = transfer ? (
    <>
      <label htmlFor="to">Transfer to</label>
      <select id="to" value={form.to} onChange={handleChange} required>
        <option key="node"></option>
        {envelopes.map((envelope) => {
          if (envelope.id !== Number(id)) return <option key={envelope.id}>{envelope.name}</option>;
        })}
      </select>
    </>
  ) : (
    <>
      <label htmlFor="name">Envelope name</label>
      <input type="text" id="name" value={form.name} onChange={handleChange} />
    </>
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        {name}
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" value={form.amount} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
