import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Error, User, Users } from './pages';

function App() {
  return (
    <RouterProvider router={createBrowserRouter([
      {
        path: '/',
        element: <Navigate to="/users" replace />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/users/:userId',
        element: <User />,
      },
      {
        path: '/404',
        element: <Error />,
      },
    ])}
    />
  );
}

export default App;
