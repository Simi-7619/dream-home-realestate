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
import UpdateProfile from './Pages/UpdateProfile';
import PrivateRoute from './Routes/PrivateRoute';
import ProfileDetails from './Pages/ProfileDetails';
import Contact from './Pages/Contact';


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
      {
        path:'/properties',
        element:<Properties/>,
        loader:()=>fetch('properties.json')
      },
      {
        path:"/:id",
        element:<PrivateRoute><PropertyDetails/></PrivateRoute>,
        loader:()=>fetch('properties.json')
      },
      {
        path:"/dashboard",
        element:<PrivateRoute><ProfileDetails/></PrivateRoute>,
        loader:()=>fetch('properties.json')
      },
      {
        path:'/updateprofile',
        element:<PrivateRoute><UpdateProfile/> </PrivateRoute>
      },
      {
        path:'/contact',
        element:<Contact/>
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
