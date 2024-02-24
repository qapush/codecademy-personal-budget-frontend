import './App.css';
import { useEffect } from 'react';
import { fetchAll } from '../../store/envelopesReducer';
import { UseDispatch, useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll())
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
