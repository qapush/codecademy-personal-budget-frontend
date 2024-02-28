import { useSelector } from 'react-redux';
import { selectAll } from '../../store/envelopesReducer';
import { Link } from 'react-router-dom';
import { addOne } from '../../store/thunks';
import Form from '../Form/Form';

export default function Envelopes() {
  const envelopesData = useSelector(selectAll);

  const envelopes = envelopesData.map((item) => {
    return (
      <li key={item.id}>
        <Link to={`/${item.id}`}>
          <div>
            <h2>{item.name}</h2>
            <p>{item.balance}</p>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <>
      <ul>{envelopes}</ul>
      <Form action={addOne} />
    </>
  );
}
