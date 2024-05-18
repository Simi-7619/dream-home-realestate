import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import Properties from './layouts/Properties';
import PropertyDetails from './layouts/PropertyDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader:()=>fetch('properties.json')


      },
      {
        path:'/properties',
        element:<Properties/>,
        loader:()=>fetch('properties.json')
      },
      {
        path:"/:id",
        element:<PropertyDetails/>,
        loader:()=>fetch('properties.json')

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
