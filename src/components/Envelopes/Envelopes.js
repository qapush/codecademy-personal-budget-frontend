import { useSelector } from 'react-redux';
import { selectAll } from '../../features/envelopes/envelopesReducer';
import { Link } from 'react-router-dom';
import { addOne } from '../../features/envelopes/thunks';
import Form from '../Form/Form';

export default function Envelopes() {
  const envelopesData = useSelector(selectAll);

  const envelopes = envelopesData.map((item) => {
    return (
      <li key={item.id}>
        <Link to={`/${item.id}`}>
          <div>
            <h2>{item.name}</h2>
            <p>Balance: {item.balance}</p>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <>
      <ul>{envelopes}</ul>
      <h2>Add new envelope</h2>
      <Form action={addOne} />
    </>
  );
}
