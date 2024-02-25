import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import Envelope from './components/Envelope/Envelope';
import { store } from './store/store';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} />
      <Route path="/:id" element={<Envelope />} />
    </Route>,
  ),
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
