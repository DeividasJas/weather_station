import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import AppProvider from './context/AppProvider';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './Layout.jsx';
import ErrorPage from './error-page.jsx';
import About from './components/About.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      {path: '/weather', element: <App/>, errorElement: <ErrorPage/>},
      {path: '/' ,element: <About/>, errorElement: <ErrorPage/>}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>
    </AppProvider>
  </React.StrictMode>
);
