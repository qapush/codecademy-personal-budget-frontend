import './App.css';
import { useEffect } from 'react';
import { fetchAll, selectAll } from '../../store/envelopesReducer';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const envelopesData = useSelector(selectAll);

  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  const envelopes = envelopesData.map((item) => {
    return (
      <li key={item.id}>
        <div>
          <h2>{item.name}</h2>
          <p>{item.balance}</p>
        </div>
      </li>
    );
  });

  return (
    <div className="App">
      <ul>{envelopes}</ul>
    </div>
  );
}

export default App;
