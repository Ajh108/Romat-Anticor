import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import { Portofoliu } from './pages/Portofoliu';
import { ServiciiParteneri } from './pages/ServiciiParteneri';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/portofoliu',
      element: <Portofoliu />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/servicii&parteneri',
      element: <ServiciiParteneri />
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;