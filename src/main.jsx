import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layotus/Layout.jsx';
import Home from './Components/Home.jsx';
import Addbooks from './Components/Addbooks.jsx';
import Update from './Components/Update.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Register from './Register And Login/Register.jsx';
import Login from './Register And Login/Login.jsx';
import Users from './Users/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/books')

      },
      {
        path: '/Addbooks',
        element: <Addbooks></Addbooks>,
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)

      },
      {
        path: '/Register',
        element: <Register></Register>,
      },
      {
        path: '/Login',
        element: <Login></Login>,
      },
      {
        path: '/Users',
        element: <Users></Users>,
        loader:() => fetch('http://localhost:5000/users')
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
