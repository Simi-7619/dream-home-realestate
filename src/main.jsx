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
import Login from './Pages/Login';
import Register from './Pages/Register';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Providers/AuthProvider';
import FirstLogin from './Pages/FirstLogin';
import UpdateProfile from './Pages/UpdateProfile';


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
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      // {
      //   path:'/properties',
      //   element:<Properties/>,
      //   loader:()=>fetch('properties.json')
      // },
      {
        path:"/:id",
        element:<PropertyDetails/>,
        loader:()=>fetch('properties.json')
      },
      {
        path:'/firstLogin',
        element:<FirstLogin/>
      },
      {
        path:'/updateprofile',
        element:<UpdateProfile/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <Toaster/>
    </AuthProvider>
  </React.StrictMode>,
)
