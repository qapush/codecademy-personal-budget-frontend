import './App.css';
import { useEffect } from 'react';
import { fetchAll } from '../../features/envelopes/thunks';
import { useDispatch } from 'react-redux';
import Layout from '../Layout/Layout';
import Envelopes from '../Envelopes/Envelopes';
import Envelope from '../Envelope/Envelope';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Envelopes />} />
            <Route path="/:id" element={<Envelope />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
