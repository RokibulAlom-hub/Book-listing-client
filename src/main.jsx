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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:() => fetch('http://localhost:5000/books')
        
      },
      {
        path:'/Addbooks',
        element:<Addbooks></Addbooks>,
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params}) => fetch(`http://localhost:5000/books/${params.id}`)
        
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
