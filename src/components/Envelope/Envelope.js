import { useParams, useNavigate } from 'react-router-dom';
import { selectById } from '../../features/envelopes/envelopesReducer';
import { useSelector, useDispatch } from 'react-redux';
import { removeOne, changeOne, transfer } from '../../features/envelopes/thunks';
import Form from '../Form/Form';

const Envelope = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const envelope = useSelector((store) => selectById(store, id));
  const status = useSelector((state) => state.envelopes.state);
  const dispatch = useDispatch();

  if (!envelope && status === 'loaded') return <p>No envelope with id {id} found</p>;
  if (!envelope) return null;

  const handleRemove = () => {
    const verify = window.prompt('Type in "delete" to confirm', 'delete');
    if (verify === 'delete') {
      dispatch(removeOne(id)).then(() => navigate('/'));
    }
  };

  return (
    <div>
      <h1>{envelope.name}</h1>
      <h2>Balance: {envelope.balance}</h2>
      <hr />
      <h2>Change envelope</h2>
      <Form id={id} action={changeOne} />
      <h2>Transfer to another envelope</h2>
      <Form id={id} action={transfer} transfer />
      <button onClick={handleRemove}>Remove envelope</button>
    </div>
  );
};

export default Envelope;
