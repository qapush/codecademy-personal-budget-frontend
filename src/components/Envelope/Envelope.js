import { useParams } from 'react-router-dom';
import { selectById } from '../../store/envelopesReducer';
import { useSelector } from 'react-redux';
import EnvelopeChangeForm from '../EnvelopeChangeForm/EnvelopeChangeForm';

const Envelope = () => {
  const { id } = useParams();

  const envelope = useSelector((store) => selectById(store, id));
  const status = useSelector((state) => state.envelopes.state);

  if (!envelope && status === 'loaded') return <p>No envelope with id {id} found</p>;
  if (!envelope) return null;

  return (
    <div>
      <h1>{envelope.name}</h1>
      <h2>Balance: {envelope.balance}</h2>
      <hr />
      <EnvelopeChangeForm id={id} />
    </div>
  );
};

export default Envelope;
