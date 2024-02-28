import { useParams } from 'react-router-dom';
import { selectById } from '../../store/envelopesReducer';
import { useSelector, useDispatch } from 'react-redux';
import { removeOne, changeOne } from '../../store/thunks';
import Form from '../Form/Form';

const Envelope = () => {
  const { id } = useParams();

  const envelope = useSelector((store) => selectById(store, id));
  const status = useSelector((state) => state.envelopes.state);
  const dispatch = useDispatch();

  if (!envelope && status === 'loaded') return <p>No envelope with id {id} found</p>;
  if (!envelope) return null;

  const handleRemove = () => {
    const verify = window.prompt('Type in "delete" to confirm', 'delete');
    if (verify === 'delete') {
      dispatch(removeOne(id));
    }
  };

  return (
    <div>
      <h1>{envelope.name}</h1>
      <h2>Balance: {envelope.balance}</h2>
      <hr />
      <h2>Change envelope</h2>
      <Form id={id} action={changeOne} />
      <button onClick={handleRemove}>Remove envelope</button>
      <h2>Transfer to another envelope</h2>
    </div>
  );
};

export default Envelope;
