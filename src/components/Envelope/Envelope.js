import { useParams } from 'react-router-dom';
import { selectById } from '../../store/envelopesReducer';
import { useSelector, useDispatch } from 'react-redux';
import { changeOne } from '../../store/envelopesReducer';
import { useEffect } from 'react';

const Envelope = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeOne({ id: 0, amount: '12' }));
  }, []);

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
      <h3>Change:</h3>
      <form></form>
    </div>
  );
};

export default Envelope;
