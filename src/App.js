import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import { Home }  from './Pages/Home';
import { Portofoliu } from './Pages/Portofoliu';
import { ServiciiParteneri } from './Pages/ServiciiParteneri';
import { Contact } from './Pages/Contact';


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