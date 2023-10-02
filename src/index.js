import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage';
import { Bookmarked } from './pages/Bookmarked';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ShowsPage } from './pages/ShowsPage';
import { MoviesPage } from './pages/MoviesPage';
import store from './store';
import './styles/main.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/tv-shows" element={<ShowsPage />} />
      <Route path="/bookmarked" element={<Bookmarked />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
